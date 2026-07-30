// src/pages/polvolab/components/PolvoLayout.tsx
// -----------------------------------------------------------------------------
// The shell every POLVO LAB project detail page renders inside. Handles SEO,
// the back link, the header, the hero (interactive 3D piece when the project
// declares a `model`, otherwise the cover image) and the prev/next footer.
// -----------------------------------------------------------------------------
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import SEO from '../../../components/SEO';
import LazyImage from '../../../components/LazyImage';
import Model3DViewer from '../../../components/Model3DViewer';
import { useLanguage } from '../../../contexts/LanguageContext';
import { PolvoProject, getAdjacentPolvoProjects } from '../projects';

export default function PolvoLayout({
  project,
  children,
}: {
  project: PolvoProject;
  children: ReactNode;
}) {
  const { lang } = useLanguage();
  const es = lang === 'es';
  const { prev, next } = getAdjacentPolvoProjects(project.slug);

  return (
    <article className="w-full p-4 md:p-6 lg:p-8">
      <SEO
        title={`${project.title} — POLVO LAB`}
        description={project.excerpt}
        image={project.cover}
        url={`/polvolab/${project.slug}`}
        type="article"
      />

      {/* Back link */}
      <Link
        to="/polvolab"
        className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-gray-500 hover:text-nasared transition-colors mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        POLVO LAB
      </Link>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono tracking-widest uppercase mb-4">
          <span className="text-white bg-nasared px-2 py-0.5">{project.status}</span>
          {project.year && <span className="text-gray-500">{project.year}</span>}
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-4">
          {project.title}
        </h1>

        {project.subtitle && (
          <p className="text-lg md:text-xl text-gray-500 font-light mb-6">
            {project.subtitle}
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 bg-nasared/10 text-nasared rounded border border-nasared/20 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.header>

      {/* Hero — interactive 3D piece or cover image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="my-10"
      >
        {project.model ? (
          <Model3DViewer
            variant={project.model}
            label={es ? '3D · vista previa' : '3D · preview'}
            poster={project.cover}
          />
        ) : (
          <div className="overflow-hidden rounded-sm border border-gray-800">
            <LazyImage
              src={project.cover}
              alt={project.coverAlt}
              className="w-full h-auto"
            />
          </div>
        )}
        {project.model && (
          <p className="mt-3 text-xs font-mono text-gray-500 tracking-wide">
            {es
              ? 'Pieza 3D de referencia — arrastrá para rotar. Reemplazable por un modelo glTF real.'
              : 'Reference 3D piece — drag to rotate. Swappable for a real glTF model.'}
          </p>
        )}
      </motion.div>

      {/* Body */}
      <div className="polvo-body">{children}</div>

      {/* Prev / next */}
      {(prev || next) && (
        <nav className="mt-16 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/polvolab/${prev.slug}`}
              className="group border border-gray-800 p-5 hover:border-nasared transition-colors"
            >
              <span className="flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-gray-500 mb-2">
                <ArrowLeftIcon className="w-3 h-3" />
                {es ? 'Anterior' : 'Previous'}
              </span>
              <span className="text-white font-semibold group-hover:text-nasared transition-colors">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={`/polvolab/${next.slug}`}
              className="group border border-gray-800 p-5 hover:border-nasared transition-colors md:text-right"
            >
              <span className="flex items-center gap-2 md:justify-end text-[11px] font-mono tracking-widest uppercase text-gray-500 mb-2">
                {es ? 'Siguiente' : 'Next'}
                <ArrowRightIcon className="w-3 h-3" />
              </span>
              <span className="text-white font-semibold group-hover:text-nasared transition-colors">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
