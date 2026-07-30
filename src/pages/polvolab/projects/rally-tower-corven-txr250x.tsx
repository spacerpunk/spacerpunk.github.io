// src/pages/polvolab/projects/rally-tower-corven-txr250x.tsx
// =============================================================================
// DETAIL BODY — Rally Tower (Corven TXR 250 X)
// Pure content. Header + 3D hero come from PolvoLayout (see ../projects.ts).
// Everything below is realistic PLACEHOLDER copy — swap for your real build log.
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
import rtCad from '../../../assets/PolvoLab/rt-cad.svg';
import rtDetail from '../../../assets/PolvoLab/rt-detail.svg';

export default function RallyTowerCorvenTxr250x() {
  return (
    <>
      <Lead>
        The rally tower is the cockpit of a roadbook bike — it holds the
        navigation, the instruments and the lighting where the rider can read
        them at speed. This is the POLVO LAB tower designed for a{' '}
        <Term>Corven TXR 250 X</Term> build: one fabricated frame, everything in
        reach.
      </Lead>

      <Callout label="Template note">
        This page is a working template. The copy, specs and resources below are
        realistic placeholders — replace them with your real build log, photos
        and files as the project progresses.
      </Callout>

      <H2>The brief</H2>
      <P>
        Turn a stock TXR 250 X into a rally-capable navigation platform without a
        full aftermarket tower. The design has to mount to the standard
        handlebar clamp, survive vibration and dust, and keep the roadbook,
        tripmeter and GPS on a single sight line. Weight target: under two
        kilos. Everything modelled in 3D first, then fabricated.
      </P>

      <SpecTable
        rows={[
          { k: 'Base bike', v: 'Corven TXR 250 X' },
          { k: 'Displacement', v: '249 cc, single' },
          { k: 'Discipline', v: 'Rally raid / enduro' },
          { k: 'Tower material', v: '6061-T6 aluminium (placeholder)' },
          { k: 'Instruments', v: 'Roadbook + GPS + tripmeter' },
          { k: 'Est. weight', v: '≈ 1.8 kg' },
          { k: 'Status', v: 'Design v3 → fabrication' },
        ]}
      />

      <H2>The design</H2>
      <P>
        The tower was modelled as a bolt-on assembly: a handlebar clamp mount, a
        roadbook housing with side scroll knobs, a round rally gauge, and a GPS
        pod, all tied into one frame. Rotate the 3D piece above to see the
        general massing — the CAD placeholders below stand in for the real
        profile drawings and exploded views.
      </P>

      <Gallery
        items={[
          { src: rtCad, alt: 'CAD side-profile of the rally tower' },
          { src: rtDetail, alt: 'Exploded handlebar clamp mount detail' },
        ]}
        cols={2}
      />

      <Callout label="Fabrication">
        Prototype in PLA to check clearances and sight lines on the bike, then
        cut and bend the final tower from aluminium. Powder-coat matte black,
        POLVO red accents.
      </Callout>

      <H2>Build log</H2>
      <List
        ordered
        items={[
          'v1 — rough massing, checked reach from the saddle.',
          'v2 — moved the roadbook up 40 mm, added the GPS pod.',
          'v3 — clamp mount redesigned for the TXR bar diameter (current).',
          'Next — PLA test fit, then aluminium fabrication and wiring.',
        ]}
      />

      <Divider />

      <H2>Resources</H2>
      <ResourceList
        items={[
          {
            label: 'Corven — manufacturer',
            href: 'https://www.corven.com.ar/',
            note: 'TXR 250 X base bike',
          },
          {
            label: 'Roadbook navigation',
            href: 'https://en.wikipedia.org/wiki/Roadbook',
            note: 'How rally navigation works',
          },
          {
            label: 'Rally raid — discipline',
            href: 'https://en.wikipedia.org/wiki/Rally_raid',
            note: 'Context & references',
          },
          {
            label: 'Blender',
            href: 'https://www.blender.org/',
            note: 'CAD / modelling tool',
          },
        ]}
      />
    </>
  );
}
