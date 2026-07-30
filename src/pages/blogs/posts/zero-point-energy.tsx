// src/pages/blogs/posts/zero-point-energy.tsx
// =============================================================================
// TEMPLATE 2 — FIELD NOTES + VIDEO
// A structured, scannable layout: short sections, lists, a video slot and a
// diagram. Great for research notes and "what I'm reading" posts.
// Blocks used: Lead, H2, H3, P, Term, List, VideoEmbed, Figure, Callout, Divider.
//
// VIDEO: the <VideoEmbed/> below renders a placeholder slot. To make it a real
// video, pass a YouTube id or a file:
//   <VideoEmbed youtubeId="XXXXXXXXXXX" caption="…" />
//   <VideoEmbed src={someMp4} caption="…" />
// =============================================================================
import {
  Lead,
  H2,
  H3,
  P,
  Term,
  List,
  VideoEmbed,
  Figure,
  Callout,
  Divider,
} from '../components/BlogBlocks';
import figDiagram from '../../../assets/Blogs/fig-diagram.svg';

export default function ZeroPointEnergy() {
  return (
    <>
      <Lead>
        Field notes on the strangest line in physics: empty space is not empty,
        and it is never at rest. This is me trying to separate what the math
        actually commits to from what the internet wants it to mean.
      </Lead>

      <H2>The one-line version</H2>
      <P>
        Quantum mechanics forbids anything from sitting perfectly still. Even at
        absolute zero, a system keeps a residual jitter called{' '}
        <Term>zero-point energy</Term> — the ground state still hums. Scale that
        up to every field filling the vacuum and you get the idea that the
        vacuum itself has energy baked in.
      </P>

      <Callout label="Definition">
        Zero-point energy is the lowest energy a quantum system can have — not
        zero, but the floor. For a simple oscillator it's{' '}
        <span className="font-mono text-nasared">E₀ = ½ℏω</span>. The vacuum is a
        lot of oscillators.
      </Callout>

      <H2>What we can actually observe</H2>
      <P>
        This isn't only theory — it leaves fingerprints we've measured:
      </P>
      <List
        items={[
          <>
            <Term>The Casimir effect</Term> — two uncharged metal plates
            nanometers apart get pushed together, because the vacuum modes
            between them are restricted. Measured, repeatedly.
          </>,
          <>
            <Term>The Lamb shift</Term> — vacuum fluctuations nudge the energy
            levels of hydrogen, and the shift matches prediction to absurd
            precision.
          </>,
          <>
            <Term>Spontaneous emission</Term> — an excited atom decays partly
            because the vacuum field is always there to tickle it.
          </>,
        ]}
      />

      <VideoEmbed
        title="Zero point energy explainer"
        caption="Video slot — swap in an explainer or your own clip (pass a youtubeId or src)."
      />

      <H2>Where it goes off the rails</H2>
      <P>
        Two very different claims get blended together, and keeping them apart is
        the whole game:
      </P>

      <H3>Claim A — the vacuum has energy</H3>
      <P>
        Solid. This is mainstream and measured. It even connects to one of the
        biggest open problems in physics: naive estimates of vacuum energy
        overshoot the observed cosmological constant by up to{' '}
        <Term>120 orders of magnitude</Term>. Nobody fully understands that gap.
      </P>

      <H3>Claim B — we can extract it as free, limitless power</H3>
      <P>
        Not supported. Zero-point energy is the ground state — by definition
        there's no lower state to fall into, so there's no free reservoir to
        drain. The Casimir force does mechanical work only as plates approach;
        resetting them costs at least as much. No experiment has shown net
        energy out, and the ones claiming to tend not to survive scrutiny.
      </P>

      <Figure
        src={figDiagram}
        alt="Reconstructed gear-train style diagram"
        caption="Placeholder diagram — replace with your own figure or schematic."
        wide
      />

      <Divider />

      <H2>What I'm actually watching</H2>
      <List
        ordered
        items={[
          'Precision Casimir experiments at new geometries — the cleanest window on vacuum structure.',
          'Dynamical Casimir effect — photons pulled from vacuum by fast-moving mirrors (already demonstrated with superconducting circuits).',
          'Anything tying vacuum energy to the cosmological constant problem, because that is where the real mystery lives.',
        ]}
      />

      <Callout label="Note to self">
        Stay curious, stay skeptical. "The vacuum has energy" is one of the most
        beautiful confirmed facts in physics. "Plug your house into the vacuum"
        is a different sentence wearing its clothes.
      </Callout>
    </>
  );
}
