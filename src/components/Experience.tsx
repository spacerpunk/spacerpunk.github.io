import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { EXPERIENCES } from './index';

const EXPERIENCES_ES = [
  {
    year: '2023 - Presente',
    role: 'Senior Creative Technologist',
    company: 'Monks',
    description: `Creación de pipelines para los equipos de Diseño, Edición y VFX que incluyen herramientas de IA generativa, Modelos Fine-Tuneados personalizados (LLMs e Imagen Gen) y Scripts. También creación de Apps y Herramientas de Generación de Imágenes con Flux y Stable Diffusion, trabajando entre el equipo de Backend y el Cliente.`,
    technologies: ['Python', 'AI', 'ExtendScript', 'Typescript', 'AfterEffects', 'ComfyUI', 'Blender'],
  },
  {
    year: '2021 - 2023',
    role: 'Senior Video Editor',
    company: 'Monks',
    description: `VFX Artist y Video Editor para marcas como General Motors, Buick, Amazon, Google, SCJ, Cadillac y muchas más. Edición, Compositing y trabajo completo de VFX (Animación, Iluminación, Renderizado) con Unreal Engine y Blender.`,
    technologies: ['Premiere Pro', 'C4D', 'After Effects', 'ExtendScript', 'Python'],
  },
  {
    year: '2017 - 2020',
    role: 'VFX Artist & 3D Generalist',
    company: 'Tungsteno Films',
    description: `Video Editor y VFX Artist en cortometrajes indie y publicidad para clientes como Dove, Eco de los Andes, Visa, Santander, Macsha y más. Creación de pipelines en Unreal Engine, Davinci y Blender, así como scripts simples.`,
    technologies: ['Blender', 'Unreal Engine', 'Davinci Resolve', 'After Effects'],
  },
  {
    year: '2015 - 2020',
    role: 'Director de Audio',
    company: 'Tungsteno Films',
    description: `Post producción de audio principal para una productora indie, desde grabación en sitio de diálogos y sonidos hasta mezcla final y edición. Trabajo en muchos spots publicitarios y cortometrajes tanto como compositor y diseñador de sonido, así como mezclador y editor.`,
    technologies: ['Ableton', 'Cubase', 'Edición de Diálogos', 'Davinci Resolve'],
  },
  {
    year: '2011 - Presente',
    role: 'Compositor Musical',
    company: 'Spacerpunk',
    description: `Producción musical y composición para diversas marcas y proyectos. Publicidad, implementación de audio para videojuegos, cine, contenido para redes sociales. Trabajando con herramientas estándar de la industria como Pro Tools, Cubase y Nuendo.`,
    technologies: ['Ableton', 'Cubase', 'MaxMSP', 'Unreal Engine', 'Unity'],
  },
];

const Experience = () => {
  const { lang } = useLanguage();
  const data = lang === 'es' ? EXPERIENCES_ES : EXPERIENCES;

  return (
    <div className="pb-12 md:pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 md:my-20 text-center text-3xl md:text-4xl font-semibold"
      >
        {lang === 'es' ? 'Experiencia' : 'Experience'}
      </motion.h2>
      <div className="space-y-8 md:space-y-12">
        {data.map((experience, index) => (
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
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
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
