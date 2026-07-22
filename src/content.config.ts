import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const base = z.object({
  title: z.string(),
  summary: z.string(),
  featured: z.boolean().default(false),
});
const topics = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/topics' }),
  schema: base,
});
const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: base.extend({ kind: z.enum(['guide', 'learning', 'documentation']) }),
});
const benchmarks = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/benchmarks' }),
  schema: base.extend({ status: z.enum(['planned', 'verified']) }),
});
const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: base.extend({ year: z.number(), doi: z.string().optional() }),
});
const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/products' }),
  schema: base.extend({
    status: z.enum(['Available', 'Private beta', 'In development', 'Research preview', 'Planned']),
    version: z.string(),
    platform: z.array(z.string()),
    category: z.string(),
    accent: z.string(),
    features: z.array(z.string()),
    plannedFeatures: z.array(z.string()),
    screenshots: z.array(z.string()),
    documentation: z.string().optional(),
    licensing: z.string(),
    accessMethod: z.string(),
    developer: z.string(),
    lastUpdated: z.coerce.date(),
  }),
});
export const collections = { topics, resources, benchmarks, publications, products };
