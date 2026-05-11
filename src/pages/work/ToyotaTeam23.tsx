import { useState } from 'react';

// Storyboard frames
const storyboardModules = import.meta.glob(
  '../../assets/Team23/Toyota/Toyota_Storyboard*.{jpg,png,jpeg}',
  { eager: true },
);
const referenceModules = import.meta.glob(
  '../../assets/Team23/Toyota/References*.{jpg,png,jpeg}',
  { eager: true },
);

const storyboardFrames = Object.entries(storyboardModules)
  .map(([path, module]) => ({
    src: (module as { default: string }).default,
    filename: path.split('/').pop() || '',
  }))
  .sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }));

const references = Object.entries(referenceModules)
  .map(([path, module]) => ({
    src: (module as { default: string }).default,
    filename: path.split('/').pop() || '',
  }))
  .sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }));

const techStack = [
  { label: 'ComfyUI', color: 'text-white border-white/30 bg-white/5' },
  { label: 'Weave', color: 'text-green-400 border-green-400/30 bg-green-400/5' },
  { label: 'Fal.ai', color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5' },
  { label: 'Flux 2', color: 'text-nasared border-nasared/30 bg-nasared/5' },
  { label: 'NanoBanana2', color: 'text-pink-400 border-pink-400/30 bg-pink-400/5' },
  { label: 'Seedream', color: 'text-sky-400 border-sky-400/30 bg-sky-400/5' },
  { label: 'ChatGPT Image 2', color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5' },
];

function LightboxImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="overflow-hidden rounded-lg border border-gray-800 cursor-zoom-in hover:border-nasared transition-colors duration-200"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
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

export default function ToyotaTeam23() {
  return (
    <div className="w-full p-4 max-w-6xl">

      {/* Header */}
      <h1 className="text-2xl font-bold mb-1">
        Toyota @{' '}
        <a
          href="https://www.team23.online/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-nasared hover:underline"
        >
          Team23
        </a>
      </h1>
      <h3 className="text-nasared text-sm font-extralight mb-4">
        #storyboard #conceptfilm #generativeAI #automotive #comfyui
      </h3>
      <p className="text-base font-normal text-gray-200 mb-2 max-w-3xl">
        AI-generated storyboard for a concept short film advertising Toyota — built from
        a combination of image references and 3D models, art directed by the internal Team23
        team to keep the car pixel-accurate to the real references.
      </p>
      <p className="text-sm font-light text-gray-400 mb-6 max-w-3xl">
        The pipeline combined ComfyUI, Weave, and Fal.ai running models including Flux 2,
        NanoBanana2, Seedream, and ChatGPT Image 2. Each frame was iterated against the
        reference materials to match exact vehicle geometry, colour, and lighting — these
        storyboard frames are the foundation for the concept film currently in production.
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-10">
        {techStack.map((tech) => (
          <span
            key={tech.label}
            className={`text-xs px-2.5 py-1 rounded border font-medium ${tech.color}`}
          >
            {tech.label}
          </span>
        ))}
      </div>

      {/* Coming Soon — Concept Film */}
      <section className="mb-10">
        <div className="relative overflow-hidden rounded-lg border border-nasared/40 bg-nasared/5 p-8 flex flex-col items-center justify-center text-center min-h-[180px]">
          {/* subtle animated pulse */}
          <div className="absolute inset-0 bg-gradient-to-br from-nasared/10 via-transparent to-transparent pointer-events-none" />
          <span className="text-xs font-medium text-nasared tracking-widest uppercase mb-3">
            Coming Soon
          </span>
          <h2 className="text-xl font-bold text-white mb-2">Concept Short Film</h2>
          <p className="text-sm text-gray-400 max-w-md">
            The storyboard frames below will be animated into a full concept advertising
            short film. Production is underway.
          </p>
        </div>
      </section>

      {/* Section: Storyboard */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-1">Storyboard Frames</h2>
        <p className="text-sm text-gray-400 mb-4">
          {storyboardFrames.length} frames generated — click any image to expand.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {storyboardFrames.map((frame, i) => (
            <LightboxImage key={i} src={frame.src} alt={`Storyboard frame ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Section: References */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-1">References</h2>
        <p className="text-sm text-gray-400 mb-4">
          Vehicle and visual references used to art-direct the AI generation towards
          product accuracy.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {references.map((ref, i) => (
            <LightboxImage key={i} src={ref.src} alt={`Reference ${i + 1}`} />
          ))}
        </div>
      </section>

    </div>
  );
}
