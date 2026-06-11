import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// ─── Single broad glob, then group by subfolder ───────────────────────────
const allModules = import.meta.glob(
  '../../assets/AI/**/*.{png,jpg,jpeg,gif,webp}',
  { eager: true },
);

// Extract subfolder name from path: .../assets/AI/<FOLDER>/file.ext
function groupByFolder(modules: Record<string, unknown>) {
  const groups: Record<string, { src: string; filename: string }[]> = {};
  for (const [path, mod] of Object.entries(modules)) {
    const match = path.match(/\/assets\/AI\/([^/]+)\/[^/]+$/);
    if (!match) continue;
    const folder = match[1];
    if (!groups[folder]) groups[folder] = [];
    groups[folder].push({
      src: (mod as { default: string }).default,
      filename: path.split('/').pop() ?? '',
    });
  }
  // Sort files within each folder numerically
  for (const folder of Object.keys(groups)) {
    groups[folder].sort((a, b) =>
      a.filename.localeCompare(b.filename, undefined, { numeric: true }),
    );
  }
  return groups;
}

const ASSET_GROUPS = groupByFolder(allModules);

function getAssets(folder: string) {
  return ASSET_GROUPS[folder] ?? [];
}

// ─── Project definitions ───────────────────────────────────────────────────
interface Project {
  id: string;
  client: string;
  year: string;
  type: string;
  description: string;
  tags: string[];
  assets: { src: string; filename: string }[];
  link?: string;
  isExternal?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 'bmw',
    client: 'BMW',
    year: '2024',
    type: 'Client · @Monks',
    description: 'AI-generated product imagery and lifestyle retouching for BMW. Combining controlled generation with brand-accurate references to produce campaign-ready assets.',
    tags: ['#product', '#automotive', '#flux', '#comfyUI', '#retouching'],
    assets: getAssets('BMW_Monks'),
  },
  {
    id: 'honda',
    client: 'NASAXHONDA',
    year: '2026',
    type: 'Personal · Concept',
    description: 'AI concept visualization for the Honda XR-LRV — a NASA-engineered lunar rover bike. Art-directed through generative pipelines from spec to hero renders.',
    tags: ['#concept', '#automotive', '#generativeAI', '#worldbuilding'],
    assets: getAssets('Honda_Exploration'),
    link: '/projects/nasaxhonda',
  },
  {
    id: 'superside',
    client: 'Superside',
    year: '2026',
    type: 'Client · Campaign',
    description: 'Moodboard-to-delivery AI pipeline for a global campaign. Produced multi-direction style frames and final multi-format deliverables using Flux 2 Pro and ChatGPT Agentic.',
    tags: ['#campaign', '#moodboards', '#flux2pro', '#chatGPT', '#agentic'],
    assets: getAssets('Superside_Creative_Exploration_2026'),
    link: '/work/superside',
  },
  {
    id: 'vivo',
    client: 'Vivo',
    year: '2024',
    type: 'Client · @Monks',
    description: 'AI lifestyle photography pipeline for Vivo phones. Generated on-model product scenarios at scale, matched to brand colour and style guides.',
    tags: ['#product', '#lifestyle', '#flux', '#generativeAI', '#social'],
    assets: getAssets('Vivo_Monks'),
  },
  {
    id: 'leatt',
    client: 'Leatt',
    year: '2025',
    type: 'Client · Social Content',
    description: 'AI-generated and animated social assets for Leatt sports gear. Background generation with Flux + Qwen product integration, plus animated GIF loops for social delivery.',
    tags: ['#sports', '#social', '#animation', '#flux', '#qwen', '#video'],
    assets: getAssets('Leatt_Socials'),
  },
  {
    id: 'fox',
    client: 'Fox',
    year: '2025',
    type: 'Client · Social Content',
    description: "AI creative exploration for Fox Racing social media. Generative imagery matched to the brand's raw, action-sports identity.",
    tags: ['#sports', '#social', '#generativeAI', '#motocross'],
    assets: getAssets('Fox_Socials'),
  },
  {
    id: 'noise',
    client: 'The Noise',
    year: '2025',
    type: 'Personal · Short Film',
    description: 'AI storyboard and visual development for The Noise — a personal short film project. Frames generated with Flux and Veo3, used to lock look, composition and motion language before production.',
    tags: ['#storyboard', '#film', '#flux', '#veo3', '#comfyUI'],
    assets: getAssets('TheNoise_Storyboards'),
    link: '/projects/thenoise',
  },
  {
    id: 'weyland',
    client: 'Weyland',
    year: '2026',
    type: 'Personal · Exploration',
    description: 'Sci-fi world building and brand exploration. Generative imagery and animated sequences building out the visual language of a fictional universe.',
    tags: ['#scifi', '#worldbuilding', '#wan', '#exploration', '#animation'],
    assets: getAssets('Weyland_Exploration'),
  },
  {
    id: 'lora',
    client: 'LoRa Training',
    year: '2024',
    type: 'R&D · Experiments',
    description: 'Custom LoRa fine-tuning experiments with Flux. Training subject-consistent and style-locked models for repeatable character and product generation.',
    tags: ['#lora', '#flux', '#training', '#finetuning', '#R&D'],
    assets: getAssets('LoRa_Flux_Training'),
  },
  {
    id: 'more',
    client: 'More Experiments',
    year: '2024',
    type: 'R&D · Misc',
    description: 'Assorted experiments in generative image, video and motion — ComfyUI workflows, animated loops, product concepts and visual tests.',
    tags: ['#experiments', '#comfyUI', '#flux', '#misc'],
    assets: getAssets('More'),
  },
];

// ─── Media item: auto-detects GIF to render as <img>, rest as <img> ─────────
function MediaItem({ src, filename }: { src: string; filename: string }) {
  const [hovered, setHovered] = useState(false);
  const [wide, setWide] = useState(false);

  return (
    <div
      className={`relative overflow-hidden group cursor-zoom-in bg-gray-950 ${wide ? 'col-span-2' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={filename}
        loading="lazy"
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        onLoad={(e) => {
          const img = e.currentTarget;
          setWide(img.naturalWidth / img.naturalHeight > 1.6);
        }}
      />
      <div className={`absolute inset-0 bg-black/60 flex items-end p-3 transition-opacity duration-200 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-white text-xs font-mono truncate">{filename.replace(/\.[^/.]+$/, '')}</p>
      </div>
    </div>
  );
}

// ─── Single project block ──────────────────────────────────────────────────
function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="border-t border-gray-800"
    >
      {/* Project header — clickable to expand/collapse */}
      <button
        className="w-full text-left py-6 flex items-start justify-between gap-6 group"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-3 mb-2">
            <span className="text-xs font-mono text-gray-600 shrink-0">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="text-2xl font-bold text-white group-hover:text-nasared transition-colors duration-200 leading-none">
              {project.client}
            </h2>
            <span className="text-xs font-mono text-gray-600">{project.year}</span>
            <span className="text-xs font-mono text-gray-700 border border-gray-800 px-2 py-0.5">
              {project.type}
            </span>
          </div>
          <p className="text-gray-500 text-sm font-light max-w-2xl leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((t) => (
              <span key={t} className="text-xs font-mono text-gray-700">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0 mt-1">
          {project.link && (
            <Link
              to={project.link}
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-mono text-nasared hover:underline hidden sm:block"
            >
              View project →
            </Link>
          )}
          <span className={`text-gray-600 group-hover:text-nasared transition-all duration-200 ${expanded ? 'rotate-45' : ''}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </div>
      </button>

      {/* Grid */}
      {expanded && (
        <div className="pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5 auto-rows-auto">
            {project.assets.map((a) => (
              <MediaItem key={a.src} src={a.src} filename={a.filename} />
            ))}
          </div>
          {project.link && (
            <div className="mt-4">
              <Link
                to={project.link}
                className="text-xs font-mono text-nasared hover:underline"
              >
                View full project →
              </Link>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function Generative() {
  return (
    <div className="p-4 lg:p-8 min-h-screen">
      {/* Header */}
      <div className="mb-10">
        <p className="text-nasared text-xs font-mono tracking-widest uppercase mb-3">
          AI Creative Sprint ·{' '}
          <Link to="/services" className="hover:underline">See service pack →</Link>
        </p>
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-4">
          AI CREATIVE
        </h1>
        <p className="text-gray-500 text-sm max-w-xl font-light">
          Generative image, video and motion work across clients and personal projects.
          Image generation, LoRa training, agentic pipelines and visual exploration.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-gray-800">
        {[
          { dot: 'bg-nasared', label: 'Client work' },
          { dot: 'bg-gray-500', label: 'Personal / R&D' },
        ].map((l) => (
          <span key={l.label} className="flex items-center gap-1.5 text-xs font-mono text-gray-600">
            <span className={`w-1.5 h-1.5 rounded-full ${l.dot}`} />
            {l.label}
          </span>
        ))}
        <span className="text-xs font-mono text-gray-700 ml-auto">
          ↓ Click to expand / collapse
        </span>
      </div>

      {/* Projects */}
      <div>
        {PROJECTS.map((project, i) => (
          <ProjectBlock key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="border border-dashed border-gray-800 mt-16 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold mb-1">Need AI Creative work?</p>
          <p className="text-gray-500 text-sm font-light">
            The AI Creative Sprint pack covers fast visual exploration, campaign concepts and prototype assets.
          </p>
        </div>
        <Link
          to="/services"
          className="text-xs font-mono font-bold tracking-widest uppercase px-5 py-3 bg-nasared text-white hover:bg-white hover:text-nasared transition-colors duration-200 shrink-0"
        >
          View Services →
        </Link>
      </div>
    </div>
  );
}
