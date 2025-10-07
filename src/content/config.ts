import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date().optional(),
    description: z.string(),
    lastModified: z.string().optional(),
    cover: z.string()),
    coverAlt: z.string(),
    category: z.array(z.string()),
    tags: z.array(z.string()),
    author: z.string().optional(),
  }),
});

export const collections = { posts };
