import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const client = projectId
  ? createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!client) return null;
  const builder = imageUrlBuilder(client);
  return builder.image(source);
}

/* ── Shared Types ── */

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  sectorTags?: string[];
  serviceTags?: string[];
  featured?: boolean;
  metaTitle?: string;
  metaDescription?: string;
}

/* ── Helper ── */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function query<T>(groq: string, params?: Record<string, any>): Promise<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return client!.fetch<T>(groq, params as any);
}

/* ── GROQ Queries ── */

const postFields = `
  _id, title, slug, excerpt, publishedAt,
  sectorTags, serviceTags, featured,
  metaTitle, metaDescription
`;

const postCardFields = `
  _id, title, slug, excerpt, publishedAt,
  sectorTags, serviceTags, featured
`;

/** All posts, featured first then by date. */
export async function getAllPosts(): Promise<SanityPost[]> {
  if (!client) return [];
  try {
    return await query<SanityPost[]>(
      `*[_type == "post"] | order(featured desc, publishedAt desc) {
        ${postCardFields}
      }`
    );
  } catch {
    return [];
  }
}

/** Single post by slug (includes body for rendering). */
export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!client) return null;
  try {
    return await query<SanityPost | null>(
      `*[_type == "post" && slug.current == $slug][0] {
        ${postFields},
        body
      }`,
      { slug }
    );
  } catch {
    return null;
  }
}

/** Posts matching a sector tag, limited to 3. */
export async function getPostsBySector(
  sectorTag: string
): Promise<SanityPost[]> {
  if (!client) return [];
  try {
    return await query<SanityPost[]>(
      `*[_type == "post" && $tag in sectorTags] | order(publishedAt desc)[0...3] {
        ${postCardFields}
      }`,
      { tag: sectorTag }
    );
  } catch {
    return [];
  }
}

/** Most recent posts (for homepage). */
export async function getRecentPosts(): Promise<SanityPost[]> {
  if (!client) return [];
  try {
    return await query<SanityPost[]>(
      `*[_type == "post"] | order(publishedAt desc)[0...3] {
        ${postCardFields}
      }`
    );
  } catch {
    return [];
  }
}

/** Related posts by shared sector tags, excluding a given post. */
export async function getRelatedPosts(
  sectorTags: string[],
  excludeId: string
): Promise<SanityPost[]> {
  if (!client || sectorTags.length === 0) return [];
  try {
    return await query<SanityPost[]>(
      `*[_type == "post" && _id != $excludeId && count((sectorTags)[@ in $tags]) > 0] | order(publishedAt desc)[0...3] {
        ${postCardFields}
      }`,
      { excludeId, tags: sectorTags }
    );
  } catch {
    return [];
  }
}

/** All unique sector tags currently used by posts. */
export async function getSectorTags(): Promise<string[]> {
  if (!client) return [];
  try {
    return await query<string[]>(
      `array::unique(*[_type == "post"].sectorTags[])`
    );
  } catch {
    return [];
  }
}
