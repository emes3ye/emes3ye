import type { Metadata } from "next";
import VenturesContent from "./VenturesContent";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Explore the ventures and investments of Shafiul Islam — from Carrot Soft to halal property and restaurant investments.",
  openGraph: {
    title: "Ventures — Shafiul Islam",
    description:
      "Explore the ventures and investments of Shafiul Islam — from Carrot Soft to halal property and restaurant investments.",
  },
};

export default function VenturesPage() {
  return <VenturesContent />;
}
