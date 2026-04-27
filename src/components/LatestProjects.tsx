import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import LazyImage from './LazyImage';

// Import preview images
import YutaniPreview from '../assets/Yutani/TearsRain-Preview.mp4';
import TheNoisePreview from '../assets/Images/project2.png';
import NasaHondaPreview from '../assets/CT/Fox  (8).png';
import UploadPreview from '../assets/Images/project3.png';

interface Project {
  title: string;
  path: string;
  description: string;
  tags: string[];
  preview: string;
  isVideo?: boolean;
}

const latestProjects: Project[] = [
  {
    title: 'Yutani-Log',
    path: '/projects/yutanilog',
    description: 'Face animation experiments with Wan Animate',
    tags: ['animation', 'experimental'],
    preview: YutaniPreview,
    isVideo: true,
  },
  {
    title: 'The Noise',
    path: '/projects/thenoise',
    description: 'Horror series exploring liminal spaces and UFOs',
    tags: ['horror', 'AI'],
    preview: TheNoisePreview,
  },
  {
    title: 'NASAXHONDA',
    path: '/projects/nasaxhonda',
    description: 'What if Honda made a motorcycle for ExoPlanet exploration?',
    tags: ['nasa', 'space'],
    preview: NasaHondaPreview,
  },
  {
    title: 'UPLOAD',
    path: '/projects/upload',
    description: 'Upload yourself to stop living in poverty',
    tags: ['digital', 'virtual'],
    preview: UploadPreview,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function LatestProjects() {
  return (
    <section className="py-6 md:py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold">Latest Projects</h2>
        <Link
          to="/projects/thenoise"
          className="text-nasared hover:underline text-xs md:text-sm flex items-center gap-1"
        >
          View all
          <ArrowRightIcon className="w-3 h-3 md:w-4 md:h-4" />
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
      >
        {latestProjects.map((project) => (
          <motion.div key={project.path} variants={item}>
            <Link to={project.path} className="block group">
              <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-black hover:border-nasared transition-all duration-300 hover:shadow-lg hover:shadow-nasared/20">
                {/* Preview Image/Video */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                  {project.isVideo ? (
                    <video
                      src={project.preview}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <LazyImage
                      src={project.preview}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-3 md:p-4">
                  {/* Title */}
                  <h3 className="text-sm md:text-base font-semibold mb-1 group-hover:text-nasared transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-1.5 py-0.5 bg-nasared/10 text-nasared rounded border border-nasared/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex items-center text-nasared text-xs font-medium">
                    <span className="group-hover:translate-x-1 transition-transform">
                      Explore
                    </span>
                    <ArrowRightIcon className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
