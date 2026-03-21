import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LeetView — Privacy Policy",
  description:
    "Privacy policy for LeetView, a Chrome extension that tracks your solved LeetCode problems locally in your browser.",
  openGraph: {
    title: "LeetView Privacy Policy — Shafiul Islam",
    description:
      "LeetView does not collect, transmit, or share any personal data. All data stays on your device.",
  },
  robots: { index: true, follow: false },
};

export default function LeetViewPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-12">
        <p className="text-sm text-muted mb-2">
          <Link href="/products" className="hover:text-foreground transition-colors">
            Products
          </Link>
          {" / "}
          <Link href="/products/leetview" className="hover:text-foreground transition-colors">
            LeetView
          </Link>
          {" / "}
          <span>Privacy Policy</span>
        </p>
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-3">
          Privacy Policy
        </h1>
        <p className="text-muted">
          LeetView Chrome Extension — Last updated: 21 March 2026
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10 text-foreground">

        <section>
          <h2 className="font-heading font-bold text-xl mb-3">Summary</h2>
          <p className="text-muted leading-relaxed">
            LeetView does not collect, transmit, or share any personal data.
            Everything the extension stores stays on your device.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl mb-3">Data Storage</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted leading-relaxed">
            <li>
              <strong className="text-foreground">chrome.storage.sync</strong> —
              profile solve history, persisted across sessions and optionally
              synced across your Chrome profile via Google&apos;s infrastructure
              if Chrome Sync is enabled.
            </li>
            <li>
              No data is ever sent to any server operated by the extension
              author.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl mb-3">Data Collected</h2>
          <p className="text-muted leading-relaxed mb-3">
            LeetView intercepts responses from{" "}
            <code className="text-sm bg-muted/10 px-1 py-0.5 rounded">leetcode.com</code>{" "}
            (GraphQL and submission result endpoints) on the{" "}
            <code className="text-sm bg-muted/10 px-1 py-0.5 rounded">leetcode.com</code>{" "}
            domain only. When an accepted submission is detected, the following
            fields are stored locally:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted leading-relaxed">
            <li>Problem title and slug</li>
            <li>Problem difficulty (Easy / Medium / Hard)</li>
            <li>Programming language used</li>
            <li>Timestamp of the solve</li>
            <li>LeetCode question ID (used for deduplication)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl mb-3">
            What We Do Not Do
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-muted leading-relaxed">
            <li>No external network requests beyond what LeetCode itself initiates</li>
            <li>No analytics or usage tracking</li>
            <li>No telemetry or crash reporting</li>
            <li>No third-party services or SDKs</li>
            <li>No advertising identifiers</li>
            <li>No sale or sharing of data with any party</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl mb-3">User Control</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted leading-relaxed">
            <li>
              Use the <strong className="text-foreground">Clear All Data</strong>{" "}
              button in the popup to delete all history
            </li>
            <li>
              Use the <strong className="text-foreground">Export Data</strong>{" "}
              feature in the Options page to download a copy of your data
            </li>
            <li>Uninstalling the extension removes all locally stored data</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl mb-3">Contact</h2>
          <p className="text-muted leading-relaxed">
            For questions about this privacy policy, open an issue on the{" "}
            <a
              href="https://github.com/emes3ye/leetview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              GitHub repository
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
