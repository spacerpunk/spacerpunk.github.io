import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// Preview thumbnails
import DovePreview from '../assets/Dove/Dove_Thumb.png';
import AgenticPreview from '../assets/Monks/GoogleAgent/UI Gif_q90_fps15_1350x1080.gif';
import ToyotaPreview from '../assets/Team23/Toyota/Toyota_Storyboard (1).jpg';
import NasaHondaPreview from '../assets/nasaxhonda/Film Style/4iptUKiGH4sHBJyWRsKju_75mzo24g.png';

const projects = [
  {
    title: 'Dove: Real Virtual Beauty',
    path: '/work/dove',
    preview: DovePreview,
    description: {
      en: 'Real women inside video games — rigging, animation & Unreal Engine',
      es: 'Mujeres reales dentro de videojuegos — rigging, animación y Unreal Engine',
    },
  },
  {
    title: 'Agentic @Monks',
    path: '/work/agenticmonks',
    preview: AgenticPreview,
    description: {
      en: 'Always-on-brand AI renders populating After Effects templates',
      es: 'Renders de IA always-on-brand que pueblan templates de After Effects',
    },
  },
  {
    title: 'Toyota @Team23',
    path: '/work/toyotateam23',
    preview: ToyotaPreview,
    description: {
      en: 'AI storyboards and composited video for a Toyota concept film',
      es: 'Storyboards con IA y video compuesto para un film conceptual de Toyota',
    },
  },
  {
    title: 'NASAXHONDA',
    path: '/projects/nasaxhonda',
    preview: NasaHondaPreview,
    description: {
      en: 'A retrofuturist concept film — a NASA-engineered Honda for any terrain',
      es: 'Un film conceptual retrofuturista — una Honda diseñada por NASA para cualquier terreno',
    },
  },
];

export default function LatestProjects() {
  const { lang } = useLanguage();

  return (
    <section className="py-4 md:py-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-3">
        {lang === 'es' ? 'ÚLTIMOS PROYECTOS' : 'LATEST PROJECTS'}
      </h2>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li key={project.path}>
            <Link
              to={project.path}
              className="group flex items-center gap-3"
            >
              <img
                src={project.preview}
                alt={project.title}
                loading="lazy"
                className="h-10 w-14 flex-shrink-0 rounded object-cover"
              />
              <span className="min-w-0">
                <span className="text-nasared group-hover:underline">
                  {project.title}
                </span>
                <span className="text-gray-500 text-sm font-light">
                  {' '}
                  — {project.description[lang]}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
