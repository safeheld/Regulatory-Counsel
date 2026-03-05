import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, getRelatedPosts } from "@/lib/sanity";
import ContactStrip from "@/components/ContactStrip";
import { articleJsonLd } from "@/lib/jsonLd";

const sectorLabels: Record<string, string> = {
  "payment-institutions": "Payment Institutions",
  emi: "Electronic Money Institutions",
  cryptoassets: "Cryptoassets & Digital Assets",
  banks: "Banks",
  "money-services-businesses": "Money Services Businesses",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.metaTitle || `${post.title} | Regulatory Counsel`,
    description: post.metaDescription || post.excerpt,
  };
}

export const revalidate = 60;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(
    post.sectorTags || [],
    post._id
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: post.title,
              description: post.excerpt,
              url: `https://www.regulatorycounsel.co.uk/insights/${slug}`,
              datePublished: post.publishedAt,
            })
          ),
        }}
      />
      <article>
        <header className="bg-navy text-white py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {post.sectorTags && post.sectorTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.sectorTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded"
                  >
                    {sectorLabels[tag] || tag}
                  </span>
                ))}
              </div>
            )}
            {post.publishedAt && (
              <time className="text-gray-300 text-sm">
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            )}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mt-2">
              {post.title}
            </h1>
            <p className="text-sm text-gray-400 mt-4">
              By the Regulatory Counsel Team
            </p>
          </div>
        </header>

        <div className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-navy max-w-none">
            {post.body ? (
              <PortableText value={post.body} />
            ) : (
              <p className="text-gray-500">No content available.</p>
            )}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy mb-8">
              Related Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp._id}
                  href={`/insights/${rp.slug.current}`}
                  className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg hover:border-blue-600 transition-all group"
                >
                  {rp.publishedAt && (
                    <time className="text-sm text-gray-400">
                      {new Date(rp.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  )}
                  <h3 className="text-lg font-bold text-navy group-hover:text-blue-600 transition-colors mt-1 mb-2">
                    {rp.title}
                  </h3>
                  {rp.excerpt && (
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {rp.excerpt}
                    </p>
                  )}
                  <span className="text-blue-600 text-sm font-medium">
                    Read more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactStrip />
    </>
  );
}
