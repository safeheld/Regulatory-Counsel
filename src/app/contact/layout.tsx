import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Regulatory Counsel | FCA Licensing & Compliance Experts",
  description:
    "Get in touch to discuss your licensing, compliance or regulatory needs. Free initial consultation. 020 7873 2077.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
