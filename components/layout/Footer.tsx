import Link from "next/link";
import PrayerWidget from "@/components/ui/PrayerWidget";

const socialLinks = [
  { href: "https://linkedin.com/in/emes3ye", label: "LinkedIn" },
  { href: "https://x.com/emes3ye", label: "X / Twitter" },
  { href: "https://github.com/emes3ye", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <p className="text-sm text-muted">&copy; 2026 Shafiul Islam</p>
          <PrayerWidget />
        </div>
        <ul className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
