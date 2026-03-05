import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  name: "regulatory-counsel",
  title: "Regulatory Counsel",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Blog Posts")
              .schemaType("post")
              .child(
                S.documentTypeList("post")
                  .title("Blog Posts")
                  .defaultOrdering([
                    { field: "publishedAt", direction: "desc" },
                  ])
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
