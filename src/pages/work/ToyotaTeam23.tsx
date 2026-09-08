import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

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
  const es = useLanguage().lang === 'es';
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
        {es
          ? 'Storyboards y piezas visuales generados con IA para un cortometraje conceptual publicitario de Toyota — construidos a partir de referencias de imagen y modelos 3D, con dirección de arte de Team23 para mantener el auto fiel al píxel con las referencias reales, y después extendidos a video generado con IA y compositado.'
          : 'AI-generated storyboards and visual assets for a concept short film advertising Toyota — built from image references and 3D models, art directed by Team23 to keep the car pixel-accurate to real references, then extended into AI-generated and composited video.'}
      </p>
      <p className="text-sm font-light text-gray-400 mb-6 max-w-3xl">
        {es
          ? 'El pipeline combinó ComfyUI, Weave y Fal.ai corriendo modelos como Flux 2, NanoBanana2, Seedream y ChatGPT Image 2. Cada frame se iteró contra el material de referencia para igualar exactamente la geometría, el color y la iluminación del vehículo.'
          : 'The pipeline combined ComfyUI, Weave, and Fal.ai running models including Flux 2, NanoBanana2, Seedream, and ChatGPT Image 2. Each frame was iterated against reference materials to match exact vehicle geometry, colour, and lighting.'}
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

      {/* Film — main feature */}
      <section className="mb-10">
        <p className="text-xs font-mono text-nasared tracking-widest uppercase mb-3">
          {es ? 'Cortometraje Conceptual' : 'Concept Short Film'}
        </p>
        <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-gray-800 bg-black">
          <iframe
            src="https://www.youtube.com/embed/31N6t_bTIJI?start=11"
            title="Toyota @ Team23 — Concept Short Film"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <p className="text-xs text-gray-600 mt-2 font-mono">
          <a
            href="https://www.youtube.com/watch?v=31N6t_bTIJI&t=11s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nasared hover:underline"
          >
            {es ? 'Ver en YouTube →' : 'Watch on YouTube →'}
          </a>
        </p>

        {/* Credits disclaimer */}
        <div className="mt-6 border border-dashed border-gray-800 p-5 max-w-3xl">
          <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-2">
            {es ? 'Mi rol' : 'My role'}
          </p>
          {es ? (
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Trabajé en las <span className="text-white">imágenes y storyboards generados con IA</span>,
              y más tarde en la <span className="text-white">generación con IA y el compositing de los elementos de video</span> usados en este film.
            </p>
          ) : (
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              I worked on the <span className="text-white">AI-generated images and storyboards</span>,
              and later the <span className="text-white">AI generation and compositing of video</span> elements
              used in this film.
            </p>
          )}
          <p className="text-sm text-gray-500 font-light leading-relaxed mt-3">
            {es ? 'La edición, el diseño de sonido, la música y el armado final estuvieron a cargo de ' : 'Edit, sound design, music, and final assembly were handled by '}
            <a
              href="https://www.team23.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nasared hover:underline"
            >
              Team23
            </a>
            .
          </p>
        </div>
      </section>

      {/* Section: Storyboard */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-1">{es ? 'Frames del Storyboard' : 'Storyboard Frames'}</h2>
        <p className="text-sm text-gray-400 mb-4">
          {es
            ? `${storyboardFrames.length} frames generados — hacé clic en cualquier imagen para ampliar.`
            : `${storyboardFrames.length} frames generated — click any image to expand.`}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {storyboardFrames.map((frame, i) => (
            <LightboxImage key={i} src={frame.src} alt={`Storyboard frame ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Section: References */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-1">{es ? 'Referencias' : 'References'}</h2>
        <p className="text-sm text-gray-400 mb-4">
          {es
            ? 'Referencias del vehículo y visuales usadas para dirigir el arte de la generación con IA hacia la fidelidad de producto.'
            : 'Vehicle and visual references used to art-direct the AI generation towards product accuracy.'}
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
