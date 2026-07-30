// src/pages/blogs/components/BlogLayout.tsx
// -----------------------------------------------------------------------------
// The article shell every post is rendered inside. Handles SEO, the back link,
// the header (category / title / date / reading time / tags), the cover image
// and the prev/next footer. Post body files only provide the content — this
// wraps it. You normally never edit this file when writing a new post.
// -----------------------------------------------------------------------------
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import SEO from '../../../components/SEO';
import LazyImage from '../../../components/LazyImage';
import { useLanguage } from '../../../contexts/LanguageContext';
import { PostMeta, getAdjacentPosts, formatDate } from '../posts';

export default function BlogLayout({
  meta,
  children,
}: {
  meta: PostMeta;
  children: ReactNode;
}) {
  const { lang } = useLanguage();
  const es = lang === 'es';
  const { prev, next } = getAdjacentPosts(meta.slug);

  return (
    <article className="w-full p-4 md:p-6 lg:p-8">
      <SEO
        title={meta.title}
        description={meta.excerpt}
        image={meta.cover}
        url={`/blogs/${meta.slug}`}
        type="article"
      />

      {/* Back link */}
      <Link
        to="/blogs"
        className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-gray-500 hover:text-nasared transition-colors mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        {es ? 'Todas las notas' : 'All writing'}
      </Link>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono tracking-widest uppercase mb-4">
          <span className="text-nasared">{meta.category}</span>
          <span className="text-gray-700">·</span>
          <span className="text-gray-500">{formatDate(meta.date, lang)}</span>
          <span className="text-gray-700">·</span>
          <span className="text-gray-500">
            {meta.readingTime} {es ? 'de lectura' : 'read'}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-4">
          {meta.title}
        </h1>

        {meta.subtitle && (
          <p className="text-lg md:text-xl text-gray-500 font-light mb-6">
            {meta.subtitle}
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 bg-nasared/10 text-nasared rounded border border-nasared/20 font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.header>

      {/* Cover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="my-10 overflow-hidden rounded-sm border border-gray-800"
      >
        <LazyImage
          src={meta.cover}
          alt={meta.coverAlt}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Body */}
      <div className="blog-body">{children}</div>

      {/* Prev / next */}
      {(prev || next) && (
        <nav className="mt-16 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/blogs/${prev.slug}`}
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
              to={`/blogs/${next.slug}`}
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
