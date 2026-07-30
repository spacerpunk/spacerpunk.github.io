// src/pages/blogs/posts/ancient-lost-technology.tsx
// =============================================================================
// TEMPLATE 1 — THE ESSAY (text-first)
// A long-form, mostly-text layout. Great for arguments and think-pieces.
// Blocks used: Lead, H2, P, Term, Quote, Callout, Figure, Divider.
// To reuse: copy this file, rename it, edit the prose, and register it in
// ../posts.ts. The header (title/date/cover) comes from posts.ts, not here.
// =============================================================================
import {
  Lead,
  H2,
  P,
  Term,
  Quote,
  Callout,
  Figure,
  Divider,
} from '../components/BlogBlocks';
import figSite from '../../../assets/Blogs/fig-site.svg';

export default function AncientLostTechnology() {
  return (
    <>
      <Lead>
        We call it <Term>lost</Term> technology, but that word does most of the
        work of hiding what actually happened. Nothing was lost the way keys are
        lost. It was built, used, understood — and then the chain of people who
        knew how snapped. This is an essay about that snap, and about how much
        harder it is to keep knowledge than to invent it.
      </Lead>

      <P>
        Every few years a headline insists a pyramid, a battery, or a set of
        interlocking stones is "impossible for its time." Usually it isn't
        impossible; it's just inconvenient for the tidy staircase we imagine
        progress to be. The staircase is a story we tell backwards. Real
        technical history is lumpy — it lurches, plateaus, and forgets.
      </P>

      <H2>What "advanced" really means</H2>
      <P>
        A technology is advanced relative to a problem, not relative to a
        century. Roman concrete outlasts a lot of modern concrete in seawater
        not because Romans out-engineered us, but because they solved a specific
        problem — self-healing lime clasts reacting with seawater — that we
        stopped optimizing for once steel reinforcement became cheap. We didn't
        lose the recipe because we were dumber. We lost it because the incentive
        that kept it alive disappeared.
      </P>

      <Quote cite="a working principle">
        Knowledge doesn't survive because it's true. It survives because someone
        keeps needing it.
      </Quote>

      <P>
        That reframing matters. The interesting question isn't "how did they do
        it without our tools?" It's "what did they care about enough to get that
        good at it?" Precision stonework in the Andes, tuned acoustics in
        neolithic tombs, star-accurate alignments in temples — these are the
        fingerprints of cultures optimizing for things we no longer rank highly.
      </P>

      <Figure
        src={figSite}
        alt="Terraced excavation with a survey grid"
        caption="Placeholder — drop a real site photo or survey render here."
      />

      <H2>How know-how actually disappears</H2>
      <P>
        Techniques vanish through boring mechanisms: a guild dies, a trade route
        closes, a script goes unread, a war burns an archive. The
        <Term> Antikythera mechanism</Term> — a geared bronze computer for
        predicting eclipses — implies a workshop tradition that must have made
        others. We have exactly one. The tradition didn't leave a manual; it
        left a single survivor at the bottom of the sea.
      </P>

      <Callout label="The point">
        "Lost technology" is usually preserved capability, not preserved
        artifacts. The skill lived in hands and apprenticeships, and those are
        the first things a collapse deletes.
      </Callout>

      <P>
        This is also why reconstruction is such good evidence. When modern
        engineers rebuild a trireme, raise an obelisk with ropes and levers, or
        re-smelt a pattern-welded blade, they aren't proving aliens were
        unnecessary. They're proving something more humbling: that the ceiling
        was always human ingenuity plus relentless practice, and that we
        underestimate both.
      </P>

      <Divider />

      <H2>Why it still matters</H2>
      <P>
        We are, right now, a civilization that writes almost everything down and
        understands almost none of it end to end. Ask whether your society could
        rebuild its own supply chain from scratch and the honest answer is
        unsettling. The ancients lost recipes. We are busy building systems no
        single person can hold in their head — which is its own kind of fragility,
        dressed up as sophistication.
      </P>

      <P>
        So I keep coming back to lost technology not for the mystery but for the
        warning. The old world tells us that capability is rented, never owned;
        that a civilization is only ever a few broken links away from staring at
        its own achievements and asking, honestly, how.
      </P>
    </>
  );
}
