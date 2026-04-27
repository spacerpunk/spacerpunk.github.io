import { EXPERIENCES } from './index';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="pb-12 md:pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 md:my-20 text-center text-3xl md:text-4xl font-semibold"
      >
        Experience
      </motion.h2>
      <div className="space-y-8 md:space-y-12">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:justify-center gap-4 lg:gap-8 pb-8 border-b border-gray-800 last:border-0"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm font-semibold text-nasared">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-lg md:text-xl font-semibold">
                {experience.role}
              </h6>
              <p className="mb-2 text-sm text-nasared font-medium">
                {experience.company}
              </p>
              <p className="mb-4 text-sm md:text-base text-neutral-400 leading-relaxed">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-nasared px-3 py-1 text-xs md:text-sm font-medium text-white rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
