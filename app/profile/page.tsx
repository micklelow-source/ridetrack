import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { updateProfile } from "@/lib/actions";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  const userId = session.user.id;

  const user = await prisma.user.findUniqueOrThrow({ where: { id: userId } });

  const [ridden, wantToRide, favorites, checkIns] = await Promise.all([
    prisma.userRideStatus.findMany({
      where: { userId, status: "RIDDEN" },
      include: { ride: { include: { park: true } } },
      orderBy: { riddenAt: "desc" },
    }),
    prisma.userRideStatus.findMany({
      where: { userId, status: "WANT_TO_RIDE" },
      include: { ride: { include: { park: true } } },
    }),
    prisma.userRideStatus.findMany({
      where: { userId, favorite: true },
      include: { ride: { include: { park: true } } },
    }),
    prisma.checkIn.findMany({
      where: { userId },
      orderBy: { checkedInAt: "desc" },
      take: 15,
      include: { park: true },
    }),
  ]);

  const parksVisited = new Set(checkIns.map((c) => c.parkId)).size;

  async function saveProfile(formData: FormData) {
    "use server";
    await updateProfile({
      username: String(formData.get("username") ?? ""),
      bio: String(formData.get("bio") ?? ""),
      homeState: String(formData.get("homeState") ?? ""),
    });
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        {user.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={user.image} alt="" className="h-16 w-16 rounded-full" />
        )}
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-sm text-black/60 dark:text-white/60">{user.email}</p>
          {user.username && (
            <p className="text-xs text-black/40 dark:text-white/40">
              Shareable profile:{" "}
              <Link href={`/u/${user.username}`} className="underline">
                /u/{user.username}
              </Link>
            </p>
          )}
        </div>
      </div>

      <section className="grid grid-cols-3 gap-4">
        <StatCard label="Rides ridden" value={ridden.length} />
        <StatCard label="Parks visited" value={parksVisited} />
        <StatCard label="Favorites" value={favorites.length} />
      </section>

      <section className="rounded-lg border border-black/10 p-4 dark:border-white/10">
        <h2 className="mb-3 text-lg font-semibold">Edit profile</h2>
        <form action={saveProfile} className="flex flex-col gap-3 sm:max-w-md">
          <label className="text-sm">
            Username (for your shareable link)
            <input
              type="text"
              name="username"
              defaultValue={user.username ?? ""}
              placeholder="e.g. mickey_l"
              className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm dark:border-white/20 dark:bg-black"
            />
          </label>
          <label className="text-sm">
            Home state
            <input
              type="text"
              name="homeState"
              defaultValue={user.homeState ?? ""}
              placeholder="e.g. CA"
              maxLength={2}
              className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm uppercase dark:border-white/20 dark:bg-black"
            />
          </label>
          <label className="text-sm">
            Bio
            <textarea
              name="bio"
              defaultValue={user.bio ?? ""}
              rows={2}
              className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 text-sm dark:border-white/20 dark:bg-black"
            />
          </label>
          <button
            type="submit"
            className="self-start rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
          >
            Save
          </button>
        </form>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Favorite rides</h2>
        {favorites.length === 0 ? (
          <EmptyHint />
        ) : (
          <RideList
            items={favorites.map((f) => ({ ride: f.ride, park: f.ride.park }))}
          />
        )}
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Want to ride</h2>
        {wantToRide.length === 0 ? (
          <EmptyHint />
        ) : (
          <RideList
            items={wantToRide.map((f) => ({ ride: f.ride, park: f.ride.park }))}
          />
        )}
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Check-in history</h2>
        {checkIns.length === 0 ? (
          <p className="text-sm text-black/60 dark:text-white/60">
            No check-ins yet.
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {checkIns.map((c) => (
              <li
                key={c.id}
                className="rounded-lg border border-black/10 p-3 text-sm dark:border-white/10"
              >
                <Link href={`/parks/${c.park.slug}`} className="font-medium underline">
                  {c.park.name}
                </Link>{" "}
                <span className="text-xs text-black/40 dark:text-white/40">
                  ({c.visibility.toLowerCase()})
                </span>
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

function EmptyHint() {
  return (
    <p className="text-sm text-black/60 dark:text-white/60">
      Nothing here yet —{" "}
      <Link href="/parks" className="underline">
        browse parks
      </Link>{" "}
      to start tracking.
    </p>
  );
}

function RideList({
  items,
}: {
  items: { ride: { id: string; name: string }; park: { slug: string; name: string } }[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {items.map(({ ride, park }) => (
        <li
          key={ride.id}
          className="rounded-lg border border-black/10 p-3 text-sm dark:border-white/10"
        >
          <div className="font-medium">{ride.name}</div>
          <Link href={`/parks/${park.slug}`} className="text-xs text-black/50 underline dark:text-white/50">
            {park.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
