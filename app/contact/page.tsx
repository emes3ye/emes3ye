import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Shafiul Islam",
  description:
    "Get in touch with Shafiul Islam for business inquiries, investment opportunities, or collaborations.",
};

export default function ContactPage() {
  return <ContactContent />;
}
