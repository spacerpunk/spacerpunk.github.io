// src/pages/polvolab/PolvoProject.tsx
// -----------------------------------------------------------------------------
// Resolves /polvolab/:slug -> the right project body, wrapped in PolvoLayout.
// Unknown slugs show a small "not found" state.
// -----------------------------------------------------------------------------
import { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../../components/SEO';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useLanguage } from '../../contexts/LanguageContext';
import PolvoLayout from './components/PolvoLayout';
import { getPolvoProject, projectBodies } from './projects';

export default function PolvoProject() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const es = lang === 'es';

  const project = getPolvoProject(slug);
  const Body = slug ? projectBodies[slug] : undefined;

  if (!project || !Body) {
    return (
      <div className="p-8 max-w-xl">
        <SEO title="Not found" />
        <p className="text-nasared text-xs font-mono tracking-widest uppercase mb-3">
          404
        </p>
        <h1 className="text-3xl font-bold text-white mb-4">
          {es ? 'Proyecto no encontrado' : 'Project not found'}
        </h1>
        <p className="text-gray-400 mb-6">
          {es
            ? 'Este proyecto no existe o fue movido.'
            : "That project doesn't exist or has moved."}
        </p>
        <Link to="/polvolab" className="text-nasared hover:underline">
          {es ? '← Volver a POLVO LAB' : '← Back to POLVO LAB'}
        </Link>
      </div>
    );
  }

  return (
    <PolvoLayout project={project}>
      <Suspense fallback={<LoadingSpinner />}>
        <Body />
      </Suspense>
    </PolvoLayout>
  );
}
