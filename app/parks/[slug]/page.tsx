import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getFriendIds } from "@/lib/friends";
import {
  setRideStatus,
  clearRideStatus,
  toggleFavoriteRide,
  checkIntoPark,
} from "@/lib/actions";

const RIDE_TYPE_LABELS: Record<string, string> = {
  ROLLER_COASTER: "Roller Coaster",
  DARK_RIDE: "Dark Ride",
  WATER_RIDE: "Water Ride",
  FLAT_RIDE: "Flat Ride",
  KIDDIE: "Kiddie",
  TRANSPORT: "Transport",
  SHOW: "Show",
  OTHER: "Other",
};

export default async function ParkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const session = await auth();
  const userId = session?.user?.id;

  const park = await prisma.park.findUnique({
    where: { slug },
    include: {
      rides: {
        orderBy: { name: "asc" },
        include: {
          userStatuses: userId ? { where: { userId } } : false,
        },
      },
    },
  });

  if (!park) notFound();

  const friendIds = userId ? await getFriendIds(userId) : [];

  const recentCheckIns = await prisma.checkIn.findMany({
    where: {
      parkId: park.id,
      OR: [
        userId ? { userId, visibility: { in: ["PUBLIC", "FRIENDS", "PRIVATE"] } } : {},
        { userId: { in: friendIds }, visibility: { in: ["PUBLIC", "FRIENDS"] } },
        { visibility: "PUBLIC" },
      ],
    },
    orderBy: { checkedInAt: "desc" },
    take: 10,
    include: { user: true },
  });

  const riddenCount = park.rides.filter(
    (r) => "userStatuses" in r && r.userStatuses?.[0]?.status === "RIDDEN"
  ).length;

  async function checkInAction(formData: FormData) {
    "use server";
    const note = String(formData.get("note") ?? "");
    const visibility = String(formData.get("visibility") ?? "FRIENDS") as
      | "PUBLIC"
      | "FRIENDS"
      | "PRIVATE";
    await checkIntoPark(park!.id, note, visibility);
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Link href="/parks" className="text-sm text-black/50 hover:underline dark:text-white/50">
          ← All parks
        </Link>
        <h1 className="mt-1 text-2xl font-bold">{park.name}</h1>
        <p className="text-sm text-black/60 dark:text-white/60">
          {park.city}, {park.state}
          {park.website && (
            <>
              {" "}
              ·{" "}
              <a href={park.website} target="_blank" className="underline">
                Website
              </a>
            </>
          )}
        </p>
        {userId && (
          <p className="mt-1 text-sm font-medium">
            {riddenCount} / {park.rides.length} rides ridden
          </p>
        )}
      </div>

      {userId ? (
        <form action={checkInAction} className="flex flex-wrap items-end gap-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
          <div className="flex-1 min-w-40">
            <label className="mb-1 block text-xs font-medium text-black/60 dark:text-white/60">
              Check in with a note (optional)
            </label>
            <input
              type="text"
              name="note"
              placeholder="e.g. Here with the family!"
              className="w-full rounded-md border border-black/10 px-3 py-2 text-sm dark:border-white/20 dark:bg-black"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-black/60 dark:text-white/60">
              Share with
            </label>
            <select
              name="visibility"
              defaultValue="FRIENDS"
              className="rounded-md border border-black/10 px-3 py-2 text-sm dark:border-white/20 dark:bg-black"
            >
              <option value="FRIENDS">Friends</option>
              <option value="PUBLIC">Public</option>
              <option value="PRIVATE">Only me</option>
            </select>
          </div>
          <button
            type="submit"
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
          >
            📍 Check in
          </button>
        </form>
      ) : (
        <p className="rounded-lg border border-black/10 p-4 text-sm dark:border-white/10">
          <Link href="/login" className="underline">
            Sign in
          </Link>{" "}
          to check in and track your ride status at {park.name}.
        </p>
      )}

      <section>
        <h2 className="mb-3 text-lg font-semibold">Rides</h2>
        <ul className="flex flex-col gap-2">
          {park.rides.map((ride) => {
            const userStatus =
              userId && "userStatuses" in ride ? ride.userStatuses?.[0] : undefined;
            return (
              <li
                key={ride.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-black/10 p-3 dark:border-white/10"
              >
                <div>
                  <div className="font-medium">
                    {ride.name}
                    {userStatus?.favorite && " ⭐"}
                  </div>
                  <div className="text-xs text-black/50 dark:text-white/50">
                    {RIDE_TYPE_LABELS[ride.type]}
                    {ride.manufacturer ? ` · ${ride.manufacturer}` : ""}
                    {ride.opened ? ` · opened ${ride.opened}` : ""}
                  </div>
                </div>
                {userId ? (
                  <div className="flex flex-wrap gap-2 text-xs">
                    <form action={setRideStatus.bind(null, ride.id, "RIDDEN")}>
                      <button
                        className={pillClass(userStatus?.status === "RIDDEN")}
                        type="submit"
                      >
                        ✅ Ridden
                      </button>
                    </form>
                    <form action={setRideStatus.bind(null, ride.id, "WANT_TO_RIDE")}>
                      <button
                        className={pillClass(userStatus?.status === "WANT_TO_RIDE")}
                        type="submit"
                      >
                        🎯 Want to ride
                      </button>
                    </form>
                    <form action={toggleFavoriteRide.bind(null, ride.id)}>
                      <button
                        className={pillClass(!!userStatus?.favorite)}
                        type="submit"
                      >
                        ⭐ Favorite
                      </button>
                    </form>
                    {userStatus && (
                      <form action={clearRideStatus.bind(null, ride.id)}>
                        <button
                          className="rounded-full px-3 py-1 text-black/40 hover:underline dark:text-white/40"
                          type="submit"
                        >
                          Clear
                        </button>
                      </form>
                    )}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Recent check-ins</h2>
        {recentCheckIns.length === 0 ? (
          <p className="text-sm text-black/60 dark:text-white/60">
            No check-ins yet — be the first!
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {recentCheckIns.map((c) => (
              <li
                key={c.id}
                className="rounded-lg border border-black/10 p-3 text-sm dark:border-white/10"
              >
                <span className="font-medium">
                  {c.userId === userId ? "You" : c.user.name ?? "Someone"}
                </span>
                {c.note ? <span> — “{c.note}”</span> : null}
                <div className="text-xs text-black/40 dark:text-white/40">
                  {c.checkedInAt.toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function pillClass(active: boolean) {
  return [
    "rounded-full px-3 py-1 border transition-colors",
    active
      ? "bg-foreground text-background border-foreground"
      : "border-black/10 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10",
  ].join(" ");
}
