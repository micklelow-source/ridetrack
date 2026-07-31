import { PrismaClient } from "@prisma/client";
import { parks } from "./seed-data";

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
      },
      create: {
        slug: park.slug,
        name: park.name,
        chain: park.chain,
        city: park.city,
        state: park.state,
        website: park.website,
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
