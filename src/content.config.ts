import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const CATEGORIES = [
  'fso-training',
  'nispom-compliance',
  'facility-clearance',
  'security-clearances',
  'cmmc',
] as const;

const SCHEMA_TYPES = ['article', 'howto', 'faq'] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    keywords: z.array(z.string()).default([]),
    category: z.enum(CATEGORIES),
    featuredImage: z.string().optional(),
    schema: z.enum(SCHEMA_TYPES).default('article'),
    draft: z.boolean().default(false),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.union([z.number(), z.string()]),
    category: z.string(),
    buyUrl: z.string().url(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { blog, products };

export const CATEGORY_META: Record<
  (typeof CATEGORIES)[number],
  { label: string; path: string; description: string }
> = {
  'fso-training': {
    label: 'FSO Training',
    path: '/fso-training',
    description:
      'Training guidance for Facility Security Officers — onboarding, annual refreshers, and role-specific skill-building.',
  },
  'nispom-compliance': {
    label: 'NISPOM Compliance',
    path: '/nispom-compliance',
    description:
      'Plain-language breakdowns of the National Industrial Security Program Operating Manual (32 CFR Part 117).',
  },
  'facility-clearance': {
    label: 'Facility Clearance (FCL)',
    path: '/facility-clearance',
    description:
      'How to obtain, maintain, and upgrade a Facility Clearance under DCSA oversight.',
  },
  'security-clearances': {
    label: 'Security Clearances',
    path: '/security-clearances',
    description:
      'Personnel security clearance processes, adjudication, continuous vetting, and reciprocity.',
  },
  cmmc: {
    label: 'CMMC for FSOs',
    path: '/cmmc-for-fsos',
    description:
      'Cybersecurity Maturity Model Certification guidance tailored for Facility Security Officers.',
  },
};

export type Category = (typeof CATEGORIES)[number];
export const categorySlugs = CATEGORIES;
