import type { Metadata } from "next";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
  title: "Work & Resume — Shafiul Islam",
  description:
    "Senior software engineer and entrepreneur. Career history, technical skills, and downloadable CV.",
};

export default function WorkPage() {
  return <WorkContent />;
}
