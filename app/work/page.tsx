import type { Metadata } from "next";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
  title: "Work & Experience — Shafiul Islam | Software Development Engineer II @ Amazon",
  description:
    "SDE II at Amazon London, Prime Video. 5+ years building financial systems at global scale — billions in asset value automated, billions in payment risk mitigated. Open to L6 / Staff Engineer opportunities.",
};

export default function WorkPage() {
  return <WorkContent />;
}
