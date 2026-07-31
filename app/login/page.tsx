import { redirect } from "next/navigation";
import { auth, signIn } from "@/auth";

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/profile");
  }

  return (
    <div className="mx-auto flex max-w-sm flex-col items-center gap-6 py-16 text-center">
      <h1 className="text-2xl font-bold">Sign in to RideTrack</h1>
      <p className="text-sm text-black/60 dark:text-white/60">
        Connect your Google account to track rides, check in at parks, and
        share your status with family and friends.
      </p>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/profile" });
        }}
        className="w-full"
      >
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-md border border-black/10 bg-white px-4 py-2 font-medium text-black shadow-sm hover:bg-black/5 dark:border-white/20"
        >
          <GoogleIcon />
          Continue with Google
        </button>
      </form>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.5-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l6-6C34.6 5.1 29.6 3 24 3c-7.6 0-14.1 4.3-17.7 10.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 45c5.5 0 10.4-2.1 14.1-5.5l-6.5-5.5c-2 1.5-4.6 2.5-7.6 2.5-5.3 0-9.7-3.4-11.3-8l-6.6 5.1C9.8 40.6 16.4 45 24 45z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.5 5.5C41.6 35.5 45 30.5 45 24c0-1.4-.1-2.5-.4-3.5z"
      />
    </svg>
  );
}
