"use client";

import { createClient } from "@/utils/supabase/client";

export default function Twitter(props: { nextUrl?: string }) {
  const supabase = createClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "twitter",
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
      },
    });
  };

  return <button onClick={handleLogin}>Login</button>;
}
