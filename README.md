# RideTrack

A web app for tracking your personal ride status at amusement parks, checking in when you visit, and sharing your status with family and friends. Organized by park, starting with major USA amusement parks.

## Features

- **Browse parks** — search, filter, and sort 69 seeded USA amusement parks across 38 states (Disney, Universal, Six Flags, Cedar Fair legacy parks, SeaWorld/Busch Gardens, Herschend, and notable independents) with 587 rides.
- **Track ride status** — mark each ride as *ridden*, *want to ride*, or *favorite* per park.
- **Check in** — check in at a park with an optional note, and choose who can see it (public, friends, or just you).
- **Google sign-in** — login via your Google account (NextAuth).
- **Profile** — see your stats (rides ridden, parks visited, favorites), edit your username/bio, and view your check-in history. Your profile is shareable at `/u/<username>`.
- **Friends & family** — send/accept friend requests by username or email; friends can see your shared ride status, favorites, and check-ins.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS
- [Prisma](https://www.prisma.io) + SQLite for local dev (swap the datasource for Postgres/MySQL in production)
- [NextAuth.js v5](https://authjs.dev) with the Google provider + Prisma adapter (database sessions)
- Server Actions for all mutations (no separate REST API layer)

## Getting started

```bash
npm install
cp .env.example .env   # fill in AUTH_GOOGLE_ID / AUTH_GOOGLE_SECRET, see below
npm run db:migrate     # creates prisma/dev.db and applies the schema
npm run db:seed        # seeds parks + rides
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Google OAuth setup

1. Go to the [Google Cloud Console credentials page](https://console.cloud.google.com/apis/credentials) and create an OAuth 2.0 Client ID (Web application).
2. Add `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI (and your production URL's equivalent when deploying).
3. Copy the client ID/secret into `.env` as `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET`.
4. `AUTH_SECRET` is auto-generated in `.env.example` when copied — replace it with your own via `npx auth secret` for production.

### Database

Local dev uses SQLite (`prisma/dev.db`, gitignored). For production, switch `provider` in `prisma/schema.prisma` to `postgresql` (or your provider of choice), point `DATABASE_URL` at it, and re-run `npm run db:migrate`.

Useful scripts:

```bash
npm run db:migrate   # create/apply a migration
npm run db:seed      # (re-)seed parks and rides
npm run db:studio    # browse the database in Prisma Studio
```

## Adding more parks

Park and ride data lives in `prisma/seed-data.ts` as a plain TypeScript array — it currently covers the major US chains plus notable independents (69 parks / 587 rides across 38 states). It lists each park's notable rides rather than literally every attraction, so there's still room to extend it. To do so:

1. Add a new `SeedPark` entry (or more `SeedRide`s to an existing park) to `prisma/seed-data.ts`.
2. Run `npm run db:seed` — it upserts, and it also **prunes**: anything removed from `seed-data.ts` is deleted from the database, so the seed file is the single source of truth.

## Project structure

- `app/` — routes (parks list/detail, profile, friends, public shared profile, login)
- `lib/actions.ts` — Server Actions for all writes (ride status, check-ins, friend requests, profile updates)
- `lib/friends.ts` — friendship lookup helpers used for visibility checks
- `auth.ts` — NextAuth configuration (Google provider, Prisma adapter)
- `prisma/schema.prisma` — data model (users, parks, rides, ride status, check-ins, friendships)
- `prisma/seed-data.ts` / `prisma/seed.ts` — seed dataset and seeding script

## Notes / next steps

- Visibility on check-ins is per-check-in (`PUBLIC` / `FRIENDS` / `PRIVATE`); ride status (ridden/want-to-ride/favorite) is currently visible to accepted friends and the profile owner only.
- The seeded dataset is a curated starting set, not exhaustive — see "Adding more parks" above.
- For production, swap SQLite for a hosted Postgres database and set `AUTH_SECRET`/OAuth credentials as real secrets (not committed).
