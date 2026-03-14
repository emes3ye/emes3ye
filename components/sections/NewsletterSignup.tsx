"use client";

import { useState, FormEvent } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setEmail("");
      } else {
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl bg-foreground/[0.03] border border-black/5 px-6 py-10 md:px-10 md:py-12">
      {success ? (
        <div className="text-center">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-accent"
            >
              <path
                d="M4 10l4 4 8-8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="font-heading font-bold text-foreground text-lg mb-1">
            You&apos;re on the list.
          </p>
          <p className="text-muted text-sm">
            Check your inbox for a welcome email.
          </p>
        </div>
      ) : (
        <>
          <p className="font-heading font-bold text-foreground text-xl md:text-2xl mb-1">
            Stay in the loop
          </p>
          <p className="text-muted text-sm mb-6">
            Occasional thoughts on halal finance, tech, and building things that matter. No spam.
          </p>
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-foreground text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                  aria-describedby={error ? "newsletter-error" : undefined}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-heading font-semibold text-sm tracking-wide hover:bg-accent/90 disabled:opacity-60 transition-all duration-200 shrink-0"
              >
                {loading ? "Subscribing…" : "Subscribe"}
              </button>
            </div>
            {error && (
              <p id="newsletter-error" className="text-secondary text-xs mt-2">
                {error}
              </p>
            )}
          </form>
        </>
      )}
    </div>
  );
}
