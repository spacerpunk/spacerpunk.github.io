import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import PasswordGate from '../../components/PasswordGate';
import { useLanguage } from '../../contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
  }),
};

const t = {
  en: {
    seoTitle: 'POLVO LAB — Motorcycle Adventure & Product Design',
    seoDesc: 'POLVO LAB is a motorcycle adventure design and product design brand built by Nico Requena.',
    brandStudio: 'Brand Studio',
    tagline: 'Where dust meets design. A studio at the intersection of motorcycle adventure culture and product craft.',
    d1num: '01 — Discipline',
    d1title: 'Motorcycle Adventure Design',
    d1body: 'Gear, graphics, and visual systems built for the long road. Branding for riders, rally culture, overland adventures, and the machines that carry them. Raw aesthetics forged from real terrain.',
    d1tags: ['Branding', 'Apparel', 'Rally Graphics', 'Gear Design', 'Visual Identity'],
    d2num: '02 — Discipline',
    d2title: 'Product Design',
    d2body: 'Objects and systems designed with intent. From concept to physical form — accessories, tools, and product lines that carry the POLVO philosophy: functional, durable, honest.',
    d2tags: ['Industrial Design', 'Accessories', 'Prototyping', 'Packaging', 'Systems'],
    wip: 'Under Construction',
    wipText: 'Projects, products, and full case studies coming soon.',
    wipSig: '— POLVO LAB / 2026',
  },
  es: {
    seoTitle: 'POLVO LAB — Diseño de Aventura en Moto y Diseño de Producto',
    seoDesc: 'POLVO LAB es una marca de diseño de aventura en moto y diseño de producto de Nico Requena.',
    brandStudio: 'Estudio de Marca',
    tagline: 'Donde el polvo se encuentra con el diseño. Un estudio en la intersección de la cultura de aventura en moto y el craft de producto.',
    d1num: '01 — Disciplina',
    d1title: 'Diseño de Aventura en Moto',
    d1body: 'Indumentaria, gráficas y sistemas visuales construidos para el camino largo. Branding para riders, cultura de rally, aventuras overland y las máquinas que los llevan. Estética cruda forjada en terreno real.',
    d1tags: ['Branding', 'Indumentaria', 'Gráficas de Rally', 'Diseño de Gear', 'Identidad Visual'],
    d2num: '02 — Disciplina',
    d2title: 'Diseño de Producto',
    d2body: 'Objetos y sistemas diseñados con intención. Del concepto a la forma física — accesorios, herramientas y líneas de producto que llevan la filosofía POLVO: funcional, durable, honesto.',
    d2tags: ['Diseño Industrial', 'Accesorios', 'Prototipado', 'Packaging', 'Sistemas'],
    wip: 'En Construcción',
    wipText: 'Proyectos, productos y casos de estudio completos próximamente.',
    wipSig: '— POLVO LAB / 2026',
  },
};

export default function PolvoLab() {
  const { lang } = useLanguage();
  const tx = t[lang];

  return (
    <PasswordGate storageKey="polvolab" password="p0lv0">
      <SEO title={tx.seoTitle} description={tx.seoDesc} />

      <div className="p-4 lg:p-8 min-h-screen">
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-12">
          <p className="text-nasared text-xs font-mono tracking-widest uppercase mb-3">
            {tx.brandStudio}
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-4">
            POLVO LAB
          </h1>
          <p className="text-gray-400 text-lg max-w-xl font-light">{tx.tagline}</p>
        </motion.div>

        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="h-px bg-gray-800 mb-12" />

        {/* Disciplines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="border border-gray-800 p-8 hover:border-nasared transition-colors duration-300 group"
          >
            <span className="text-nasared text-xs font-mono tracking-widest uppercase block mb-4">
              {tx.d1num}
            </span>
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-nasared transition-colors duration-300">
              {tx.d1title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-light">{tx.d1body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tx.d1tags.map((tag) => (
                <span key={tag} className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="border border-gray-800 p-8 hover:border-nasared transition-colors duration-300 group"
          >
            <span className="text-nasared text-xs font-mono tracking-widest uppercase block mb-4">
              {tx.d2num}
            </span>
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-nasared transition-colors duration-300">
              {tx.d2title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-light">{tx.d2body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tx.d2tags.map((tag) => (
                <span key={tag} className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Coming soon */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="border border-dashed border-gray-700 p-8 text-center"
        >
          <p className="text-gray-600 text-xs font-mono tracking-widest uppercase mb-3">{tx.wip}</p>
          <p className="text-white text-xl font-light max-w-lg mx-auto leading-relaxed">{tx.wipText}</p>
          <p className="text-gray-500 text-sm mt-4 font-mono">{tx.wipSig}</p>
        </motion.div>
      </div>
    </PasswordGate>
  );
}
