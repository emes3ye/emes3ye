"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "Multi-$B", label: "Licensed asset value managed by systems I own end-to-end" },
  { value: "$Bn+", label: "International payment risk mitigated via pipelines I designed" },
  { value: "Multi-$M", label: "GL journal entries automated — flowing into public quarterly earnings" },
  { value: "Thousands", label: "Manual finance-ops hours eliminated through automation" },
  { value: "30×", label: "Query performance improvement on an inherited system (3 hrs → 6 min)" },
  { value: "2×", label: "Customer Obsession Award winner" },
  {
    value: "Top <10%",
    label: "Performance rating, 2025 — top engineering tier",
  },
  { value: "Heavy", label: "Individual delivery volume — sustained high-throughput in 2025" },
];

const projects = [
  {
    title: "Amortisation cap enforcement at content scale",
    what: "Owned the technical design and delivery of an enforcement system spanning a six-figure number of run-of-series content licences across multiple currencies. Coordinated Accounting, Acquisitions, Cost Allocation, and PM stakeholders across organisations with VP-level visibility.",
    outcome: "Multi-billion in licensed asset value now managed automatically; zero major incidents post-launch.",
    signal:
      "Ambiguous, org-wide problem → clear design doc → on-time delivery with full stakeholder alignment.",
  },
  {
    title: "International SVOD payment pipeline — first of its kind",
    what: "Designed and delivered a first-of-its-kind international SVOD payment pipeline. Worked directly with Prime Video Business, Finance, Legal, and Accounting teams across time zones.",
    outcome: "Thousands of manual processing hours eliminated; billions in payment risk now correctly managed.",
    signal:
      "Cross-org initiative with no playbook — drove it from blank page to production.",
  },
  {
    title: "Security gap caught beyond external audit",
    what: "While delivering an access control enhancement, identified a product-line-specific edit access vulnerability that an external red-team security audit had missed. Proactively flagged and fixed; acknowledged at the VP level.",
    outcome: "Security gap closed before it reached production; trust established with senior leadership.",
    signal:
      "Ownership beyond scope, security judgment, and proactive stakeholder communication.",
  },
  {
    title: "Reconciliation pipeline — 30× performance",
    what: "Inherited a long-broken reconciliation alarm. Diagnosed the root cause — hundreds of DB round-trips per run — refactored to batched queries, and migrated to a federated query engine for scale.",
    outcome: "Runtime reduced from 3 hours to 6 minutes — a 30× improvement.",
    signal:
      "No one asked — took it on, fixed the underlying architecture, not just the symptom.",
  },
];

const lps = [
  {
    principle: "Customer Obsession",
    evidence:
      "Two-time Customer Obsession Award winner from finance stakeholders; consistently shipped ahead of schedule for accounting partners.",
  },
  {
    principle: "Ownership",
    evidence:
      "Drove a billion-dollar amortisation programme solo through a team-lead absence; owned Sev-2 response for a partner-payment delay incident affecting dozens of contracts.",
  },
  {
    principle: "Invent & Simplify",
    evidence:
      "Built an automated notification pipeline for finance template changes on my own initiative — no one asked.",
  },
  {
    principle: "Are Right, A Lot",
    evidence:
      "Pushed back on a proposed downstream integration after identifying that most required fields were missing or wrong; wrote a full technical assessment that prevented a misaligned build.",
  },
  {
    principle: "Dive Deep",
    evidence:
      "Diagnosed a Hibernate flush-order race condition only reproducible outside debug mode; resolved an n+1 join production outage; designed a federated-query migration path from a constrained warehouse.",
  },
  {
    principle: "Deliver Results",
    evidence:
      "Top-tier annual performance rating; high individual delivery volume sustained across the year; all major projects shipped on time.",
  },
  {
    principle: "Raise the Bar",
    evidence:
      "Certified interviewer (multiple loops); selected as an internal AI Bar Raiser driving AI-native adoption across the team.",
  },
];

const timeline = [
  {
    year: "2018",
    desc: "ACM ICPC Dhaka Regional (8th), BUET IUPC (9th), NCPC (7th) — competitive programming foundation.",
  },
  {
    year: "2018–2019",
    desc: "Samsung R&D Bangladesh — iOS engineering, VeoSens B2B healthcare platform.",
  },
  {
    year: "2019–2020",
    desc: "CodeMarshal — ML/CV: NID detector, 100% accuracy, no paid APIs.",
  },
  {
    year: "2020–2021",
    desc: "Tiger IT — Signal Protocol end-to-end encryption for desktop messaging.",
  },
  {
    year: "2021–Present",
    desc: "Amazon London — SDE II, Prime Video. Financial systems at global scale (5+ years).",
  },
  {
    year: "2025–Present",
    desc: "Building imfluence.co.uk — influencer platform for Muslim brands.",
  },
];

// ─── Shared animation wrapper ─────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WorkContent() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      {/* ── 1. Hero ──────────────────────────────────────────────────────────── */}
      <FadeIn>
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-heading font-semibold tracking-wide text-accent uppercase">
              Open to L6 opportunities
            </span>
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Software Development<br className="hidden sm:block" /> Engineer II @ Amazon
            <br className="hidden sm:block" />
            <span className="text-accent">5+ years.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-8">
            I build and own financially critical systems at Amazon scale — billions in
            licensed asset value automated, billions in payment risk mitigated, and
            pipelines whose journal entries flow into public quarterly earnings. Zero
            major incidents. I drive multi-org initiatives from blank page to production,
            catch security gaps that external audits missed, and deliver 30× performance
            improvements on inherited broken systems.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-heading font-semibold text-sm hover:bg-accent/90 transition-colors duration-200"
            >
              Let&apos;s talk
            </Link>
            <a
              href="https://linkedin.com/in/emes3ye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/15 text-foreground font-heading font-semibold text-sm hover:border-foreground/30 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </FadeIn>

      {/* ── 2. By the Numbers ─────────────────────────────────────────────────── */}
      <FadeIn delay={100}>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
          By the Numbers
        </h2>
        <p className="text-muted text-sm mb-8">Impact at a glance — scope generalised; exact figures available under NDA.</p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {stats.map((stat, i) => (
          <FadeIn key={stat.value + i} delay={i * 60}>
            <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.02] p-6 h-full">
              <p className="font-heading font-bold text-2xl md:text-3xl text-accent mb-2 leading-none">
                {stat.value}
              </p>
              <p className="text-xs text-muted leading-relaxed">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* ── 3. Flagship Projects ──────────────────────────────────────────────── */}
      <FadeIn>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
          Flagship Projects
        </h2>
        <p className="text-muted text-sm mb-10">
          Four examples of the scope, depth, and judgment I operate at.
        </p>
      </FadeIn>

      <div className="space-y-6 mb-20">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 80}>
            <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.02] p-8">
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{project.what}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 rounded-xl bg-accent/5 border border-accent/15 px-4 py-3">
                  <p className="text-xs font-heading font-semibold tracking-widest text-accent uppercase mb-1">
                    Outcome
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{project.outcome}</p>
                </div>
                <div className="flex-1 rounded-xl bg-foreground/[0.03] border border-foreground/8 px-4 py-3">
                  <p className="text-xs font-heading font-semibold tracking-widest text-muted uppercase mb-1">
                    L6 Signal
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{project.signal}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* ── 4. Leadership Principles ──────────────────────────────────────────── */}
      <FadeIn>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
          Amazon Leadership Principles — Evidence
        </h2>
        <p className="text-muted text-sm mb-8">
          Every claim is anchored to a named artefact or outcome.
        </p>
      </FadeIn>

      <FadeIn delay={80}>
        <div className="rounded-2xl border border-foreground/8 overflow-hidden mb-20">
          {lps.map((lp, i) => (
            <div
              key={lp.principle}
              className={`px-6 py-5 flex flex-col sm:flex-row gap-2 sm:gap-6 ${
                i % 2 === 0 ? "bg-foreground/[0.015]" : "bg-transparent"
              } ${i !== lps.length - 1 ? "border-b border-foreground/6" : ""}`}
            >
              <p className="font-heading font-semibold text-sm text-foreground shrink-0 w-full sm:w-52">
                {lp.principle}
              </p>
              <p className="text-sm text-muted leading-relaxed">{lp.evidence}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ── 5. Career Timeline ────────────────────────────────────────────────── */}
      <FadeIn>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10">
          Career Timeline
        </h2>
      </FadeIn>

      <ul className="mb-20">
        {timeline.map((item, i) => (
          <FadeIn key={item.year} delay={i * 80}>
            <li className="relative pl-8 border-l-2 border-foreground/10">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent" />
              <div className="pb-8">
                <p className="font-heading font-bold text-sm text-accent mb-1">{item.year}</p>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>

      {/* ── 6. What I'm Looking For ───────────────────────────────────────────── */}
      <FadeIn>
        <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.02] p-8 mb-10">
          <h2 className="font-heading font-bold text-xl text-foreground mb-4">
            What I&apos;m Looking For
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            L6 / Senior SDE role at Amazon — or equivalent Staff Engineer at a top-tier
            company. I&apos;m drawn to systems with real financial or operational
            consequence: where correctness matters and the blast radius of a bug is
            measured in dollars, not pixels. Open to London or remote-friendly roles.
          </p>
        </div>
      </FadeIn>

      {/* ── 7. What I'm Building ─────────────────────────────────────────────── */}
      <FadeIn>
        <div className="rounded-2xl border border-foreground/8 bg-foreground/[0.02] p-8 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h2 className="font-heading font-bold text-xl text-foreground">
              What I&apos;m Building
            </h2>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm text-accent font-heading font-semibold hover:gap-2.5 transition-all duration-200"
            >
              View all products <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="text-sm text-muted leading-relaxed mb-6">
            I don&apos;t stop at my day job. Outside Amazon I ship real products —
            because the best engineers build things, not just maintain them.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                name: "LeetView",
                desc: "Chrome extension — tracks LeetCode submissions locally, no server, no tracking. Live on the Chrome Web Store.",
                status: "Live",
              },
              {
                name: "imfluence.co.uk",
                desc: "Influencer marketing platform for Muslim-friendly brands. Connecting halal brands with aligned creators.",
                status: "Building",
              },
              {
                name: "Carrot Soft",
                desc: "Software & digital marketing studio. Helping businesses grow through product and performance.",
                status: "Active",
              },
              {
                name: "emes3ye.com",
                desc: "This site — built with Next.js 14, TypeScript, MDX. Designed, written, and shipped by me.",
                status: "Live",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="rounded-xl border border-foreground/8 px-5 py-4"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <p className="font-heading font-semibold text-sm text-foreground">
                    {product.name}
                  </p>
                  <span className="text-[11px] font-heading font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                    {product.status}
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* ── 8. CTA ───────────────────────────────────────────────────────────── */}
      <FadeIn delay={80}>
        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <div>
            <h2 className="font-heading font-bold text-xl text-foreground mb-1">
              Ready to talk?
            </h2>
            <p className="text-sm text-muted">
              30 minutes is enough to know if there&apos;s a fit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-heading font-semibold hover:bg-accent/90 transition-colors duration-200"
            >
              Let&apos;s talk
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/15 text-foreground text-sm font-heading font-semibold hover:border-foreground/30 transition-colors duration-200"
            >
              <DownloadIcon />
              Download CV
            </a>
            <a
              href="https://linkedin.com/in/emes3ye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/15 text-foreground text-sm font-heading font-semibold hover:border-foreground/30 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
