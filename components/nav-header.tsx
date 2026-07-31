import Link from "next/link";
import { auth, signOut } from "@/auth";

export async function NavHeader() {
  const session = await auth();

  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight">
          🎢 RideTrack
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/parks" className="hover:underline">
            Parks
          </Link>
          {session?.user ? (
            <>
              <Link href="/friends" className="hover:underline">
                Friends
              </Link>
              <Link href="/profile" className="hover:underline">
                Profile
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button className="rounded-md border border-black/10 px-3 py-1 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">
                  Sign out
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-md bg-foreground px-3 py-1 text-background hover:opacity-90"
            >
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
