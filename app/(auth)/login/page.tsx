"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useLogin } from "@/features/auth/hooks/use-login";

export default function LoginPage() {
  const { handleLogin, error, isLoading } = useLogin();

  return (
    <div className="mx-auto max-w-sm py-20 px-4">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-sm text-neutral-500">
          Enter your details to sign in to your account.
        </p>
      </div>

      <form action={handleLogin} className="mt-8 space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider">Email</label>
          <input 
            name="email" 
            type="email" 
            required 
            placeholder="name@example.com"
            className="w-full rounded-[var(--radius)] border border-neutral-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black" 
          />
        </div>
        
        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider">Password</label>
          <input 
            name="password" 
            type="password" 
            required 
            placeholder="••••••••"
            className="w-full rounded-[var(--radius)] border border-neutral-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black" 
          />
        </div>

        {error && (
          <p className="text-xs font-medium text-red-500 bg-red-50 p-3 rounded-md">
            {error}
          </p>
        )}

        <Button type="submit" className="w-full" isLoading={isLoading}>
          Sign In
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-neutral-500">
        Don't have an account?{" "}
        <Link href="/register" className="text-black underline underline-offset-4 font-medium hover:text-neutral-700">
          Sign up
        </Link>
      </p>
    </div>
  );
}