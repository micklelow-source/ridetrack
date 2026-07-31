"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

async function requireUserId(): Promise<string> {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("You must be signed in to do that.");
  }
  return session.user.id;
}

export async function setRideStatus(
  rideId: string,
  status: "WANT_TO_RIDE" | "RIDDEN"
) {
  const userId = await requireUserId();

  await prisma.userRideStatus.upsert({
    where: { userId_rideId: { userId, rideId } },
    update: {
      status,
      riddenAt: status === "RIDDEN" ? new Date() : undefined,
    },
    create: {
      userId,
      rideId,
      status,
      riddenAt: status === "RIDDEN" ? new Date() : null,
    },
  });

  revalidatePath("/parks");
  revalidatePath("/profile");
}

export async function clearRideStatus(rideId: string) {
  const userId = await requireUserId();
  await prisma.userRideStatus.deleteMany({ where: { userId, rideId } });
  revalidatePath("/parks");
  revalidatePath("/profile");
}

export async function toggleFavoriteRide(rideId: string) {
  const userId = await requireUserId();

  const existing = await prisma.userRideStatus.findUnique({
    where: { userId_rideId: { userId, rideId } },
  });

  if (existing) {
    await prisma.userRideStatus.update({
      where: { id: existing.id },
      data: { favorite: !existing.favorite },
    });
  } else {
    await prisma.userRideStatus.create({
      data: { userId, rideId, favorite: true, status: "RIDDEN", riddenAt: new Date() },
    });
  }

  revalidatePath("/parks");
  revalidatePath("/profile");
}

export async function checkIntoPark(
  parkId: string,
  note: string,
  visibility: "PUBLIC" | "FRIENDS" | "PRIVATE"
) {
  const userId = await requireUserId();

  await prisma.checkIn.create({
    data: { userId, parkId, note: note || null, visibility },
  });

  revalidatePath("/parks");
  revalidatePath("/profile");
  revalidatePath("/friends");
}

export async function sendFriendRequest(usernameOrEmail: string) {
  const userId = await requireUserId();
  const target = usernameOrEmail.trim().toLowerCase();

  const targetUser = await prisma.user.findFirst({
    where: {
      OR: [
        { username: { equals: target } },
        { email: { equals: target } },
      ],
    },
  });

  if (!targetUser) {
    return { error: "No user found with that username or email." };
  }
  if (targetUser.id === userId) {
    return { error: "You can't friend yourself." };
  }

  const existing = await prisma.friendship.findFirst({
    where: {
      OR: [
        { requesterId: userId, addresseeId: targetUser.id },
        { requesterId: targetUser.id, addresseeId: userId },
      ],
    },
  });

  if (existing) {
    return { error: "A friend request already exists with that user." };
  }

  await prisma.friendship.create({
    data: { requesterId: userId, addresseeId: targetUser.id, status: "PENDING" },
  });

  revalidatePath("/friends");
  return { success: true };
}

export async function respondToFriendRequest(
  friendshipId: string,
  accept: boolean
) {
  const userId = await requireUserId();

  const friendship = await prisma.friendship.findUnique({
    where: { id: friendshipId },
  });
  if (!friendship || friendship.addresseeId !== userId) {
    throw new Error("Friend request not found.");
  }

  await prisma.friendship.update({
    where: { id: friendshipId },
    data: {
      status: accept ? "ACCEPTED" : "DECLINED",
      respondedAt: new Date(),
    },
  });

  revalidatePath("/friends");
}

export async function removeFriend(friendshipId: string) {
  const userId = await requireUserId();
  const friendship = await prisma.friendship.findUnique({
    where: { id: friendshipId },
  });
  if (!friendship) return;
  if (friendship.requesterId !== userId && friendship.addresseeId !== userId) {
    throw new Error("Not your friendship to remove.");
  }
  await prisma.friendship.delete({ where: { id: friendshipId } });
  revalidatePath("/friends");
}

export async function updateProfile(data: {
  username: string;
  bio: string;
  homeState: string;
}) {
  const userId = await requireUserId();

  const username = data.username.trim().toLowerCase();
  if (username && !/^[a-z0-9_]{3,20}$/.test(username)) {
    return {
      error: "Username must be 3-20 characters: lowercase letters, numbers, underscore.",
    };
  }

  if (username) {
    const taken = await prisma.user.findFirst({
      where: { username, NOT: { id: userId } },
    });
    if (taken) return { error: "That username is already taken." };
  }

  await prisma.user.update({
    where: { id: userId },
    data: {
      username: username || null,
      bio: data.bio || null,
      homeState: data.homeState || null,
    },
  });

  revalidatePath("/profile");
  return { success: true };
}
