// src/components/LatestPolvoLab.tsx
// -----------------------------------------------------------------------------
// Home-page "POLVO LAB — Latest" strip. Reads the newest studio projects from
// the POLVO LAB registry. Cards link to the POLVO LAB page.
// -----------------------------------------------------------------------------
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { getLatestPolvoProjects } from '../pages/polvolab/projects';
import { SectionHeader, HomeCard, HomeGrid, item } from './HomeCard';

export default function LatestPolvoLab() {
  const { lang } = useLanguage();
  const es = lang === 'es';
  const projects = getLatestPolvoProjects(3);

  if (projects.length === 0) return null;

  return (
    <section className="py-4 md:py-5">
      <SectionHeader
        kicker={es ? 'Estudio · Moto & Producto' : 'Studio · Moto & Product'}
        title="POLVO LAB — Latest"
        to="/polvolab"
        viewAllLabel={es ? 'Ver todo' : 'View all'}
      />
      <HomeGrid>
        {projects.map((project) => (
          <motion.div key={project.slug} variants={item}>
            <HomeCard
              to={`/polvolab/${project.slug}`}
              cover={project.cover}
              coverAlt={project.coverAlt}
              badge={project.status}
              title={project.title}
              description={project.excerpt}
              cta={es ? 'Ver' : 'View'}
            />
          </motion.div>
        ))}
      </HomeGrid>
    </section>
  );
}
