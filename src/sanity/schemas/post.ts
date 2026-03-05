import { defineField, defineType } from "sanity";

const sectorOptions = [
  { title: "Payment Institutions", value: "payment-institutions" },
  { title: "Electronic Money Institutions", value: "emi" },
  { title: "Cryptoassets & Digital Assets", value: "cryptoassets" },
  { title: "Banks", value: "banks" },
  { title: "Money Services Businesses", value: "money-services-businesses" },
];

const serviceOptions = [
  { title: "Licensing", value: "licensing" },
  { title: "Compliance Support", value: "compliance" },
  { title: "Financial Crime", value: "financial-crime" },
  { title: "Compliance Audit", value: "audit" },
  { title: "Regulatory Reporting", value: "reporting" },
  { title: "Safeguarding", value: "safeguarding" },
  { title: "Become an Agent", value: "agent" },
  { title: "Change of Control", value: "change-of-control" },
  { title: "Variation of Permission", value: "variation-of-permission" },
];

export default defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short summary for cards and meta description (max 200 characters).",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "sectorTags",
      title: "Sector Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: sectorOptions,
        layout: "tags",
      },
    }),
    defineField({
      name: "serviceTags",
      title: "Service Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: serviceOptions,
        layout: "tags",
      },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Pin this post to the top of the insights page.",
      initialValue: false,
    }),
    defineField({
      name: "metaTitle",
      title: "Meta Title (SEO)",
      type: "string",
      description: "Overrides the post title for search engines if set.",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description (SEO)",
      type: "string",
      description: "Overrides the excerpt for search engines if set.",
    }),
  ],
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      sectorTags: "sectorTags",
    },
    prepare({ title, publishedAt, sectorTags }) {
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString("en-GB")
        : "No date";
      const sectors = sectorTags?.length
        ? sectorTags.join(", ")
        : "No sectors";
      return {
        title,
        subtitle: `${date} — ${sectors}`,
      };
    },
  },
});
