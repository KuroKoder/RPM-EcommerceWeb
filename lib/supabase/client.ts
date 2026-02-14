import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // Client-side tidak butuh penanganan cookie manual karena browser melakukannya secara default
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
  );
}