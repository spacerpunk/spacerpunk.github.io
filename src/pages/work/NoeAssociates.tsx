import { useState, useRef } from 'react';
import PasswordGate from '../../components/PasswordGate';

const videoModules = import.meta.glob('../../assets/Noe/*.mp4', {
  eager: true,
});
const staticModules = import.meta.glob('../../assets/Noe/*.{png,gif}', {
  eager: true,
});

interface MediaItem {
  src: string;
  filename: string;
}

const videos: MediaItem[] = Object.entries(videoModules)
  .map(([path, mod]) => ({
    src: (mod as { default: string }).default,
    filename: path.split('/').pop() || '',
  }))
  .sort((a, b) => {
    // Social examples float to the top
    const aLatest = a.filename.includes('Social');
    const bLatest = b.filename.includes('Social');
    if (aLatest && !bLatest) return -1;
    if (!aLatest && bLatest) return 1;
    return a.filename.localeCompare(b.filename, undefined, { numeric: true });
  });

const staticAssets: MediaItem[] = Object.entries(staticModules).map(
  ([path, mod]) => ({
    src: (mod as { default: string }).default,
    filename: path.split('/').pop() || '',
  }),
);

// Human-readable label from filename (strips UUID suffix)
function toLabel(filename: string): string {
  return filename
    .replace(/\.[^/.]+$/, '')
    .replace(
      /_[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
      '',
    )
    .replace(/[-_]/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

const techStack = [
  {
    label: 'Flux',
    color: 'text-orange-400 border-orange-400/30 bg-orange-400/5',
  },
  {
    label: 'Stable Diffusion',
    color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  },
  {
    label: 'ControlNet',
    color: 'text-purple-400 border-purple-400/30 bg-purple-400/5',
  },
  { label: 'ComfyUI', color: 'text-white border-white/30 bg-white/5' },
  {
    label: 'ChatGPT',
    color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
  },
  { label: 'Veo', color: 'text-blue-400 border-blue-400/30 bg-blue-400/5' },
  { label: 'Kling', color: 'text-pink-400 border-pink-400/30 bg-pink-400/5' },
  { label: 'Seedance', color: 'text-sky-400 border-sky-400/30 bg-sky-400/5' },
];

// ─── Hover-play video card ────────────────────────────────────────────────────

function HoverVideo({ src, filename }: { src: string; filename: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const isLatest = filename.includes('Social');

  const onEnter = () => {
    const v = videoRef.current;
    if (v) {
      v.play().catch(() => {});
      setPlaying(true);
    }
  };

  const onLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
      setPlaying(false);
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-gray-800 hover:border-nasared/60 transition-colors duration-200 cursor-pointer bg-gray-950 break-inside-avoid mb-3"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-auto block"
      />

      {/* Play icon — fades when playing */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          playing ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center backdrop-blur-sm">
          <svg
            className="w-4 h-4 text-white ml-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Latest badge */}
      {isLatest && (
        <div className="absolute top-2 left-2">
          <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded bg-nasared text-white">
            Latest
          </span>
        </div>
      )}

      {/* Label on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-200">
        <p className="text-xs text-gray-300 truncate">{toLabel(filename)}</p>
      </div>
    </div>
  );
}

// ─── Lightbox image ───────────────────────────────────────────────────────────

function LightboxImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-lg border border-gray-800 hover:border-nasared/60 transition-colors duration-200 cursor-zoom-in bg-gray-950 break-inside-avoid mb-2"
        onClick={() => setOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-5 text-gray-400 hover:text-white text-2xl font-light leading-none"
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NoeAssociates() {
  return (
    <PasswordGate storageKey="noeassociates-unlocked" password="n0e&2026">
      <div className="w-full p-4 max-w-6xl">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-1">
          Noe&amp;Associates — Social Content Showcase
        </h1>
        <h3 className="text-nasared text-sm font-extralight mb-4">
          #noeassociates #AI #generativeAI #social #videogen #imagegen #comfyui
        </h3>
        <p className="text-base font-normal text-gray-200 mb-2 max-w-3xl">
          A body of AI-generated social content produced for several brands
          — spanning video generation, image synthesis, and composite work
          across a mix of closed and open-source tools.
        </p>
        <p className="text-sm font-light text-gray-400 mb-6 max-w-3xl">
          Projects range from product visualisation and lifestyle stills to
          fully generated video assets — all built with ComfyUI-orchestrated
          pipelines, with Flux, SD, ControlNet, and video models (Veo, Kling,
          Seedance) handling generation and ChatGPT assisting on art direction
          and prompt strategy.
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

        {/* ── Video Section ─────────────────────────────────── */}
        <section className="mb-14">
          <div className="flex items-baseline gap-3 mb-1">
            <h2 className="text-lg font-semibold">Video</h2>
            <span className="text-xs text-gray-500 font-light">
              hover to play — {videos.length} clips
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-5 max-w-2xl">
            Generated and composited video assets — social formats, product
            shots, and experimental runs. Latest work surfaces first.
          </p>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-3">
            {videos.map((v) => (
              <HoverVideo key={v.filename} src={v.src} filename={v.filename} />
            ))}
          </div>
        </section>

        {/* ── Images Section ────────────────────────────────── */}
        <section className="mb-8">
          <div className="flex items-baseline gap-3 mb-1">
            <h2 className="text-lg font-semibold">Images</h2>
            <span className="text-xs text-gray-500 font-light">
              click to expand — {staticAssets.length} assets
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-5 max-w-2xl">
            Stills, retouched renders, and upscaled outputs — product
            photography, lifestyle imagery, and generative explorations.
          </p>

          <div className="columns-2 sm:columns-3 md:columns-4 gap-2">
            {staticAssets.map((img) => (
              <LightboxImage
                key={img.filename}
                src={img.src}
                alt={toLabel(img.filename)}
              />
            ))}
          </div>
        </section>
      </div>
    </PasswordGate>
  );
}
