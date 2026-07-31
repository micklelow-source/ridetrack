import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { areFriends } from "@/lib/friends";

export default async function PublicProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const session = await auth();
  const viewerId = session?.user?.id;

  const profileUser = await prisma.user.findUnique({
    where: { username: username.toLowerCase() },
  });
  if (!profileUser) notFound();

  const isSelf = viewerId === profileUser.id;
  const isFriend = viewerId && !isSelf ? await areFriends(viewerId, profileUser.id) : false;
  const canSeeShared = isSelf || isFriend;

  if (!canSeeShared) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <h1 className="text-2xl font-bold">{profileUser.name}</h1>
        <p className="text-sm text-black/60 dark:text-white/60">
          This person shares their ride status with friends only.
        </p>
        {viewerId ? (
          <Link href="/friends" className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background">
            Send a friend request
          </Link>
        ) : (
          <Link href="/login" className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background">
            Sign in to connect
          </Link>
        )}
      </div>
    );
  }

  const [riddenCount, favorites, checkIns] = await Promise.all([
    prisma.userRideStatus.count({ where: { userId: profileUser.id, status: "RIDDEN" } }),
    prisma.userRideStatus.findMany({
      where: { userId: profileUser.id, favorite: true },
      include: { ride: { include: { park: true } } },
      take: 20,
    }),
    prisma.checkIn.findMany({
      where: {
        userId: profileUser.id,
        visibility: isSelf ? { in: ["PUBLIC", "FRIENDS", "PRIVATE"] } : { in: ["PUBLIC", "FRIENDS"] },
      },
      orderBy: { checkedInAt: "desc" },
      take: 15,
      include: { park: true },
    }),
  ]);

  const parksVisited = new Set(checkIns.map((c) => c.parkId)).size;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        {profileUser.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={profileUser.image} alt="" className="h-16 w-16 rounded-full" />
        )}
        <div>
          <h1 className="text-2xl font-bold">{profileUser.name}</h1>
          {profileUser.bio && (
            <p className="text-sm text-black/60 dark:text-white/60">{profileUser.bio}</p>
          )}
          {profileUser.homeState && (
            <p className="text-xs text-black/40 dark:text-white/40">
              📍 {profileUser.homeState}
            </p>
          )}
        </div>
      </div>

      <section className="grid grid-cols-3 gap-4">
        <StatCard label="Rides ridden" value={riddenCount} />
        <StatCard label="Parks visited" value={parksVisited} />
        <StatCard label="Favorites" value={favorites.length} />
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Favorite rides</h2>
        {favorites.length === 0 ? (
          <p className="text-sm text-black/60 dark:text-white/60">None yet.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {favorites.map((f) => (
              <li key={f.id} className="rounded-lg border border-black/10 p-3 text-sm dark:border-white/10">
                <div className="font-medium">{f.ride.name}</div>
                <Link href={`/parks/${f.ride.park.slug}`} className="text-xs text-black/50 underline dark:text-white/50">
                  {f.ride.park.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Recent check-ins</h2>
        {checkIns.length === 0 ? (
          <p className="text-sm text-black/60 dark:text-white/60">No check-ins yet.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {checkIns.map((c) => (
              <li key={c.id} className="rounded-lg border border-black/10 p-3 text-sm dark:border-white/10">
                <Link href={`/parks/${c.park.slug}`} className="font-medium underline">
                  {c.park.name}
                </Link>
                {c.note ? <div className="text-black/70 dark:text-white/70">“{c.note}”</div> : null}
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
    <div className="rounded-lg border border-black/10 p-4 text-center dark:border-white/10">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-black/60 dark:text-white/60">{label}</div>
    </div>
  );
}
