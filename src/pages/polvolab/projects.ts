// src/pages/polvolab/projects.ts
// =============================================================================
// POLVO LAB PROJECTS — source of truth for the studio's latest work.
// The home-page "POLVO LAB — Latest" strip and the POLVO LAB page both read
// from here. To add a project, append an entry (newest first) and give it a
// cover image from ../../assets/PolvoLab/.
// =============================================================================
import { lazy, LazyExoticComponent, ComponentType } from 'react';
import type { ModelVariant } from '../../components/Model3DViewer';

import coverRallyTower from '../../assets/PolvoLab/rally-tower.svg';
import coverBrandIdentity from '../../assets/PolvoLab/brand-identity.svg';
import coverBikeGraphics from '../../assets/PolvoLab/bike-graphics.svg';

export interface PolvoProject {
  slug: string;
  title: string;
  /** Short kicker under the title on the detail page. */
  subtitle?: string;
  /** Short one/two-line summary for cards. */
  excerpt: string;
  /** Small status/type badge shown on the card, e.g. 'Build'. */
  status: string;
  /** Year / timeframe shown on the detail page. */
  year?: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  /** Which 3D placeholder piece to show on the detail page (optional). */
  model?: ModelVariant;
  /** Set false to hide while drafting. */
  published?: boolean;
}

export const POLVO_PROJECTS: PolvoProject[] = [
  {
    slug: 'rally-tower-corven-txr250x',
    title: 'Rally Tower — Corven TXR 250 X',
    subtitle: 'A navigation tower designed for the dust',
    excerpt:
      '3D-designed navigation tower for a Corven TXR 250 X rally build — roadbook, instruments and lighting in a single fabricated frame.',
    status: 'Build',
    year: '2026',
    tags: ['3D Design', 'Rally', 'Fabrication'],
    cover: coverRallyTower,
    coverAlt: 'Rally navigation tower with roadbook and gauge for a Corven TXR 250 X',
    model: 'rally-tower',
  },
  {
    slug: 'brand-identity',
    title: 'POLVO Brand Identity',
    subtitle: 'A visual language forged from dust',
    excerpt:
      'Building the POLVO LAB identity from the ground up — logo, type system and a visual language forged from dust and terrain.',
    status: 'Identity',
    year: '2026',
    tags: ['Branding', 'Identity', 'Design'],
    cover: coverBrandIdentity,
    coverAlt: 'POLVO LAB logo lockup with construction grid',
    model: 'brand-badge',
  },
  {
    slug: 'ai-bike-graphics',
    title: 'AI Custom Bike Graphics',
    subtitle: 'Concept to wrap for any machine',
    excerpt:
      'A workflow for designing custom graphics and livery for any bike — AI-assisted concepting turned into print-ready wraps.',
    status: 'Method',
    year: '2026',
    tags: ['Graphics', 'AI', 'Livery'],
    cover: coverBikeGraphics,
    coverAlt: 'Motorcycle side panel with AI-generated livery graphics and number 07',
    model: 'tank-livery',
  },
];

// -----------------------------------------------------------------------------
// Lazy-loaded detail bodies. Keys MUST match a slug above.
// -----------------------------------------------------------------------------
export const projectBodies: Record<
  string,
  LazyExoticComponent<ComponentType>
> = {
  'rally-tower-corven-txr250x': lazy(
    () => import('./projects/rally-tower-corven-txr250x'),
  ),
  'brand-identity': lazy(() => import('./projects/brand-identity')),
  'ai-bike-graphics': lazy(() => import('./projects/ai-bike-graphics')),
};

/** All published projects (order in the array = newest first). */
export function getPolvoProjects(): PolvoProject[] {
  return POLVO_PROJECTS.filter((p) => p.published !== false);
}

/** The N most recent projects (for the home page). */
export function getLatestPolvoProjects(n = 3): PolvoProject[] {
  return getPolvoProjects().slice(0, n);
}

/** Look up a single project by slug. */
export function getPolvoProject(slug?: string): PolvoProject | undefined {
  return POLVO_PROJECTS.find((p) => p.slug === slug);
}

/** Previous / next project relative to a slug (in listing order). */
export function getAdjacentPolvoProjects(slug: string): {
  prev?: PolvoProject;
  next?: PolvoProject;
} {
  const ordered = getPolvoProjects();
  const i = ordered.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return { prev: ordered[i - 1], next: ordered[i + 1] };
}
