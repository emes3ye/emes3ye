import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — Shafiul Islam",
  description:
    "Learn about Shafiul Islam — software engineer at Amazon, founder of Carrot Soft, halal investor, and Muslim entrepreneur.",
};

export default function AboutPage() {
  return <AboutContent />;
}
