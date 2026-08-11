import { existsSync } from "fs";
import { PrismaClient } from "@prisma/client";
import { parks } from "./seed-data";

// Load .env ourselves. `npm install` runs `prisma generate` via postinstall,
// which happens BEFORE you copy .env.example to .env — a client generated at
// that point does not pick the file up later, so seeding died with
// "Environment variable not found: DATABASE_URL" despite .env sitting right
// there. Variables already in the environment win, which is what the deploy
// docs rely on when they pass the direct URL inline.
if (existsSync(".env")) {
  try {
    process.loadEnvFile(".env");
  } catch {
    // malformed or unreadable .env — fall back to the real environment
  }
}

const prisma = new PrismaClient();

async function main() {
  for (const park of parks) {
    const created = await prisma.park.upsert({
      where: { slug: park.slug },
      update: {
        name: park.name,
        chain: park.chain,
        city: park.city,
        state: park.state,
        website: park.website,
        foundedYear: park.foundedYear,
        description: park.description,
      },
      create: {
        slug: park.slug,
        name: park.name,
        chain: park.chain,
        city: park.city,
        state: park.state,
        website: park.website,
        foundedYear: park.foundedYear,
        description: park.description,
      },
    });

    for (const ride of park.rides) {
      await prisma.ride.upsert({
        where: { parkId_slug: { parkId: created.id, slug: ride.slug } },
        update: {
          name: ride.name,
          type: ride.type,
          manufacturer: ride.manufacturer,
          opened: ride.opened,
        },
        create: {
          parkId: created.id,
          slug: ride.slug,
          name: ride.name,
          type: ride.type,
          manufacturer: ride.manufacturer,
          opened: ride.opened,
        },
      });
    }

    // Prune rides that have been removed from seed-data (e.g. a coaster
    // that has since been demolished). Without this the upsert above would
    // leave defunct rides in the database forever.
    const removed = await prisma.ride.deleteMany({
      where: {
        parkId: created.id,
        slug: { notIn: park.rides.map((r) => r.slug) },
      },
    });
    if (removed.count > 0) {
      console.log(`  ${park.name}: pruned ${removed.count} removed ride(s)`);
    }
  }

  // Prune parks no longer present in seed-data.
  const removedParks = await prisma.park.deleteMany({
    where: { slug: { notIn: parks.map((p) => p.slug) } },
  });
  if (removedParks.count > 0) {
    console.log(`Pruned ${removedParks.count} removed park(s)`);
  }

  const parkCount = await prisma.park.count();
  const rideCount = await prisma.ride.count();
  console.log(`Seeded ${parkCount} parks and ${rideCount} rides.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
