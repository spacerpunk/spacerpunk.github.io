// src/pages/blogs/posts/the-antikythera-signal.tsx
// =============================================================================
// TEMPLATE 3 — VISUAL ESSAY + GALLERY
// Image-led. Short bursts of text between full-width figures and a gallery.
// Great for photo sets, moodboards, reference dumps and process posts.
// Blocks used: Lead, H2, P, Term, Figure (wide), Gallery, Quote.
// =============================================================================
import { Lead, H2, P, Term, Figure, Gallery, Quote } from '../components/BlogBlocks';
import figGlyph from '../../../assets/Blogs/fig-glyph.svg';
import figDiagram from '../../../assets/Blogs/fig-diagram.svg';
import figSite from '../../../assets/Blogs/fig-site.svg';
import cover from '../../../assets/Blogs/cover-antikythera.svg';

export default function TheAntikytheraSignal() {
  return (
    <>
      <Lead>
        In 1901, sponge divers pulled a corroded lump of bronze from a shipwreck
        off the Greek island of Antikythera. It sat mislabeled for decades. It
        turned out to be a hand-cranked computer for the sky — and it is roughly{' '}
        <Term>two thousand years</Term> ahead of where it has any right to be.
      </Lead>

      <Figure
        src={cover}
        alt="Interlocking bronze gears of the Antikythera mechanism"
        caption="The mechanism, abstracted — replace with a museum photograph or your own render."
        wide
      />

      <H2>A shoebox that modelled the cosmos</H2>
      <P>
        Behind a bronze faceplate sat at least thirty interlocking gears. Turn
        the crank and the whole solar system, as the Greeks understood it, moved:
        the position of the sun and moon, the phase of the moon, the dates of
        eclipses, even the four-year cycle of the games. It is analogue
        computation, centuries before anything comparable reappears in Europe.
      </P>

      <Quote cite="Derek de Solla Price, 1959">
        It is a bit frightening to know that just before the fall of their great
        civilization the ancient Greeks had come so close to our age.
      </Quote>

      <H2>Reading the fragments</H2>
      <P>
        Only 82 fragments survive. Everything we know was recovered by looking{' '}
        <Term>through</Term> the object — X-ray and CT scanning revealed gear
        teeth and hidden inscriptions no eye could reach. The images below are
        placeholders for that kind of investigative plate: rubbings, scans,
        reconstructed gear trains.
      </P>

      <Gallery
        items={[
          { src: figGlyph, alt: 'Glyph / inscription rubbing plate' },
          { src: figDiagram, alt: 'Reconstructed gear train diagram' },
          { src: figSite, alt: 'Excavation and survey grid' },
          { src: figDiagram, alt: 'Gear ratio study' },
          { src: figGlyph, alt: 'Inscription detail' },
          { src: figSite, alt: 'Recovery site' },
        ]}
        cols={3}
      />

      <H2>Why it reads like a signal</H2>
      <P>
        The mechanism unsettles because it is a single surviving data point that
        implies a whole missing curve. A device this refined is never a first
        attempt — it sits on top of a workshop tradition, teachers, failed
        prototypes, all gone. What we hold is the one piece that happened to sink
        in the right water. Treat it less as an answer and more as a{' '}
        <Term>signal</Term>: proof that the graph of human capability has spikes
        we can no longer see.
      </P>
    </>
  );
}
