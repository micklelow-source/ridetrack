"use client";

import { useActionState } from "react";
import { sendFriendRequest } from "@/lib/actions";

type State = { error?: string; success?: boolean };

async function action(_prev: State, formData: FormData): Promise<State> {
  const value = String(formData.get("usernameOrEmail") ?? "");
  if (!value.trim()) return { error: "Enter a username or email." };
  return sendFriendRequest(value);
}

export function AddFriendForm() {
  const [state, formAction, pending] = useActionState<State, FormData>(action, {});

  return (
    <form action={formAction} className="flex flex-wrap items-end gap-3">
      <div className="flex-1 min-w-48">
        <label className="mb-1 block text-xs font-medium text-black/60 dark:text-white/60">
          Add a friend by username or email
        </label>
        <input
          type="text"
          name="usernameOrEmail"
          placeholder="e.g. mickey_l or friend@email.com"
          className="w-full rounded-md border border-black/10 px-3 py-2 text-sm dark:border-white/20 dark:bg-black"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "Sending..." : "Send request"}
      </button>
      {state.error && <p className="w-full text-sm text-red-600">{state.error}</p>}
      {state.success && (
        <p className="w-full text-sm text-green-600">Friend request sent!</p>
      )}
    </form>
  );
}
