// src/pages/polvolab/projects/brand-identity.tsx
// =============================================================================
// DETAIL BODY — POLVO Brand Identity
// Realistic PLACEHOLDER copy — swap for the real identity write-up.
// =============================================================================
import {
  Lead,
  H2,
  P,
  Term,
  List,
  Gallery,
  Callout,
  SpecTable,
  ResourceList,
  Divider,
} from '../components/PolvoBlocks';
import biGrid from '../../../assets/PolvoLab/bi-grid.svg';
import biSystem from '../../../assets/PolvoLab/bi-system.svg';

export default function BrandIdentity() {
  return (
    <>
      <Lead>
        POLVO means <Term>dust</Term> — the residue of the road, the thing that
        gets on everything when a bike has actually been ridden. The identity is
        built around that: rugged, functional, honest. This is the system, from
        the badge you can rotate above down to the type and colour.
      </Lead>

      <Callout label="Template note">
        Realistic placeholder content. Replace with your real brand rationale,
        logo files and usage guidelines.
      </Callout>

      <H2>The idea</H2>
      <P>
        The mark is a circular badge — a wheel, a stamp, a coin you'd find in a
        toolbox — carrying a small dust/mountain motif over the wordmark. It
        should read at a glance on a tank, a patch, or a favicon, and survive
        being printed in a single colour.
      </P>

      <Gallery
        items={[
          { src: biGrid, alt: 'Logo construction grid' },
          { src: biSystem, alt: 'Colour palette and type specimen' },
        ]}
        cols={2}
      />

      <SpecTable
        rows={[
          { k: 'Name', v: 'POLVO LAB' },
          { k: 'Wordmark', v: 'JetBrains Mono, bold, tracked' },
          { k: 'Primary', v: 'POLVO Red · #d92906' },
          { k: 'Neutrals', v: 'Bone #f5f5f4 · Stone #57534e · Black #0a0a0a' },
          { k: 'Motif', v: 'Dust ridge / mountain line' },
          { k: 'Tone', v: 'Rugged, functional, honest' },
        ]}
      />

      <H2>The system</H2>
      <P>
        An identity is more than a logo — it's the set of decisions that keep
        everything looking like it came from the same place:
      </P>
      <List
        items={[
          <>
            <Term>Logo</Term> — primary badge, horizontal lockup, and a
            single-colour stamp for embroidery and etching.
          </>,
          <>
            <Term>Type</Term> — JetBrains Mono throughout; wide tracking for
            labels, tight for headlines.
          </>,
          <>
            <Term>Colour</Term> — POLVO red on black, bone and stone for
            support. Red is an accent, never a background.
          </>,
          <>
            <Term>Applications</Term> — tank badges, apparel, roadbook stickers,
            and this site.
          </>,
        ]}
      />

      <Divider />

      <H2>Resources</H2>
      <ResourceList
        items={[
          {
            label: 'JetBrains Mono',
            href: 'https://www.jetbrains.com/lp/mono/',
            note: 'The brand typeface',
          },
          {
            label: 'Coolors',
            href: 'https://coolors.co/',
            note: 'Palette tool',
          },
          {
            label: 'Google Fonts — JetBrains Mono',
            href: 'https://fonts.google.com/specimen/JetBrains+Mono',
            note: 'Web embedding',
          },
        ]}
      />
    </>
  );
}
