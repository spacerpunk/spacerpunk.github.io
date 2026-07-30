// src/pages/polvolab/projects/ai-bike-graphics.tsx
// =============================================================================
// DETAIL BODY — AI Custom Bike Graphics
// Realistic PLACEHOLDER copy — swap for your real workflow write-up.
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
import bgConcepts from '../../../assets/PolvoLab/bg-concepts.svg';
import bgOnBike from '../../../assets/PolvoLab/bg-onbike.svg';

export default function AiBikeGraphics() {
  return (
    <>
      <Lead>
        A repeatable way to design custom graphics for <Term>any</Term> bike:
        use AI to explode the concept space fast, then bring the winner down to
        clean, print-ready vectors. The tank you can rotate above wears a livery
        generated exactly this way.
      </Lead>

      <Callout label="Template note">
        Realistic placeholder content. Replace with your real process, prompts,
        and finished wraps.
      </Callout>

      <H2>The workflow</H2>
      <P>
        The point is speed at the front and control at the back — AI for
        breadth, vectors for precision:
      </P>
      <List
        ordered
        items={[
          'Reference — pull the bike\'s panel shapes and the rider\'s direction into a board.',
          'Concept — generate dozens of livery directions with AI image tools, prompting for stripes, numbers, negative space.',
          'Select — pick 2–3 directions, note what works (flow, number legibility, brand fit).',
          'Vectorise — rebuild the winner as clean vectors so it scales to print without artefacts.',
          'Mock up — apply it to a side-profile of the actual bike to check proportions.',
          'Output — export tiled, bleed-safe files for the vinyl cutter / printer.',
        ]}
      />

      <Gallery
        items={[
          { src: bgConcepts, alt: 'AI-generated livery concept sheet' },
          { src: bgOnBike, alt: 'Chosen livery mocked up on the bike' },
        ]}
        cols={2}
      />

      <Callout label="Where AI helps (and where it doesn't)">
        AI is unbeatable for exploring directions in minutes. It is not
        print-ready — every final file gets rebuilt as vectors so lines are
        crisp and colours are exact spot values.
      </Callout>

      <H2>Output specs</H2>
      <SpecTable
        rows={[
          { k: 'Deliverable', v: 'Die-cut vinyl wrap kit' },
          { k: 'Vector format', v: 'SVG / PDF (outlined)' },
          { k: 'Colour', v: 'Spot: POLVO Red #d92906 + black + bone' },
          { k: 'Print', v: 'Eco-solvent on cast vinyl + laminate' },
          { k: 'Fits', v: 'Any bike — panels re-templated per model' },
        ]}
      />

      <Divider />

      <H2>Resources</H2>
      <ResourceList
        items={[
          {
            label: 'Inkscape',
            href: 'https://inkscape.org/',
            note: 'Free vector tool',
          },
          {
            label: 'SVGO',
            href: 'https://github.com/svg/svgo',
            note: 'Optimise export files',
          },
          {
            label: 'Vehicle wrap — overview',
            href: 'https://en.wikipedia.org/wiki/Vehicle_wrap',
            note: 'Materials & process',
          },
        ]}
      />
    </>
  );
}
