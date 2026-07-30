// src/pages/blogs/posts.ts
// =============================================================================
// BLOG REGISTRY — the single source of truth for every post.
//
// ─────────────────────────────────────────────────────────────────────────────
//  HOW TO ADD A NEW POST
//  1. Duplicate a file in ./posts/ (they are ready-made templates) and rename
//     it, e.g. ./posts/my-new-idea.tsx  — edit only the article body there.
//  2. Add one entry to the POSTS array below. The `slug` becomes the URL
//     (/blogs/<slug>) and MUST match the key you register in `postBodies`.
//  3. Register the lazy import in `postBodies` using the same slug.
//  That's it — the index page (/blogs) and the home "Latest Writing" section
//  read from this file automatically, newest first (by `date`).
// ─────────────────────────────────────────────────────────────────────────────
import { lazy, LazyExoticComponent, ComponentType } from 'react';

// Cover art — swap these for your own images/photos anytime.
import coverAncient from '../../assets/Blogs/cover-ancient.svg';
import coverZeroPoint from '../../assets/Blogs/cover-zeropoint.svg';
import coverAntikythera from '../../assets/Blogs/cover-antikythera.svg';

export type Category = 'Ancient Technology' | 'Zero Point Energy' | 'Notes';

export interface PostMeta {
  /** URL slug — /blogs/<slug>. Must be unique and match `postBodies`. */
  slug: string;
  title: string;
  /** One or two lines shown on cards and in previews. */
  excerpt: string;
  /** ISO date 'YYYY-MM-DD'. Sorting + display use this. */
  date: string;
  /** Human reading estimate, e.g. '8 min'. */
  readingTime: string;
  category: Category;
  tags: string[];
  /** Cover image (imported asset URL). */
  cover: string;
  coverAlt: string;
  /** Optional short kicker under the title. */
  subtitle?: string;
  /** Set false to keep a post out of listings while you draft it. */
  published?: boolean;
}

// -----------------------------------------------------------------------------
// The posts. Order here does not matter — listings sort by `date` (newest first).
// -----------------------------------------------------------------------------
export const POSTS: PostMeta[] = [
  {
    slug: 'ancient-lost-technology',
    title: 'Ancient Lost Technology',
    subtitle: 'What the old world knew and we forgot',
    excerpt:
      'An essay on the tools, structures and know-how that predate their supposed timeline — and why "lost" is the wrong word.',
    date: '2026-07-24',
    readingTime: '9 min',
    category: 'Ancient Technology',
    tags: ['essay', 'archaeology', 'engineering'],
    cover: coverAncient,
    coverAlt: 'Pyramid with a radiant eye — Ancient Lost Technology',
  },
  {
    slug: 'zero-point-energy',
    title: 'Zero Point Energy',
    subtitle: 'Field notes on the energy that never switches off',
    excerpt:
      'Working notes on vacuum energy: what the physics actually says, what it does not, and the experiments worth watching.',
    date: '2026-07-18',
    readingTime: '7 min',
    category: 'Zero Point Energy',
    tags: ['notes', 'physics', 'energy'],
    cover: coverZeroPoint,
    coverAlt: 'Concentric energy rings around a bright core — Zero Point Energy',
  },
  {
    slug: 'the-antikythera-signal',
    title: 'The Antikythera Signal',
    subtitle: 'A visual essay on the first computer',
    excerpt:
      'A picture-led walk through the Antikythera mechanism — bronze gears that modelled the sky two thousand years too early.',
    date: '2026-07-10',
    readingTime: '6 min',
    category: 'Ancient Technology',
    tags: ['visual-essay', 'archaeology', 'mechanism'],
    cover: coverAntikythera,
    coverAlt: 'Interlocking bronze gears — the Antikythera mechanism',
  },
];

// -----------------------------------------------------------------------------
// Lazy-loaded article bodies. Keys MUST match a slug above.
// -----------------------------------------------------------------------------
export const postBodies: Record<
  string,
  LazyExoticComponent<ComponentType>
> = {
  'ancient-lost-technology': lazy(
    () => import('./posts/ancient-lost-technology'),
  ),
  'zero-point-energy': lazy(() => import('./posts/zero-point-energy')),
  'the-antikythera-signal': lazy(
    () => import('./posts/the-antikythera-signal'),
  ),
};

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

/** All published posts, newest first. */
export function getPosts(): PostMeta[] {
  return [...POSTS]
    .filter((p) => p.published !== false)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** The N most recent posts (for the home page). */
export function getLatestPosts(n = 3): PostMeta[] {
  return getPosts().slice(0, n);
}

/** Look up a single post by slug. */
export function getPost(slug?: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Previous / next post relative to a slug (in reading order, newest first). */
export function getAdjacentPosts(slug: string): {
  prev?: PostMeta;
  next?: PostMeta;
} {
  const ordered = getPosts();
  const i = ordered.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return {
    prev: ordered[i + 1],
    next: ordered[i - 1],
  };
}

/** Nicely formatted date, e.g. 'Jul 24, 2026'. */
export function formatDate(iso: string, lang: 'en' | 'es' = 'en'): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString(lang === 'es' ? 'es-AR' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
