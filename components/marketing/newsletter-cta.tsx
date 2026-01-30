"use client";

import * as React from "react";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

export function NewsletterCta() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();

    if (!value || !value.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // MOCK: simulate request
      await new Promise((r) => setTimeout(r, 600));
      console.log("newsletter_signup", { email: value });
      setStatus("success");
      setEmail("");

      // REAL API (siap nanti)
      // await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/marketing/newsletter`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email: value })
      // });
      // setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="border-t border-[rgb(var(--border))]">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-6 rounded-[var(--radius)] border border-[rgb(var(--border))] bg-white p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.2em] text-[rgb(var(--muted))]">
              NEWSLETTER
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
              New drops. Zero spam.
            </h3>
            <p className="mt-2 max-w-xl text-sm text-[rgb(var(--muted))]">
              Get early access to launches, restocks, and limited campaigns. Unsubscribe anytime.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email"
              />
              <Button
                type="submit"
                variant="primary"
                className="sm:w-40"
                isLoading={status === "loading"}
              >
                Subscribe
              </Button>
            </form>

            <div className="mt-3 text-xs">
              {status === "success" ? (
                <p className="text-black">Subscribed. Check your inbox.</p>
              ) : status === "error" ? (
                <p className="text-red-600">Enter a valid email.</p>
              ) : (
                <p className="text-[rgb(var(--muted))]">
                  By subscribing, you agree to receive emails from RPM.
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
