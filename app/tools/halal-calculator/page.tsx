import type { Metadata } from "next";
import HalalCalculator from "@/components/sections/HalalCalculator";

export const metadata: Metadata = {
  title: "Halal Investment Calculator — Shariah-Compliant Returns",
  description:
    "Calculate projected returns on your halal investments. Explore Shariah-compliant profit-sharing models, sukuk, and equity funds — no riba, no guesswork.",
  openGraph: {
    title: "Halal Investment Calculator — Shafiul Islam",
    description:
      "Calculate projected returns on your halal investments. Explore Shariah-compliant profit-sharing models, sukuk, and equity funds — no riba, no guesswork.",
  },
};

export default function HalalCalculatorPage() {
  return <HalalCalculator />;
}
