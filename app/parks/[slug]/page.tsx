import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getFriendIds } from "@/lib/friends";
import { RideThumbnail } from "@/components/ride-thumbnail";
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

// Ride types grouped for the filter control. "Roller coasters" and
// "Kiddie rides" get their own entries; everything else is browsable
// individually or lumped under "Other rides".
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

const STATUS_FILTERS = [
  { value: "all", label: "All rides" },
  { value: "RIDDEN", label: "✅ Ridden" },
  { value: "WANT_TO_RIDE", label: "🎯 Want to ride" },
  { value: "FAVORITE", label: "⭐ Favorites" },
  { value: "UNTRACKED", label: "Not tracked yet" },
];

export default async function ParkDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ type?: string; status?: string }>;
}) {
  const { slug } = await params;
  const { type: typeParam, status: statusParam } = await searchParams;
  const session = await auth();
  const userId = session?.user?.id;

  const typeFilter =
    TYPE_FILTERS.find((t) => t.value === typeParam)?.value ?? "all";
  // Status filtering is per-account, so it only applies when signed in.
  const statusFilter = userId
    ? STATUS_FILTERS.find((s) => s.value === statusParam)?.value ?? "all"
    : "all";

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

  // Apply the ride-type and per-account status filters.
  const activeTypes =
    TYPE_FILTERS.find((t) => t.value === typeFilter)?.types ?? [];
  const visibleRides = park.rides.filter((ride) => {
    if (activeTypes.length && !activeTypes.includes(ride.type)) return false;
    if (statusFilter === "all") return true;
    const st = "userStatuses" in ride ? ride.userStatuses?.[0] : undefined;
    if (statusFilter === "FAVORITE") return !!st?.favorite;
    if (statusFilter === "UNTRACKED") return !st || (!st.status && !st.favorite);
    return st?.status === statusFilter;
  });

  // Counts for the type filter, so the user can see what's available.
  const typeCounts = park.rides.reduce<Record<string, number>>((acc, r) => {
    acc[r.type] = (acc[r.type] ?? 0) + 1;
    return acc;
  }, {});

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

      {(park.description || park.foundedYear) && (
        <section className="rounded-lg border border-black/10 bg-black/[0.02] p-4 dark:border-white/10 dark:bg-white/[0.03]">
          <h2 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-black/50 dark:text-white/50">
            About &amp; history
          </h2>
          {park.foundedYear && (
            <p className="mb-1.5 text-sm font-medium">
              Opened in {park.foundedYear}
              {" · "}
              {new Date().getFullYear() - park.foundedYear} years of operation
            </p>
          )}
          {park.description && (
            <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
              {park.description}
            </p>
          )}
        </section>
      )}

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
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-lg font-semibold">Rides</h2>
          <span className="text-xs text-black/50 dark:text-white/50">
            Showing {visibleRides.length} of {park.rides.length}
          </span>
        </div>

        <form method="get" className="mb-4 flex flex-wrap gap-2">
          <select
            name="type"
            defaultValue={typeFilter}
            className="rounded-md border border-black/10 px-3 py-2 text-sm dark:border-white/20 dark:bg-black"
          >
            {TYPE_FILTERS.map((t) => {
              const n = t.value === "all"
                ? park.rides.length
                : t.types.reduce((s, ty) => s + (typeCounts[ty] ?? 0), 0);
              return (
                <option key={t.value} value={t.value} disabled={n === 0}>
                  {t.label} ({n})
                </option>
              );
            })}
          </select>

          {userId && (
            <select
              name="status"
              defaultValue={statusFilter}
              className="rounded-md border border-black/10 px-3 py-2 text-sm dark:border-white/20 dark:bg-black"
            >
              {STATUS_FILTERS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          )}

          <button
            type="submit"
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
          >
            Apply
          </button>
          {(typeFilter !== "all" || statusFilter !== "all") && (
            <Link
              href={`/parks/${park.slug}`}
              className="rounded-md border border-black/10 px-4 py-2 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
            >
              Reset
            </Link>
          )}
        </form>

        {visibleRides.length === 0 && (
          <p className="mb-3 text-sm text-black/60 dark:text-white/60">
            No rides match these filters.
          </p>
        )}

        <ul className="flex flex-col gap-2">
          {visibleRides.map((ride) => {
            const userStatus =
              userId && "userStatuses" in ride ? ride.userStatuses?.[0] : undefined;
            return (
              <li
                key={ride.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-black/10 p-3 dark:border-white/10"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <RideThumbnail
                    type={ride.type}
                    seed={ride.slug}
                    className="h-14 w-20 flex-shrink-0 rounded-md"
                  />
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
