import type { Metadata } from "next";
import ResourcesContent from "./ResourcesContent";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Curated books, tools, and courses recommended by Shafiul Islam — for entrepreneurs, developers, and Muslim professionals.",
  openGraph: {
    title: "Resources — Shafiul Islam",
    description:
      "Curated books, tools, and courses recommended by Shafiul Islam — for entrepreneurs, developers, and Muslim professionals.",
  },
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
