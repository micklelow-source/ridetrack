import Link from "next/link";
import { RideThumbnail } from "@/components/ride-thumbnail";

type RideType =
  | "ROLLER_COASTER"
  | "DARK_RIDE"
  | "WATER_RIDE"
  | "FLAT_RIDE"
  | "KIDDIE"
  | "TRANSPORT"
  | "SHOW"
  | "OTHER";

export function RideList({
  items,
}: {
  items: {
    ride: { id: string; slug: string; name: string; type: RideType };
    park: { slug: string; name: string };
  }[];
}) {
  return (
    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {items.map(({ ride, park }) => (
        <li
          key={ride.id}
          className="flex items-center gap-3 rounded-lg border border-black/10 p-3 text-sm dark:border-white/10"
        >
          <RideThumbnail
            type={ride.type}
            seed={ride.slug}
            className="h-12 w-16 flex-shrink-0 rounded-md"
          />
          <div className="min-w-0">
            <div className="font-medium">{ride.name}</div>
            <Link
              href={`/parks/${park.slug}`}
              className="text-xs text-black/50 underline dark:text-white/50"
            >
              {park.name}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
