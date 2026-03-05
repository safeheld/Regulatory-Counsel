"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  sectorTags?: string[];
  serviceTags?: string[];
  featured?: boolean;
}

const sectorLabels: Record<string, string> = {
  "payment-institutions": "Payment Institutions",
  emi: "Electronic Money Institutions",
  cryptoassets: "Cryptoassets & Digital Assets",
  banks: "Banks",
  "money-services-businesses": "Money Services Businesses",
};

const PER_PAGE = 12;

export default function InsightsIndex({
  posts,
  sectorTags,
}: {
  posts: Post[];
  sectorTags: string[];
}) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = posts;
    if (activeTag) {
      result = result.filter((p) => p.sectorTags?.includes(activeTag));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.excerpt && p.excerpt.toLowerCase().includes(q))
      );
    }
    return result;
  }, [posts, activeTag, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            Regulatory Insights &amp; Guidance
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Commentary, analysis and practical guides on fintech licensing, FCA compliance
            and global regulation.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <input
              type="text"
              placeholder="Search insights..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="flex-1 px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
            />
            {sectorTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setActiveTag(null);
                    setPage(1);
                  }}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    !activeTag
                      ? "bg-navy text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                {sectorTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setActiveTag(tag);
                      setPage(1);
                    }}
                    className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                      activeTag === tag
                        ? "bg-navy text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {sectorLabels[tag] || tag}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Posts grid */}
          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginated.map((post) => (
                <Link
                  key={post._id}
                  href={`/insights/${post.slug.current}`}
                  className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg hover:border-blue-600 transition-all group relative"
                >
                  {post.featured && (
                    <span className="absolute top-4 right-4 text-xs bg-blue-600 text-white px-2 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                  {post.publishedAt && (
                    <time className="text-sm text-gray-400">
                      {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  )}
                  <h2 className="text-lg font-bold text-navy group-hover:text-blue-600 transition-colors mt-1 mb-2">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  )}
                  {post.sectorTags && post.sectorTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.sectorTags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                        >
                          {sectorLabels[tag] || tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="text-blue-600 text-sm font-medium">
                    Read more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-2">
                Insights coming soon.
              </p>
              <p className="text-gray-400">
                Check back for regulatory commentary, licensing guides and compliance analysis.
              </p>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-16">
              No posts match your search.
            </p>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded border border-gray-300 text-sm font-medium disabled:opacity-40 hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-10 h-10 rounded text-sm font-medium transition-colors ${
                    n === currentPage
                      ? "bg-navy text-white"
                      : "border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded border border-gray-300 text-sm font-medium disabled:opacity-40 hover:bg-gray-50 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
