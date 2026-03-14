"use client";

import { useState, FormEvent } from "react";

const subjects = [
  "Business Inquiry",
  "Investment Opportunity",
  "Collaboration",
  "General",
  "Other",
];

const contactLinks = [
  {
    label: "Email",
    value: "hello@emes3ye.com",
    href: "mailto:hello@emes3ye.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/emes3ye",
    href: "https://linkedin.com/in/emes3ye",
  },
  {
    label: "X / Twitter",
    value: "@emes3ye",
    href: "https://x.com/emes3ye",
  },
  {
    label: "GitHub",
    value: "github.com/emes3ye",
    href: "https://github.com/emes3ye",
  },
];

export default function ContactContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", subject: subjects[0], message: "" });
      }
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-foreground text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200";

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-16">
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-4">
          Let&apos;s Connect
        </h1>
        <p className="text-muted text-xl max-w-2xl">
          Whether it&apos;s a business inquiry, investment opportunity, or just
          a conversation — I&apos;m always open to hearing from the right
          people.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20">
        {/* Form (60%) */}
        <div className="md:col-span-3">
          {success ? (
            <div className="rounded-2xl bg-accent/5 border border-accent/20 p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-heading font-bold text-xl text-foreground mb-2">
                Message sent!
              </h2>
              <p className="text-muted text-sm">
                Thank you for reaching out. I&apos;ll be in touch soon.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-6 text-accent font-heading font-semibold text-sm hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">
                  Name <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                {errors.name && (
                  <p className="text-secondary text-xs mt-1.5">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">
                  Email <span className="text-secondary">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                {errors.email && (
                  <p className="text-secondary text-xs mt-1.5">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">
                  Subject
                </label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputClass}
                >
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">
                  Message <span className="text-secondary">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell me what you have in mind..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <p className="text-secondary text-xs mt-1.5">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="self-start inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-white font-heading font-semibold text-sm tracking-wide hover:bg-accent/90 disabled:opacity-60 transition-all duration-200"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Contact info (40%) */}
        <div className="md:col-span-2">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-heading font-bold text-lg text-foreground mb-6">
                Other ways to connect
              </h2>
              <ul className="flex flex-col gap-5">
                {contactLinks.map((link) => (
                  <li key={link.label} className="flex flex-col gap-0.5">
                    <span className="text-xs font-heading font-semibold text-foreground/40 uppercase tracking-widest">
                      {link.label}
                    </span>
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="text-accent text-sm hover:underline underline-offset-2 transition-colors"
                    >
                      {link.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-foreground/[0.03] border border-black/5 p-6">
              <p className="text-sm text-muted leading-relaxed">
                Based in <strong className="text-foreground">London, UK</strong>.
                Open to global opportunities.
              </p>
            </div>

            <div>
              <p className="text-xs font-heading font-semibold text-foreground/40 uppercase tracking-widest mb-2">
                Book a Call
              </p>
              <p className="text-sm text-muted">
                Scheduling link coming soon — use the form for now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
