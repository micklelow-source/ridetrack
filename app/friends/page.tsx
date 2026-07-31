import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { AddFriendForm } from "@/components/add-friend-form";
import { respondToFriendRequest, removeFriend } from "@/lib/actions";

export default async function FriendsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  const userId = session.user.id;

  const friendships = await prisma.friendship.findMany({
    where: { OR: [{ requesterId: userId }, { addresseeId: userId }] },
    include: { requester: true, addressee: true },
    orderBy: { createdAt: "desc" },
  });

  const incoming = friendships.filter(
    (f) => f.status === "PENDING" && f.addresseeId === userId
  );
  const outgoing = friendships.filter(
    (f) => f.status === "PENDING" && f.requesterId === userId
  );
  const accepted = friendships.filter((f) => f.status === "ACCEPTED");

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold">Friends & Family</h1>
        <p className="text-sm text-black/60 dark:text-white/60">
          Connect with family and friends to share your ride status and park
          check-ins.
        </p>
      </div>

      <section className="rounded-lg border border-black/10 p-4 dark:border-white/10">
        <AddFriendForm />
      </section>

      {incoming.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold">Friend requests</h2>
          <ul className="flex flex-col gap-2">
            {incoming.map((f) => (
              <li
                key={f.id}
                className="flex items-center justify-between rounded-lg border border-black/10 p-3 text-sm dark:border-white/10"
              >
                <span>{f.requester.name ?? f.requester.email}</span>
                <div className="flex gap-2">
                  <form action={respondToFriendRequest.bind(null, f.id, true)}>
                    <button className="rounded-md bg-foreground px-3 py-1 text-background">
                      Accept
                    </button>
                  </form>
                  <form action={respondToFriendRequest.bind(null, f.id, false)}>
                    <button className="rounded-md border border-black/10 px-3 py-1 dark:border-white/20">
                      Decline
                    </button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {outgoing.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold">Pending requests sent</h2>
          <ul className="flex flex-col gap-2">
            {outgoing.map((f) => (
              <li
                key={f.id}
                className="flex items-center justify-between rounded-lg border border-black/10 p-3 text-sm dark:border-white/10"
              >
                <span>{f.addressee.name ?? f.addressee.email}</span>
                <span className="text-xs text-black/40 dark:text-white/40">Pending</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2 className="mb-3 text-lg font-semibold">Your friends ({accepted.length})</h2>
        {accepted.length === 0 ? (
          <p className="text-sm text-black/60 dark:text-white/60">
            No friends yet — send a request above to start sharing your ride
            status.
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {accepted.map((f) => {
              const friend = f.requesterId === userId ? f.addressee : f.requester;
              return (
                <li
                  key={f.id}
                  className="flex items-center justify-between rounded-lg border border-black/10 p-3 text-sm dark:border-white/10"
                >
                  <div>
                    <div className="font-medium">{friend.name ?? friend.email}</div>
                    {friend.username && (
                      <Link href={`/u/${friend.username}`} className="text-xs text-black/50 underline dark:text-white/50">
                        View shared status
                      </Link>
                    )}
                  </div>
                  <form action={removeFriend.bind(null, f.id)}>
                    <button className="text-xs text-black/40 hover:underline dark:text-white/40">
                      Remove
                    </button>
                  </form>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
