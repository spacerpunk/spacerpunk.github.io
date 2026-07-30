// src/components/content/Prose.tsx
// -----------------------------------------------------------------------------
// Reusable article/content building blocks shared across the site (blog posts,
// POLVO LAB project pages, …). Compose these to keep long-form content visually
// consistent. Import what you need:
//
//   import { Lead, H2, P, Figure, Gallery, VideoEmbed, Quote, Callout, Divider }
//     from '../../../components/content/Prose';
// -----------------------------------------------------------------------------
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import LazyImage from '../LazyImage';

/* -------------------------------------------------------------------------- */
/* Text                                                                       */
/* -------------------------------------------------------------------------- */

/** Opening paragraph — larger, lighter, sets the tone of the piece. */
export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
      {children}
    </p>
  );
}

/** Section heading inside an article. */
export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4 scroll-mt-24">
      {children}
    </h2>
  );
}

/** Sub-heading. */
export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg md:text-xl font-semibold text-white mt-8 mb-3">
      {children}
    </h3>
  );
}

/** Standard body paragraph. */
export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-gray-400 leading-relaxed text-base mb-6 max-w-2xl">
      {children}
    </p>
  );
}

/** Inline emphasis in nasared. Use for key terms: <Term>zero-point field</Term>. */
export function Term({ children }: { children: ReactNode }) {
  return <span className="text-nasared font-medium">{children}</span>;
}

/** Bulleted or numbered list. */
export function List({
  items,
  ordered = false,
}: {
  items: ReactNode[];
  ordered?: boolean;
}) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag
      className={`${
        ordered ? 'list-decimal' : 'list-disc'
      } list-outside ml-6 space-y-2 mb-6 text-gray-400 max-w-2xl marker:text-nasared`}
    >
      {items.map((it, i) => (
        <li key={i} className="leading-relaxed pl-1">
          {it}
        </li>
      ))}
    </Tag>
  );
}

/* -------------------------------------------------------------------------- */
/* Emphasis blocks                                                            */
/* -------------------------------------------------------------------------- */

/** Pull quote. */
export function Quote({
  children,
  cite,
}: {
  children: ReactNode;
  cite?: string;
}) {
  return (
    <blockquote className="border-l-2 border-nasared pl-6 my-10 max-w-2xl">
      <p className="text-xl md:text-2xl text-white font-light italic leading-snug">
        {children}
      </p>
      {cite && (
        <footer className="mt-3 text-xs font-mono tracking-widest uppercase text-gray-500">
          — {cite}
        </footer>
      )}
    </blockquote>
  );
}

/** Boxed aside / note. */
export function Callout({
  label = 'Note',
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <aside className="border border-gray-800 bg-nasared/5 p-5 my-8 max-w-2xl">
      <p className="text-nasared text-[11px] font-mono tracking-widest uppercase mb-2">
        {label}
      </p>
      <div className="text-gray-300 text-sm leading-relaxed">{children}</div>
    </aside>
  );
}

/** Thin section divider. */
export function Divider() {
  return <hr className="border-0 h-px bg-gray-800 my-12" />;
}

/* -------------------------------------------------------------------------- */
/* Media                                                                      */
/* -------------------------------------------------------------------------- */

/** Single image with optional caption. `wide` breaks out past the text column. */
export function Figure({
  src,
  alt,
  caption,
  wide = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={`my-10 ${wide ? 'w-full' : 'max-w-2xl'}`}
    >
      <div className="overflow-hidden rounded-sm border border-gray-800">
        <LazyImage src={src} alt={alt} className="w-full h-auto" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs font-mono text-gray-500 tracking-wide">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

interface GalleryItem {
  src: string;
  alt: string;
}

/** Masonry-style image grid. `cols` controls density on large screens. */
export function Gallery({
  items,
  cols = 3,
}: {
  items: GalleryItem[];
  cols?: 2 | 3 | 4;
}) {
  const colClass =
    cols === 2
      ? 'columns-1 sm:columns-2'
      : cols === 4
        ? 'columns-2 md:columns-3 lg:columns-4'
        : 'columns-2 md:columns-3';
  return (
    <div className={`${colClass} gap-3 space-y-3 my-10`}>
      {items.map((img, i) => (
        <div
          key={i}
          className="break-inside-avoid overflow-hidden rounded-sm border border-gray-800"
        >
          <LazyImage src={img.src} alt={img.alt} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}

/**
 * Responsive 16:9 video slot.
 *  - Pass `youtubeId` to embed a YouTube video.
 *  - Pass `src` to play a local/hosted MP4.
 *  - Pass neither to render a styled placeholder slot (handy while drafting).
 */
export function VideoEmbed({
  youtubeId,
  src,
  title = 'Video',
  caption,
}: {
  youtubeId?: string;
  src?: string;
  title?: string;
  caption?: string;
}) {
  return (
    <figure className="my-10 max-w-3xl">
      <div className="relative w-full overflow-hidden rounded-sm border border-gray-800 bg-black aspect-video">
        {youtubeId ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : src ? (
          <video
            src={src}
            controls
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-nasared">
              <svg
                className="h-7 w-7 translate-x-0.5 text-nasared"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-xs font-mono tracking-widest uppercase text-gray-500">
              Video slot — add a <span className="text-nasared">youtubeId</span>{' '}
              or <span className="text-nasared">src</span>
            </p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs font-mono text-gray-500 tracking-wide">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
