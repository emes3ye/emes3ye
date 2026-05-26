const SUPPORT_URL = "https://www.buymeacoffee.com/emes3ye";

type SupportCTAProps = {
  compact?: boolean;
};

export default function SupportCTA({ compact = false }: SupportCTAProps) {
  return (
    <div
      className={`rounded-2xl border border-secondary/20 bg-secondary/[0.06] ${
        compact ? "px-5 py-4" : "px-6 py-8 md:px-8"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="font-heading font-bold text-foreground text-lg mb-1">
            Like what I&apos;m building?
          </p>
          <p className="text-muted text-sm leading-relaxed">
            Support the Noorkin product journey and help us keep shipping useful,
            focused tools.
          </p>
        </div>
        <a
          href={SUPPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-secondary text-white font-heading font-semibold text-sm hover:bg-secondary/90 transition-colors duration-200 shrink-0"
        >
          Buy me a coffee ↗
        </a>
      </div>
    </div>
  );
}
