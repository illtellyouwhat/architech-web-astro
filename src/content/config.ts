import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    excerpt: z.string().optional(),
    hero: z.string().optional(),
    draft: z.boolean().default(false),
    canonical: z.string().url().optional(),
    comments: z.boolean().default(true)
  })
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    industry: z.array(z.string()), // Array to support multiple industries
    industryIcon: z.string(),
    solutionType: z.string().optional(), // Optional - not all cases have it yet
    solutionIcon: z.string().optional(),
    metric: z.string(),
    metricLabel: z.string(),
    timeline: z.string(),
    slug: z.string().optional(), // Astro generates slug from filename
    order: z.number(), // For default sorting
    featured: z.boolean(),
    summary: z.string(),
    relatedCases: z.array(z.string()), // Array of slugs
  }),
});

export const collections = {
  posts,
  'case-studies': caseStudies
};
