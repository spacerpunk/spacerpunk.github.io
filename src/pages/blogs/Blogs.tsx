// src/pages/blogs/Blogs.tsx
// -----------------------------------------------------------------------------
// The blog index (/blogs). Lists every published post, newest first, with a
// simple category filter. All content comes from ./posts.ts.
// -----------------------------------------------------------------------------
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import SEO from '../../components/SEO';
import LazyImage from '../../components/LazyImage';
import { useLanguage } from '../../contexts/LanguageContext';
import { getPosts, formatDate, Category } from './posts';

const t = {
  en: {
    kicker: 'Field notes & essays',
    title: 'Writing',
    intro:
      'Notes and essays on the things I keep circling back to — ancient lost technology, zero point energy, and the space between what we can build and what we once could.',
    all: 'All',
    read: 'read',
    empty: 'Nothing published yet. Check back soon.',
  },
  es: {
    kicker: 'Notas y ensayos',
    title: 'Escritos',
    intro:
      'Notas y ensayos sobre las cosas a las que siempre vuelvo — tecnología antigua perdida, energía de punto cero, y el espacio entre lo que podemos construir y lo que alguna vez pudimos.',
    all: 'Todo',
    read: 'de lectura',
    empty: 'Todavía no hay publicaciones. Volvé pronto.',
  },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Blogs() {
  const { lang } = useLanguage();
  const tx = t[lang];
  const posts = getPosts();

  const categories = useMemo(
    () => Array.from(new Set(posts.map((p) => p.category))) as Category[],
    [posts],
  );
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const visible =
    filter === 'all' ? posts : posts.filter((p) => p.category === filter);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <SEO
        title="Writing"
        description="Notes and essays by Nico Requena on ancient lost technology, zero point energy, and creative technology."
        url="/blogs"
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 max-w-2xl"
      >
        <p className="text-nasared text-xs font-mono tracking-widest uppercase mb-3">
          {tx.kicker}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
          {tx.title}
        </h1>
        <p className="text-gray-400 font-light leading-relaxed">{tx.intro}</p>
      </motion.header>

      {/* Category filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <FilterChip
            active={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            {tx.all}
          </FilterChip>
          {categories.map((c) => (
            <FilterChip
              key={c}
              active={filter === c}
              onClick={() => setFilter(c)}
            >
              {c}
            </FilterChip>
          ))}
        </div>
      )}

      {/* Grid */}
      {visible.length === 0 ? (
        <p className="text-gray-500 font-mono text-sm">{tx.empty}</p>
      ) : (
        <motion.div
          key={filter}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {visible.map((post) => (
            <motion.div key={post.slug} variants={item}>
              <Link to={`/blogs/${post.slug}`} className="block group h-full">
                <article className="h-full flex flex-col border border-gray-800 bg-black hover:border-nasared transition-all duration-300 hover:shadow-lg hover:shadow-nasared/10">
                  <div className="relative aspect-video overflow-hidden bg-gray-900">
                    <LazyImage
                      src={post.cover}
                      alt={post.coverAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase text-white bg-nasared px-2 py-1">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-gray-500 mb-3">
                      <span>{formatDate(post.date, lang)}</span>
                      <span className="text-gray-700">·</span>
                      <span>
                        {post.readingTime} {tx.read}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-nasared transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1 text-nasared text-xs font-medium">
                      {lang === 'es' ? 'Leer' : 'Read'}
                      <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-mono tracking-widest uppercase px-3 py-1.5 border transition-colors ${
        active
          ? 'bg-nasared text-white border-nasared'
          : 'text-gray-400 border-gray-800 hover:border-nasared hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}
