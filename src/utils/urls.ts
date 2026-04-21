import type { CollectionEntry } from 'astro:content';
import { CATEGORY_META } from '../content.config';

/**
 * Canonical URL path for a blog post — articles live under their category's
 * pillar path (e.g. /fso-training/what-does-fso-do/), not under /blog/.
 * Includes a trailing slash to match Astro's directory build format.
 */
export function getArticleUrl(post: CollectionEntry<'blog'>): string {
  return `${CATEGORY_META[post.data.category].path}/${post.id}/`;
}
