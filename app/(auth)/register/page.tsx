"use client";

import { useState } from "react";
import { signup } from "@/lib/api/auth";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    setMessage(null);
    
    const result = await signup(formData);

    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      setMessage("Registration successful! Please check your email for the confirmation link.");
      setLoading(false);
    }
  }

  return (
    <Container className="flex min-h-[calc(100vh-64px)] items-center justify-center py-12">
      <div className="w-full max-w-[400px] space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-black">
            Create account
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            Join the RPM community for exclusive access and faster checkout.
          </p>
        </div>

        {message ? (
          <div className="rounded-[var(--radius)] border border-green-100 bg-green-50 p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-green-500 p-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
            </div>
            <p className="text-sm font-medium text-green-800">{message}</p>
            <Link href="/login" className="mt-6 block">
              <Button variant="primary" className="w-full">Sign In to Continue</Button>
            </Link>
          </div>
        ) : (
          <form action={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                  Full Name
                </label>
                <input 
                  name="full_name"
                  type="text" 
                  required 
                  placeholder="e.g. Alexander McQueen"
                  className="w-full rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white px-4 py-3 text-sm transition-all focus:border-black focus:outline-none focus:ring-1 focus:ring-black" 
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                  Email Address
                </label>
                <input 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="alex@example.com"
                  className="w-full rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white px-4 py-3 text-sm transition-all focus:border-black focus:outline-none focus:ring-1 focus:ring-black" 
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                  Password
                </label>
                <input 
                  name="password" 
                  type="password" 
                  required 
                  placeholder="••••••••"
                  className="w-full rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white px-4 py-3 text-sm transition-all focus:border-black focus:outline-none focus:ring-1 focus:ring-black" 
                />
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-3 text-center">
                <p className="text-xs font-medium text-red-600">{error}</p>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full py-6 text-base shadow-sm"
              isLoading={loading}
            >
              Create Account
            </Button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-[rgb(var(--border))]" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-neutral-400">Or</span>
              </div>
            </div>

            <p className="text-center text-sm text-neutral-500">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-black hover:underline underline-offset-4">
                Sign in
              </Link>
            </p>
          </form>
        )}

        {/* Footer Note */}
        <p className="text-center text-[10px] uppercase tracking-tighter text-neutral-400">
          By creating an account, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </Container>
  );
}