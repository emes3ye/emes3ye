import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LeetView — Chrome Extension",
  description:
    "LeetView tracks your solved LeetCode problems locally in your browser. No account required, no data sent anywhere.",
  openGraph: {
    title: "LeetView — Chrome Extension by Shafiul Islam",
    description:
      "Track your LeetCode grind privately. LeetView logs every accepted submission locally — no server, no tracking, no account.",
  },
};

const features = [
  {
    title: "Fully private",
    description:
      "All data stays in your browser. Nothing is sent to any server — ever.",
  },
  {
    title: "Automatic logging",
    description:
      "Detects accepted submissions automatically. No manual input needed.",
  },
  {
    title: "Solve history",
    description:
      "See every problem you've solved with the language used and the date.",
  },
  {
    title: "Export your data",
    description:
      "Download a copy of your solve history anytime from the Options page.",
  },
  {
    title: "Works offline",
    description:
      "No internet connection required beyond what LeetCode itself needs.",
  },
  {
    title: "Zero dependencies",
    description:
      "No analytics SDKs, no tracking libraries, no third-party services.",
  },
];

export default function LeetViewPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Breadcrumb */}
      <p className="text-sm text-muted mb-12">
        <Link href="/products" className="hover:text-foreground transition-colors">
          Products
        </Link>
        {" / "}
        <span className="text-foreground">LeetView</span>
      </p>

      {/* Hero */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Live
          </span>
          <span className="text-xs text-muted font-heading font-medium border border-black/10 dark:border-white/10 px-2.5 py-1 rounded-full">
            Chrome Extension
          </span>
        </div>
        <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-foreground mb-5">
          LeetView
        </h1>
        <p className="text-xl text-muted leading-relaxed max-w-2xl mb-8">
          Track your LeetCode grind — privately. LeetView logs every accepted
          submission directly in your browser. No account, no server, no
          tracking. Just a clean history of the problems you&apos;ve solved.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://chromewebstore.google.com/detail/leetview/cnlfjcfnaocfepfkpogbpehkaebheefg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white font-heading font-semibold text-sm px-6 py-3 rounded-xl hover:bg-accent/90 transition-colors duration-200"
          >
            Add to Chrome
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/emes3ye/leetview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-black/10 dark:border-white/10 text-foreground font-heading font-semibold text-sm px-6 py-3 rounded-xl hover:border-accent/30 transition-colors duration-200"
          >
            View source
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-8">
          What it does
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-black/8 dark:border-white/8 rounded-xl p-6"
            >
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Data collected */}
      <div className="mb-16 border border-black/8 dark:border-white/8 rounded-2xl p-8">
        <h2 className="font-heading font-bold text-xl text-foreground mb-4">
          Data it stores
        </h2>
        <p className="text-muted text-sm leading-relaxed mb-4">
          When an accepted submission is detected on{" "}
          <code className="bg-muted/10 px-1 py-0.5 rounded text-xs">
            leetcode.com
          </code>
          , LeetView saves these fields locally in your browser:
        </p>
        <ul className="space-y-2 text-sm text-muted">
          {[
            "Problem title and slug",
            "Problem difficulty (Easy / Medium / Hard)",
            "Programming language used",
            "Timestamp of the solve",
            "LeetCode question ID (for deduplication)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-accent mt-0.5" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted">
          That&apos;s it. No personal data, no browsing history, nothing else.{" "}
          <Link
            href="/products/leetview/privacy-policy"
            className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Read the full privacy policy →
          </Link>
        </p>
      </div>

      {/* Footer links */}
      <div className="flex flex-wrap gap-6 text-sm text-muted">
        <a
          href="https://github.com/emes3ye/leetview"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          GitHub ↗
        </a>
        <Link
          href="/products/leetview/privacy-policy"
          className="hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/products"
          className="hover:text-foreground transition-colors"
        >
          ← All products
        </Link>
      </div>
    </div>
  );
}
