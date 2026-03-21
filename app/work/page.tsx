import type { Metadata } from "next";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
  title: "Work & Experience — Shafiul Islam | Software Development Engineer II @ Amazon",
  description:
    "SDE II at Amazon London, Prime Video FinSys. $7.66B in automated asset management. Exceeds High Bar. Open to L6 / Staff Engineer opportunities.",
};

export default function WorkPage() {
  return <WorkContent />;
}
