import React, { useId, useState } from "react";

/**
 * Reusable hover-reveal image card
 * - Darkens image + lowers opacity on hover/focus
 * - Shows a compact popup with creation details
 * - Accessible for keyboard + works on touch via tap-to-toggle
 */
export type HoverRevealCardProps = {
  src: string;
  alt: string;
  title?: string;
  details: string; // brief explanation of how it was created
  className?: string;
};

function classNames(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(" ");
}

export const HoverRevealCard: React.FC<HoverRevealCardProps> = ({
  src,
  alt,
  title,
  details,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false); // for touch devices
  const id = useId();

  return (
    <figure
      className={classNames(
        "group relative overflow-hidden rounded-2xl shadow-md transition",
        "focus-within:ring-2 focus-within:ring-indigo-500",
        className
      )}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Interactive layer for keyboard + touch */}
      <button
        type="button"
        aria-describedby={`${id}-bubble`}
        className={classNames(
          "block w-full text-left focus:outline-none",
          "[&>img]:transition [&>img]:duration-300"
        )}
        onClick={() => setIsOpen((v) => !v)}
      >
        {/* Image */}
        <img
          src={src}
          alt={alt}
          className={classNames(
            "w-full h-72 object-cover",
            // Dim + lower opacity on hover/focus or when bubble open
            "group-hover:opacity-80 group-focus-within:opacity-80",
            isOpen ? "opacity-80" : "opacity-100"
          )}
        />

        {/* Darken overlay */}
        <div
          aria-hidden
          className={classNames(
            "pointer-events-none absolute inset-0 bg-black/0 transition duration-300",
            "group-hover:bg-black/40 group-focus-within:bg-black/40",
            isOpen ? "bg-black/40" : "bg-black/0"
          )}
        />
      </button>

      {/* Optional caption/title at bottom-left */}
      {title && (
        <figcaption
          className={classNames(
            "absolute left-3 bottom-3 text-white/95",
            "drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] text-sm font-medium"
          )}
        >
          {title}
        </figcaption>
      )}

      {/* Small info popup (bubble) */}
      <div
        id={`${id}-bubble`}
        role="tooltip"
        className={classNames(
          "absolute right-3 top-3 max-w-xs rounded-xl bg-white/95 p-3 text-sm shadow-lg",
          "ring-1 ring-black/5 backdrop-blur",
          "opacity-0 translate-y-[-4px] pointer-events-none transition duration-200",
          "group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0",
          "group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0",
          isOpen && "opacity-100 pointer-events-auto translate-y-0"
        )}
      >
        <p className="leading-snug text-gray-900">{details}</p>
        {/* little arrow */}
        <span
          aria-hidden
          className="absolute -top-2 right-6 block h-0 w-0 border-x-8 border-b-8 border-x-transparent border-b-white/95"
        />
      </div>
    </figure>
  );
};

/**
 * Demo component
 * - Replace with your own data/images
 */
export default function PortfolioSectionDemo() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">Selected Work</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <HoverRevealCard
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2069&auto=format&fit=crop"
          alt="Abstract 3D render of colorful shapes"
          title="3D Abstract Study"
          details="Modeled in Blender, shader nodes for procedural textures, rendered with Cycles. Post-processed in After Effects for glow & grain."
        />

        <HoverRevealCard
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
          alt="Developer workspace with code on screen"
          title="Dev Portfolio"
          details="Built with Vite + React + TypeScript. Styled with Tailwind & shadcn/ui. Deployed on Vercel with CI preview deployments."
        />

        <HoverRevealCard
          src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=2070&auto=format&fit=crop"
          alt="Motorcycle in motion on dirt trail"
          title="Polvo. Livery"
          details="Custom graphics kit designed in Figma, vectorized in Illustrator, and previewed with KeyShot compositing over HDRI."
        />
      </div>

      <div className="mt-10 rounded-xl bg-zinc-50 p-4 text-sm text-zinc-700">
        <p className="font-medium">How to use</p>
        <ol className="list-decimal pl-5">
          <li>
            Ensure Tailwind is configured in your Vite React TS setup. (Run
            <code className="mx-1 rounded bg-black/5 px-1">npm i -D tailwindcss postcss autoprefixer</code>
            and init if needed.)
          </li>
          <li>
            Import <code className="mx-1 rounded bg-black/5 px-1">HoverRevealCard</code> and pass <code>src</code>, <code>alt</code>, <code>details</code>, and optional <code>title</code>.
          </li>
          <li>
            Hover with mouse, focus via keyboard (Tab), or tap on mobile to toggle the info bubble.
          </li>
        </ol>
      </div>
    </div>
  );
}
