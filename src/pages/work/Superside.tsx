import { useState } from 'react';
import PasswordGate from '../../components/PasswordGate';

// Moodboard references
import mb1 from '../../assets/Superside/MoodBoard (1).png';
import mb2 from '../../assets/Superside/MoodBoard (2).png';
import mb3 from '../../assets/Superside/MoodBoard (3).png';
import mb4 from '../../assets/Superside/MoodBoard (4).png';
import mb5 from '../../assets/Superside/MoodBoard (5).png';
import mb6 from '../../assets/Superside/MoodBoard (6).png';
import mb7 from '../../assets/Superside/MoodBoard (7).png';
import mb8 from '../../assets/Superside/MoodBoard (8).png';
import mb9 from '../../assets/Superside/MoodBoard (9).png';
import mb10 from '../../assets/Superside/MoodBoard (10).png';
import mb11 from '../../assets/Superside/MoodBoard (11).png';

// Generated outputs
import chaosImg from '../../assets/Superside/CHAOS 1_!.png';

// Final deliverables
import fmt4x5 from '../../assets/Superside/4_5.png';
import fmt9x16 from '../../assets/Superside/9_16.png';
import fmt229x16 from '../../assets/Superside/229_16.png';

const moodboards = [mb1, mb2, mb3, mb4, mb5, mb6, mb7, mb8, mb9, mb10, mb11];

const techStack = [
  {
    label: 'ChatGPT - Agentic',
    color: 'text-white border-white/30 bg-white/5',
  },
  {
    label: 'Flux 2 Pro',
    color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
  },
  {
    label: 'Nano Banana',
    color: 'text-blue-400 border-blue-400/30 bg-blue-400/5',
  },
  { label: 'Figma', color: 'text-sky-400 border-sky-400/30 bg-sky-400/5' },
];

function LightboxImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`overflow-hidden rounded-lg border border-gray-800 cursor-zoom-in hover:border-nasared/60 transition-colors duration-200 ${className}`}
        onClick={() => setOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl font-light"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}

function DayMarker({ day, label }: { day: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-nasared shadow-[0_0_8px_rgba(217,41,6,0.6)]" />
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-nasared">
          {day}
        </span>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-nasared/30 to-transparent" />
      <span className="text-xs text-gray-500 font-light">{label}</span>
    </div>
  );
}

function PhaseLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-2">
      <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-nasared">
        {number}
      </span>
      <h3 className="text-base font-semibold text-white">{title}</h3>
    </div>
  );
}

export default function Superside() {
  return (
    <PasswordGate storageKey="superside-unlocked">
      <div className="w-full p-4 max-w-6xl">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-1">
          Superside — AI Creative Test
        </h1>
        <h3 className="text-nasared text-sm font-extralight mb-4">
          #superside #AI #generativeAI #creative #imagegen #moodboard
        </h3>
        <p className="text-base font-normal text-gray-200 mb-2 max-w-3xl">
          A 2-day AI creative brief test from Superside — the task: take a
          concept from zero to polished, multi-format image deliverables using
          AI generation tools, end to end.
        </p>
        <p className="text-sm font-light text-gray-400 mb-6 max-w-3xl">
          Day one was about building visual direction: pulling references,
          defining tone, colour, and aesthetic. Day two moved into generation,
          chaos exploration, refinement, and final delivery across three output
          formats.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-12">
          {techStack.map((tech) => (
            <span
              key={tech.label}
              className={`text-xs px-2.5 py-1 rounded border font-medium ${tech.color}`}
            >
              {tech.label}
            </span>
          ))}
        </div>

        {/* ─── DAY 1 ─────────────────────────────────────────── */}
        <DayMarker day="Day 1" label="Brief → Concept → Direction" />

        {/* Phase 01 — Moodboard */}
        <section className="mb-14 pl-5 border-l border-gray-800">
          <PhaseLabel number="Phase 01" title="Moodboard & Visual Research" />
          <p className="text-sm text-gray-400 mb-5 max-w-2xl">
            Before touching any generation tool, the visual world gets defined.
            11 reference frames assembled to lock in tone, lighting palette,
            texture, and mood — this is the filter every prompt gets measured
            against.
          </p>

          {/* Moodboard grid — intentionally tight, high-density */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {moodboards.map((src, i) => (
              <LightboxImage
                key={i}
                src={src}
                alt={`Moodboard reference ${i + 1}`}
                className="aspect-square"
              />
            ))}
          </div>
        </section>

        {/* ─── DAY 1 → 2 ─────────────────────────────────────── */}
        <DayMarker day="Day 1 → 2" label="Generation & Exploration" />

        {/* Phase 02 — Chaos Run */}
        <section className="mb-14 pl-5 border-l border-gray-800">
          <PhaseLabel number="Phase 02" title="First Generation — Chaos Run" />
          <p className="text-sm text-gray-400 mb-5 max-w-2xl">
            The first generation run is intentionally loose — high variance,
            exploratory, no polish. This is where the moodboard meets the model
            and the prompt strategy gets stress-tested. Raw signal, useful
            failures, and unexpected wins all live here.
          </p>

          <div className="w-full overflow-hidden rounded-lg border border-gray-800 hover:border-nasared/40 transition-colors duration-300">
            <LightboxImage
              src={chaosImg}
              alt="CHAOS — first generation run"
              className="w-full aspect-video"
            />
          </div>
          <p className="text-xs text-gray-600 mt-2">
            CHAOS 01 — raw output, unedited
          </p>
        </section>

        {/* ─── DAY 2 ─────────────────────────────────────────── */}
        <DayMarker day="Day 2" label="Refinement → Edit → Delivery" />

        {/* Phase 03 — Final Deliverables */}
        <section className="mb-8 pl-5 border-l border-gray-800">
          <PhaseLabel
            number="Phase 03"
            title="Final Deliverables — Multi-Format"
          />
          <p className="text-sm text-gray-400 mb-5 max-w-2xl">
            Selections refined, edited in Photoshop, colour-graded, and exported
            across three format ratios — covering landscape, portrait, and
            vertical placements for digital and social delivery.
          </p>

          {/* Landscape — full width feature */}
          <div className="mb-3 group">
            <LightboxImage
              src={fmt229x16}
              alt="Final deliverable — Landscape / widescreen"
              className="w-full"
            />
            <p className="text-xs text-gray-600 mt-1.5 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-nasared" />
              Landscape — widescreen
            </p>
          </div>

          {/* Portrait pair — side by side */}
          <div className="grid grid-cols-2 gap-3 mt-5">
            <div>
              <LightboxImage
                src={fmt4x5}
                alt="Final deliverable — 4:5 portrait"
                className="w-full"
              />
              <p className="text-xs text-gray-600 mt-1.5 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-nasared" />
                4:5 — Portrait
              </p>
            </div>
            <div>
              <LightboxImage
                src={fmt9x16}
                alt="Final deliverable — 9:16 vertical"
                className="w-full"
              />
              <p className="text-xs text-gray-600 mt-1.5 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-nasared" />
                9:16 — Vertical / Story
              </p>
            </div>
          </div>
        </section>
      </div>
    </PasswordGate>
  );
}
