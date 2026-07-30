// src/components/HomeCard.tsx
// -----------------------------------------------------------------------------
// Compact card + section header shared by the home-page "Latest ___" strips
// (Projects, Writing, POLVO LAB). Keeps all three visually consistent and small.
// -----------------------------------------------------------------------------
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import LazyImage from './LazyImage';

export const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
export const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

/** Section header: kicker + title on the left, optional "view all" on the right. */
export function SectionHeader({
  kicker,
  title,
  to,
  viewAllLabel,
}: {
  kicker: string;
  title: string;
  to?: string;
  viewAllLabel?: string;
}) {
  return (
    <div className="flex items-end justify-between mb-3">
      <div>
        <p className="text-nasared text-[10px] font-mono tracking-widest uppercase mb-0.5">
          {kicker}
        </p>
        <h2 className="text-lg md:text-xl font-bold leading-none">{title}</h2>
      </div>
      {to && (
        <Link
          to={to}
          className="text-nasared hover:underline text-xs flex items-center gap-1 shrink-0"
        >
          {viewAllLabel ?? 'View all'}
          <ArrowRightIcon className="w-3 h-3" />
        </Link>
      )}
    </div>
  );
}

export interface HomeCardProps {
  to: string;
  cover: string;
  coverAlt: string;
  isVideo?: boolean;
  /** Small uppercase label over the thumbnail (category / status). */
  badge?: string;
  /** Small mono meta line above the title (e.g. a date). */
  meta?: string;
  title: string;
  description?: string;
  /** Call-to-action label, e.g. 'Explore' / 'Read'. */
  cta: string;
}

/** A single compact card. Wrap a list of these in a motion grid. */
export function HomeCard({
  to,
  cover,
  coverAlt,
  isVideo = false,
  badge,
  meta,
  title,
  description,
  cta,
}: HomeCardProps) {
  return (
    <Link to={to} className="block group h-full">
      <article className="h-full flex flex-col overflow-hidden rounded-lg border border-gray-800 bg-black hover:border-nasared transition-all duration-300 hover:shadow-lg hover:shadow-nasared/20">
        <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
          {isVideo ? (
            <video
              src={cover}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              muted
              loop
              autoPlay
              playsInline
            />
          ) : (
            <LazyImage
              src={cover}
              alt={coverAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {badge && (
            <span className="absolute top-2 left-2 text-[9px] font-mono tracking-widest uppercase text-white bg-nasared px-1.5 py-0.5">
              {badge}
            </span>
          )}
        </div>

        <div className="flex flex-col flex-1 p-2.5 md:p-3">
          {meta && (
            <p className="text-[9px] font-mono tracking-widest uppercase text-gray-500 mb-1">
              {meta}
            </p>
          )}
          <h3 className="text-xs md:text-sm font-semibold leading-snug mb-1 group-hover:text-nasared transition-colors line-clamp-1">
            {title}
          </h3>
          {description && (
            <p className="text-[11px] text-gray-400 leading-snug line-clamp-2 mb-2 flex-1">
              {description}
            </p>
          )}
          <div className="flex items-center text-nasared text-[11px] font-medium">
            <span className="group-hover:translate-x-1 transition-transform">
              {cta}
            </span>
            <ArrowRightIcon className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}

/** Grid wrapper: exactly-3 layout, stacked on mobile, 3-up from sm. */
export function HomeGrid({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4"
    >
      {children}
    </motion.div>
  );
}
