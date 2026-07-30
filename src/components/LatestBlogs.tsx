// src/components/LatestBlogs.tsx
// -----------------------------------------------------------------------------
// Home-page "Latest Writing" strip. Reads the newest posts from the blog
// registry so it stays in sync automatically.
// -----------------------------------------------------------------------------
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { getLatestPosts, formatDate } from '../pages/blogs/posts';
import { SectionHeader, HomeCard, HomeGrid, item } from './HomeCard';

export default function LatestBlogs() {
  const { lang } = useLanguage();
  const es = lang === 'es';
  const posts = getLatestPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="py-4 md:py-5">
      <SectionHeader
        kicker={es ? 'Notas & ensayos' : 'Notes & essays'}
        title={es ? 'Últimos Escritos' : 'Latest Writing'}
        to="/blogs"
        viewAllLabel={es ? 'Ver todo' : 'View all'}
      />
      <HomeGrid>
        {posts.map((post) => (
          <motion.div key={post.slug} variants={item}>
            <HomeCard
              to={`/blogs/${post.slug}`}
              cover={post.cover}
              coverAlt={post.coverAlt}
              badge={post.category}
              meta={formatDate(post.date, lang)}
              title={post.title}
              description={post.excerpt}
              cta={es ? 'Leer' : 'Read'}
            />
          </motion.div>
        ))}
      </HomeGrid>
    </section>
  );
}
