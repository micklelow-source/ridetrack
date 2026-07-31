import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const CHAIN_LABELS: Record<string, string> = {
  DISNEY: "Disney",
  UNIVERSAL: "Universal",
  SIX_FLAGS: "Six Flags",
  CEDAR_FAIR: "Cedar Fair",
  SEAWORLD: "SeaWorld / Busch Gardens",
  HERSCHEND: "Herschend",
  INDEPENDENT: "Independent",
  OTHER: "Other",
};

export default async function ParksPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; state?: string; chain?: string }>;
}) {
  const { q, state, chain } = await searchParams;
  const session = await auth();

  const parks = await prisma.park.findMany({
    where: {
      AND: [
        q
          ? {
              OR: [
                { name: { contains: q } },
                { city: { contains: q } },
              ],
            }
          : {},
        state ? { state } : {},
        chain ? { chain: chain as never } : {},
      ],
    },
    orderBy: [{ state: "asc" }, { name: "asc" }],
    include: {
      _count: { select: { rides: true } },
      rides: {
        select: {
          userStatuses: {
            where: { userId: session?.user?.id ?? "__none__", status: "RIDDEN" },
            select: { id: true },
          },
        },
      },
    },
  });

  const states = await prisma.park.findMany({
    distinct: ["state"],
    select: { state: true },
    orderBy: { state: "asc" },
  });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">Parks</h1>
        <p className="text-sm text-black/60 dark:text-white/60">
          {parks.length} USA amusement parks — search, filter, and track your
          rides.
        </p>
      </div>

      <form className="flex flex-wrap gap-3" method="get">
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Search by park or city..."
          className="min-w-48 flex-1 rounded-md border border-black/10 px-3 py-2 text-sm dark:border-white/20 dark:bg-black"
        />
        <select
          name="state"
          defaultValue={state ?? ""}
          className="rounded-md border border-black/10 px-3 py-2 text-sm dark:border-white/20 dark:bg-black"
        >
          <option value="">All states</option>
          {states.map((s) => (
            <option key={s.state} value={s.state}>
              {s.state}
            </option>
          ))}
        </select>
        <select
          name="chain"
          defaultValue={chain ?? ""}
          className="rounded-md border border-black/10 px-3 py-2 text-sm dark:border-white/20 dark:bg-black"
        >
          <option value="">All chains</option>
          {Object.entries(CHAIN_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          Filter
        </button>
      </form>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {parks.map((park) => {
          const riddenCount = session?.user?.id
            ? park.rides.filter((r) => r.userStatuses.length > 0).length
            : 0;
          return (
            <li key={park.id}>
              <Link
                href={`/parks/${park.slug}`}
                className="flex flex-col gap-1 rounded-lg border border-black/10 p-4 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{park.name}</span>
                  <span className="text-xs text-black/50 dark:text-white/50">
                    {CHAIN_LABELS[park.chain]}
                  </span>
                </div>
                <span className="text-sm text-black/60 dark:text-white/60">
                  {park.city}, {park.state}
                </span>
                <span className="text-xs text-black/40 dark:text-white/40">
                  {park._count.rides} rides tracked
                  {session?.user?.id ? ` · ${riddenCount} ridden` : ""}
                  {park.foundedYear ? ` · est. ${park.foundedYear}` : ""}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {parks.length === 0 && (
        <p className="text-sm text-black/60 dark:text-white/60">
          No parks match your filters.
        </p>
      )}
    </div>
  );
}
