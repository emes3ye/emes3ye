import type { Metadata } from "next";
import CaseStudiesContent from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How Carrot Soft helped Snow Laundry, Selekt Chicken, Penang City UK, and Mega Laundry grow their digital presence.",
  openGraph: {
    title: "Case Studies — Carrot Soft by Shafiul Islam",
    description:
      "How Carrot Soft helped Snow Laundry, Selekt Chicken, Penang City UK, and Mega Laundry grow their digital presence.",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
