// src/pages/blogs/BlogPost.tsx
// -----------------------------------------------------------------------------
// Resolves /blogs/:slug -> the right post body, wrapped in the shared layout.
// If the slug is unknown it shows a small "not found" state.
// -----------------------------------------------------------------------------
import { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../../components/SEO';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogLayout from './components/BlogLayout';
import { getPost, postBodies } from './posts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const es = lang === 'es';

  const meta = getPost(slug);
  const Body = slug ? postBodies[slug] : undefined;

  if (!meta || !Body) {
    return (
      <div className="p-8 max-w-xl">
        <SEO title="Not found" />
        <p className="text-nasared text-xs font-mono tracking-widest uppercase mb-3">
          404
        </p>
        <h1 className="text-3xl font-bold text-white mb-4">
          {es ? 'Nota no encontrada' : 'Post not found'}
        </h1>
        <p className="text-gray-400 mb-6">
          {es
            ? 'Esta publicación no existe o fue movida.'
            : "That post doesn't exist or has moved."}
        </p>
        <Link to="/blogs" className="text-nasared hover:underline">
          {es ? '← Volver a las notas' : '← Back to all writing'}
        </Link>
      </div>
    );
  }

  return (
    <BlogLayout meta={meta}>
      <Suspense fallback={<LoadingSpinner />}>
        <Body />
      </Suspense>
    </BlogLayout>
  );
}
