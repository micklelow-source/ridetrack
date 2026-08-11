# RideTrack

A web app for tracking your personal ride status at amusement parks, checking in when you visit, and sharing your status with family and friends. Organized by park, covering **417 USA amusement parks and 2,660 rides** across 49 states.

## Live site

**https://micklelow-source.github.io/ridetrack/**

That link is a self-contained static build: browse every park, filter by ride type, and mark rides as ridden / want to ride / favorite. It keeps your tracking in the browser's `localStorage`, so it needs no account and nothing leaves your device.

Google sign-in, check-ins with visibility settings, friends, and shareable `/u/<username>` profiles all need a server, a database and OAuth credentials, so they only run in the full Next.js app — see [Getting started](#getting-started) to run it locally, or deploy it to a Node host such as Vercel.

The static site is rebuilt and redeployed by [`.github/workflows/pages.yml`](.github/workflows/pages.yml) whenever the park data changes on `main`. To build it yourself: `npm run build:site` (output in `site/dist/`).

## Features

- **Browse parks** — search, filter, and sort 417 USA amusement parks across 49 states (Disney, Universal, Six Flags, Cedar Fair legacy parks, SeaWorld/Busch Gardens, Herschend, and hundreds of independents) with 2,660 rides.
- **Track ride status** — mark each ride as *ridden*, *want to ride*, or *favorite* per park.
- **Check in** — check in at a park with an optional note, and choose who can see it (public, friends, or just you).
- **Google sign-in** — login via your Google account (NextAuth).
- **Profile** — see your stats (rides ridden, parks visited, favorites), edit your username/bio, and view your check-in history. Your profile is shareable at `/u/<username>`.
- **Friends & family** — send/accept friend requests by username or email; friends can see your shared ride status, favorites, and check-ins.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS
- [Prisma](https://www.prisma.io) + PostgreSQL
- [NextAuth.js v5](https://authjs.dev) with the Google provider + Prisma adapter (database sessions)
- Server Actions for all mutations (no separate REST API layer)

## Getting started

You need a PostgreSQL database. The quickest local one:

```bash
docker run --name ridetrack-db -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=ridetrack -p 5432:5432 -d postgres:16
```

Then:

```bash
npm install
cp .env.example .env   # set DATABASE_URL + DIRECT_URL, and the Google keys below
npm run db:migrate     # applies the schema
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

PostgreSQL, via Prisma. Two connection strings are required:

- `DATABASE_URL` — **pooled**. The app runs on serverless functions that open many short-lived connections, so it must go through a pooler.
- `DIRECT_URL` — **unpooled**. Migrations cannot run through a pooler.

With a plain local Postgres both can be the same URL. On Neon, the pooled host is the one with `-pooler` in the hostname.

Useful scripts:

```bash
npm run db:migrate   # create/apply a migration (development)
npm run db:deploy    # apply existing migrations (production/CI)
npm run db:seed      # (re-)seed parks and rides
npm run db:studio    # browse the database in Prisma Studio
```

## Deploying to Vercel

The [Hobby plan](https://vercel.com/pricing) is free for personal, non-commercial projects and is enough to run this. Vercel's filesystem is ephemeral, so the database has to be hosted — [Neon](https://neon.tech) has a free tier and pairs well with it.

1. **Create the database.** In Neon, create a project and copy both connection strings (pooled and direct).
2. **Import the repo** at [vercel.com/new](https://vercel.com/new). Vercel detects Next.js; no build settings need changing — `npm run build` already runs `prisma generate` first, which is required because Vercel caches `node_modules` between builds.
3. **Set five environment variables** in the Vercel project (Production *and* Preview):

   | Variable | Value |
   | --- | --- |
   | `DATABASE_URL` | Neon **pooled** URL — the host containing `-pooler` |
   | `DIRECT_URL` | Neon **direct** URL — the host without `-pooler` |
   | `AUTH_SECRET` | `openssl rand -base64 32`, or `npx auth secret` |
   | `AUTH_GOOGLE_ID` | Google OAuth client ID |
   | `AUTH_GOOGLE_SECRET` | Google OAuth client secret |

   The build itself does not need these — `prisma generate` runs fine without them, so a deploy will go green before they are set. The app only fails at *runtime*, so a successful build is not evidence the variables are right.

   You do not need `AUTH_URL` or `NEXTAUTH_URL`: Auth.js trusts the host automatically on Vercel.
4. **Apply the schema and seed**, pointing at the direct URL:
   ```bash
   DATABASE_URL="<direct-url>" DIRECT_URL="<direct-url>" npm run db:deploy
   DATABASE_URL="<direct-url>" DIRECT_URL="<direct-url>" npm run db:seed
   ```
5. **Add the redirect URI** `https://<your-project>.vercel.app/api/auth/callback/google` to your Google OAuth client, or sign-in fails with `redirect_uri_mismatch`. Add the `https://` production URL exactly — no trailing slash, and Google will not accept a wildcard. Preview deployments get a different hostname each time, so sign-in only works on preview URLs you add explicitly.

Deploys happen automatically on every push to `main`.

### Troubleshooting

| Symptom | Cause |
| --- | --- |
| `redirect_uri_mismatch` on sign-in | The exact callback URL is not in the Google client's authorized redirect URIs. |
| `The table "public.Park" does not exist` | `db:deploy` has not been run against this database. |
| Parks list renders empty | Schema applied but `db:seed` not run. |
| `Can't reach database server` | `DATABASE_URL` is missing `?sslmode=require`, or it is the direct URL where the pooled one belongs. |
| `prepared statement "s0" already exists` | `DATABASE_URL` points at the direct host instead of the pooled one. |
| Timeouts under load, but fine when idle | Same cause: serverless needs the `-pooler` host. |

## Adding more parks

Park and ride data lives in `prisma/seed-data.ts` as a plain TypeScript array — 417 parks / 2,660 rides across 49 states, built from the Roller Coaster Database, Wikipedia attraction lists, and individual park websites. Coverage is uneven by design: the major parks are close to complete, while many smaller parks list only their coasters, and 33 parks have no rides listed at all (each says why in its description). To extend it:

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
