import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getFriendIds } from "@/lib/friends";

export default async function HomePage() {
  const session = await auth();

  if (!session?.user?.id) {
    return <LoggedOutHome />;
  }

  const userId = session.user.id;
  const friendIds = await getFriendIds(userId);

  const [rideCount, parkVisitCount, recentActivity] = await Promise.all([
    prisma.userRideStatus.count({ where: { userId, status: "RIDDEN" } }),
    prisma.checkIn.groupBy({ by: ["parkId"], where: { userId } }).then((r) => r.length),
    prisma.checkIn.findMany({
      where: {
        OR: [
          { userId, visibility: { in: ["PUBLIC", "FRIENDS", "PRIVATE"] } },
          { userId: { in: friendIds }, visibility: { in: ["PUBLIC", "FRIENDS"] } },
        ],
      },
      orderBy: { checkedInAt: "desc" },
      take: 10,
      include: { park: true, user: true },
    }),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <StatCard label="Rides ridden" value={rideCount} />
        <StatCard label="Parks visited" value={parkVisitCount} />
        <Link
          href="/parks"
          className="flex flex-col justify-center rounded-lg border border-black/10 p-4 text-sm font-medium hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
        >
          Browse parks →
        </Link>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Recent activity</h2>
        {recentActivity.length === 0 ? (
          <p className="text-sm text-black/60 dark:text-white/60">
            No check-ins yet. Head to a{" "}
            <Link href="/parks" className="underline">
              park page
            </Link>{" "}
            to check in and start tracking rides.
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {recentActivity.map((c) => (
              <li
                key={c.id}
                className="rounded-lg border border-black/10 p-3 text-sm dark:border-white/10"
              >
                <span className="font-medium">
                  {c.userId === userId ? "You" : c.user.name ?? "A friend"}
                </span>{" "}
                checked in at{" "}
                <Link href={`/parks/${c.park.slug}`} className="underline">
                  {c.park.name}
                </Link>
                {c.note ? <span className="text-black/60 dark:text-white/60"> — “{c.note}”</span> : null}
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

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-black/60 dark:text-white/60">{label}</div>
    </div>
  );
}

function LoggedOutHome() {
  return (
    <div className="flex flex-col items-center gap-6 py-16 text-center">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Track every ride, at every park.
      </h1>
      <p className="max-w-xl text-black/60 dark:text-white/60">
        RideTrack helps you keep a personal log of the rides you&apos;ve
        ridden and want to ride, organized by park — starting with major USA
        amusement parks. Check in when you arrive and share your status with
        family and friends.
      </p>
      <div className="flex gap-3">
        <Link
          href="/login"
          className="rounded-md bg-foreground px-5 py-2 font-medium text-background hover:opacity-90"
        >
          Get started
        </Link>
        <Link
          href="/parks"
          className="rounded-md border border-black/10 px-5 py-2 font-medium hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
        >
          Browse parks
        </Link>
      </div>
    </div>
  );
}
