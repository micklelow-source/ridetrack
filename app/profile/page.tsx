import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { updateProfile } from "@/lib/actions";
import { RideList } from "@/components/ride-list";

const TYPE_FILTERS: { value: string; label: string; types: string[] }[] = [
  { value: "all", label: "All ride types", types: [] },
  { value: "ROLLER_COASTER", label: "Roller coasters", types: ["ROLLER_COASTER"] },
  { value: "KIDDIE", label: "Kiddie rides", types: ["KIDDIE"] },
  { value: "DARK_RIDE", label: "Dark rides", types: ["DARK_RIDE"] },
  { value: "WATER_RIDE", label: "Water rides", types: ["WATER_RIDE"] },
  { value: "FLAT_RIDE", label: "Flat rides", types: ["FLAT_RIDE"] },
  { value: "TRANSPORT", label: "Transport", types: ["TRANSPORT"] },
  { value: "SHOW", label: "Shows", types: ["SHOW"] },
  {
    value: "other",
    label: "Other rides (non-coaster)",
    types: ["DARK_RIDE", "WATER_RIDE", "FLAT_RIDE", "TRANSPORT", "SHOW", "OTHER"],
  },
];

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  const userId = session.user.id;

  const { type: typeParam } = await searchParams;
  const typeFilter = TYPE_FILTERS.find((t) => t.value === typeParam)?.value ?? "all";
  const activeTypes = TYPE_FILTERS.find((t) => t.value === typeFilter)?.types ?? [];
  const rideTypeWhere = activeTypes.length
    ? { ride: { type: { in: activeTypes as never[] } } }
    : {};

  const user = await prisma.user.findUniqueOrThrow({ where: { id: userId } });

  const [ridden, wantToRide, favorites, checkIns, typeCountsRaw] = await Promise.all([
    prisma.userRideStatus.findMany({
      where: { userId, status: "RIDDEN", ...rideTypeWhere },
      include: { ride: { include: { park: true } } },
      orderBy: { riddenAt: "desc" },
    }),
    prisma.userRideStatus.findMany({
      where: { userId, status: "WANT_TO_RIDE", ...rideTypeWhere },
      include: { ride: { include: { park: true } } },
    }),
    prisma.userRideStatus.findMany({
      where: { userId, favorite: true, ...rideTypeWhere },
      include: { ride: { include: { park: true } } },
    }),
    prisma.checkIn.findMany({
      where: { userId },
      orderBy: { checkedInAt: "desc" },
      take: 15,
      include: { park: true },
    }),
    // every tracked ride for this account, used for the filter's counts
    prisma.userRideStatus.findMany({
      where: { userId },
      select: { ride: { select: { type: true } } },
    }),
  ]);

  const typeCounts = typeCountsRaw.reduce<Record<string, number>>((acc, r) => {
    acc[r.ride.type] = (acc[r.ride.type] ?? 0) + 1;
    return acc;
  }, {});

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

      <form method="get" className="flex flex-wrap items-center gap-2">
        <label className="text-sm text-black/60 dark:text-white/60">
          Filter my rides by type:
        </label>
        <select
          name="type"
          defaultValue={typeFilter}
          className="rounded-md border border-black/10 px-3 py-2 text-sm dark:border-white/20 dark:bg-black"
        >
          {TYPE_FILTERS.map((t) => {
            const n =
              t.value === "all"
                ? typeCountsRaw.length
                : t.types.reduce((s, ty) => s + (typeCounts[ty] ?? 0), 0);
            return (
              <option key={t.value} value={t.value} disabled={n === 0}>
                {t.label} ({n})
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          Apply
        </button>
        {typeFilter !== "all" && (
          <Link
            href="/profile"
            className="rounded-md border border-black/10 px-4 py-2 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            Reset
          </Link>
        )}
      </form>

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
        <h2 className="mb-3 text-lg font-semibold">
          Favorite rides{" "}
          <span className="text-sm font-normal text-black/40 dark:text-white/40">
            ({favorites.length})
          </span>
        </h2>
        {favorites.length === 0 ? (
          <EmptyHint />
        ) : (
          <RideList
            items={favorites.map((f) => ({ ride: f.ride, park: f.ride.park }))}
          />
        )}
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">
          Ridden{" "}
          <span className="text-sm font-normal text-black/40 dark:text-white/40">
            ({ridden.length})
          </span>
        </h2>
        {ridden.length === 0 ? (
          <EmptyHint />
        ) : (
          <RideList
            items={ridden.map((f) => ({ ride: f.ride, park: f.ride.park }))}
          />
        )}
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">
          Want to ride{" "}
          <span className="text-sm font-normal text-black/40 dark:text-white/40">
            ({wantToRide.length})
          </span>
        </h2>
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
