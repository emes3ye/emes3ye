import type { Metadata } from "next";
import OpenToWorkContent from "./OpenToWorkContent";

export const metadata: Metadata = {
  title: "Shafiul Islam — Senior Software Engineer (L6) | Open to Work",
  description:
    "4+ years at Amazon building mission-critical financial systems. $7.66B in automated asset management. Exceeds High Bar. Open to L6 opportunities.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OpenToWorkPage() {
  return <OpenToWorkContent />;
}
