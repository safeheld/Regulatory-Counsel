import { Metadata } from "next";
import { getAllPosts, getSectorTags } from "@/lib/sanity";
import InsightsIndex from "./InsightsIndex";

export const metadata: Metadata = {
  title: "Regulatory Insights | Fintech Licensing & Compliance Guides | Regulatory Counsel",
  description:
    "Regulatory insights, commentary and compliance guides for fintech firms from the Regulatory Counsel team.",
};

export const revalidate = 60;

export default async function InsightsPage() {
  const [posts, sectorTags] = await Promise.all([getAllPosts(), getSectorTags()]);

  return <InsightsIndex posts={posts} sectorTags={sectorTags} />;
}
