import { motion } from 'framer-motion';
import { SectionHeader, HomeCard, HomeGrid, item } from './HomeCard';

// Import preview images
import DovePreview from '../assets/Dove/Dove_Thumb.png';
import AgenticPreview from '../assets/Monks/GoogleAgent/UI Gif_q90_fps15_1350x1080.gif';
import ToyotaPreview from '../assets/Team23/Toyota/Toyota_Storyboard (1).jpg';

interface Project {
  title: string;
  path: string;
  description: string;
  tags: string[];
  preview: string;
  isVideo?: boolean;
}

// Newest first — only the latest 3 show on the home page.
const latestProjects: Project[] = [
  {
    title: 'Dove: Real Virtual Beauty',
    path: '/work/dove',
    description: 'Real women inside video games — rigging, animation & Unreal Engine',
    tags: ['animation', 'characters'],
    preview: DovePreview,
  },
  {
    title: 'Agentic @Monks',
    path: '/work/agenticmonks',
    description: 'Always-on-brand AI renders populating After Effects templates dynamically',
    tags: ['agentic', 'AI'],
    preview: AgenticPreview,
  },
  {
    title: 'Toyota @Team23',
    path: '/work/toyotateam23',
    description: 'AI storyboards and composited video for a Toyota concept film',
    tags: ['automotive', 'AI'],
    preview: ToyotaPreview,
  },
];

export default function LatestProjects() {
  return (
    <section className="py-4 md:py-5">
      <SectionHeader
        kicker="Selected work"
        title="Latest Projects"
        to="/work/dove"
      />
      <HomeGrid>
        {latestProjects.slice(0, 3).map((project) => (
          <motion.div key={project.path} variants={item}>
            <HomeCard
              to={project.path}
              cover={project.preview}
              coverAlt={project.title}
              isVideo={project.isVideo}
              badge={project.tags[0]}
              title={project.title}
              description={project.description}
              cta="Explore"
            />
          </motion.div>
        ))}
      </HomeGrid>
    </section>
  );
}
