import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { useLanguage, type Lang } from '../contexts/LanguageContext';

const EMAIL = 'requena.nicolas@gmail.com';
const WPP_NUMBER = '5491150000000';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

interface Pack {
  id: number;
  tag: string;
  title: string;
  description: string;
  includes: string[];
  forWhom: string;
  caseStudy: { label: string; title: string; body: string; placeholder: boolean };
}

function getPacks(lang: Lang): Pack[] {
  const es = lang === 'es';
  return [
    {
      id: 1,
      tag: es ? 'IA · Generativo · Visual' : 'AI · Generative · Visual',
      title: es ? 'Sprint Creativo con IA' : 'AI Creative Sprint',
      description: es
        ? 'Para agencias y marcas que necesitan exploración visual rápida, prototipos o conceptos de campaña. Del mood al movimiento en días, no semanas.'
        : 'For agencies and brands that need fast visual exploration, prototypes or campaign concepts. From mood to motion in days, not weeks.',
      includes: es
        ? ['Exploración de conceptos visuales (IA generativa)', 'Ingeniería de prompts y ajuste de modelos', 'Style frames y dirección de mood', 'Activos prototipo de campaña', 'Hasta 3 rondas de revisión']
        : ['Visual concept exploration (AI-generated)', 'Prompt engineering & model tuning', 'Style frames & mood direction', 'Campaign prototype assets', 'Up to 3 revision rounds'],
      forWhom: es
        ? 'Agencias creativas, equipos de marca, productores independientes'
        : 'Creative agencies, brand teams, independent producers',
      caseStudy: {
        label: es ? 'Caso de Estudio' : 'Case Study',
        title: es ? 'Conceptos de Campaña con IA — Superside' : 'Generative Campaign Concepts — Superside',
        body: es
          ? 'Exploración visual rápida con IA para un pitch de campaña global. Se produjeron más de 40 style frames en 3 direcciones visuales distintas en 48 horas usando pipelines personalizados de Flux, permitiendo al cliente presentar con confianza antes de filmar un solo cuadro.'
          : 'Rapid AI visual exploration for a global campaign pitch. Produced 40+ style frames across 3 distinct visual directions in 48 hours using custom Flux pipelines, enabling the client to present confidently to their end client before a single frame was shot.',
        placeholder: false,
      },
    },
    {
      id: 2,
      tag: es ? 'Edición · Post · Entrega' : 'Editing · Post · Delivery',
      title: es ? 'Pack de Video / Postproducción' : 'Video / Postproduction Pack',
      description: es
        ? 'Edición, finalización, versionado, color, limpieza de audio y entrega final. Post completo para campañas, cortometrajes, contenido y brand films.'
        : 'Editing, finishing, versioning, color, audio cleanup and final delivery. End-to-end post for campaigns, shorts, content and brand films.',
      includes: es
        ? ['Edición offline y online', 'Gradación de color', 'Mezcla y limpieza de audio', 'Versionado multi-formato (redes, broadcast, web)', 'Entrega final y control técnico de calidad']
        : ['Offline & online edit', 'Color grading', 'Audio mix & cleanup', 'Multi-format versioning (social, broadcast, web)', 'Final delivery & technical QC'],
      forWhom: es
        ? 'Productoras, marcas, estudios de contenido'
        : 'Production companies, brands, content studios',
      caseStudy: {
        label: es ? 'Caso de Estudio' : 'Case Study',
        title: es ? 'Versionado y Finalización de Campaña — [Cliente Pendiente]' : 'Campaign Versioning & Finishing — [Client Placeholder]',
        body: es
          ? 'Pack post completo para una campaña multi-mercado — edición, color, audio post y 12 entregables versionados en distintos formatos. Entregado en 5 días hábiles desde el picture lock.'
          : 'Full post package for a multi-market campaign — edit, color, audio post and 12 versioned deliverables across formats. Delivered in 5 business days from locked picture.',
        placeholder: true,
      },
    },
    {
      id: 3,
      tag: es ? '3D · Render · Film' : '3D · Render · Film',
      title: es ? 'Pack Visual de Producto / 3D' : 'Product Visual / 3D Pack',
      description: es
        ? 'Renders, loops, films de producto y activos visuales. Desde el modelado de superficie hasta renders finales iluminados y secuencias animadas.'
        : 'Renders, loops, product films and visual assets. From hard-surface modeling to final lit renders and animated sequences.',
      includes: es
        ? ['Modelado de producto o limpieza de assets', 'Look development e iluminación', 'Renders hero (estático + loop animado)', 'Film / secuencia hero de producto', 'Pipeline Blender / Unreal Engine']
        : ['Product modeling or asset cleanup', 'Look development & lighting', 'Hero renders (still + animated loop)', 'Product film / hero sequence', 'Blender / Unreal Engine pipeline'],
      forWhom: es
        ? 'Marcas de producto, e-commerce, agencias que necesitan visuales hero'
        : 'Product brands, e-commerce, agencies needing hero visuals',
      caseStudy: {
        label: es ? 'Caso de Estudio' : 'Case Study',
        title: es ? 'Visualización de Producto en Tiempo Real — Dove' : 'Real-Time Product Visualization — Dove',
        body: es
          ? "Animación 3D completa, shading y rendering para la campaña 'Real Virtual Beauty' de Dove. Assets de producto fotorrealistas construidos en Blender e integrados con compositing de acción real para la entrega final."
          : "Full 3D animation, shading and rendering for Dove's \"Real Virtual Beauty\" campaign. Built and rendered photorealistic product assets in Blender, integrated with live-action compositing for final delivery.",
        placeholder: false,
      },
    },
    {
      id: 4,
      tag: es ? 'Audio · Música · Sonido' : 'Audio · Music · Sound',
      title: es ? 'Pack de Música y Diseño de Sonido' : 'Music & Sound Design Pack',
      description: es
        ? 'Música original, diseño de sonido, logos sonoros, stingers y audio post. Audio personalizado que acompaña tu visual, no al revés.'
        : 'Original music, sound design, sonic logos, stingers and audio post. Custom audio that locks to your visual, not the other way around.',
      includes: es
        ? ['Score original / underscore', 'Diseño de sonido (UI, ambiente, foley)', 'Logo sonoro / stinger de marca', 'Audio post y mezcla para video', 'Stems y entregables máster']
        : ['Original score / underscore', 'Sound design (UI, ambient, foley)', 'Sonic logo / brand stinger', 'Audio post & mix for video', 'Stems & master deliverables'],
      forWhom: es
        ? 'Cine, publicidad, videojuegos, apps, proyectos de identidad de marca'
        : 'Film, advertising, games, apps, brand identity projects',
      caseStudy: {
        label: es ? 'Caso de Estudio' : 'Case Study',
        title: es ? 'Score Original y Diseño de Sonido — ATEA' : 'Original Score & Sound Design — ATEA',
        body: es
          ? 'Composición de la banda sonora original completa para la serie documental ATEA — score original, texturas ambientales, diseño de sonido y audio post en todos los episodios. Lanzado como álbum independiente.'
          : 'Composed the full original soundtrack for the ATEA documentary series — original score, ambient textures, sound design and audio post across all episodes. Released as a standalone album.',
        placeholder: false,
      },
    },
    {
      id: 5,
      tag: es ? 'Consultoría · IA · Pipelines' : 'Consulting · AI · Pipelines',
      title: es ? 'Consultoría de Flujo de Trabajo Creativo' : 'Creative Workflow Consulting',
      description: es
        ? 'IA, automatización y pipelines de producción para equipos visuales, de audio y de contenido. Más velocidad de output sin quemar a tu equipo.'
        : 'AI, automation and production pipelines for visual, audio and content teams. Speed up output without burning out your people.',
      includes: es
        ? ['Auditoría de flujo de trabajo y análisis de brechas', 'Integración de herramientas de IA (Flux, SD, modelos custom)', 'Scripts de automatización y plantillas', 'Sesiones de capacitación del equipo', 'Soporte async continuo (opción retainer)']
        : ['Workflow audit & gap analysis', 'AI tool integration (Flux, SD, custom models)', 'Automation scripts & templates', 'Team training sessions', 'Ongoing async support (retainer option)'],
      forWhom: es
        ? 'Agencias, equipos creativos internos, estudios de post'
        : 'Agencies, in-house creative teams, post studios',
      caseStudy: {
        label: es ? 'Caso de Estudio' : 'Case Study',
        title: es ? 'Build de Pipeline con IA — .Monks' : 'AI Pipeline Build — .Monks',
        body: es
          ? 'Diseño y despliegue de pipelines asistidos por IA para equipos de Design, Edición y VFX — incluyendo apps de generación de imágenes con Flux/SD, herramientas de prompts y scripts de producción. Reducción del tiempo de iteración conceptual en ~60% en proyectos calificados.'
          : 'Designed and deployed AI-assisted pipelines for Design, Editing and VFX teams — including custom Flux/SD image generation apps, prompt tooling and production scripts. Reduced concept iteration time by ~60% on qualifying projects.',
        placeholder: false,
      },
    },
  ];
}

function getIntro(lang: Lang) {
  const es = lang === 'es';
  return [
    {
      id: 'who',
      label: es ? '01 — Quién' : '01 — Who',
      body: es
        ? 'Nico Requena — Creative Technologist, productor musical, artista de VFX, editor de video y diseñador de sonido. Basado en Buenos Aires. Trabajando globalmente para agencias, marcas y estudios independientes desde 2014.'
        : 'Nico Requena — Creative Technologist, music producer, VFX artist, video editor and sound designer. Based in Buenos Aires. Working globally for agencies, brands and independent studios since 2014.',
    },
    {
      id: 'what',
      label: es ? '02 — Qué' : '02 — What',
      body: es
        ? 'Producción creativa de punta a punta — desde el concepto hasta la entrega final. Trabajo en todo el stack: visuales, movimiento, audio, pipelines de IA y post. Construyo las cosas, no solo las consulto.'
        : 'End-to-end creative production — from concept to final delivery. I work across the full stack: visuals, motion, audio, AI pipelines and post. I build the thing, not just consult on it.',
    },
    {
      id: 'whom',
      label: es ? '03 — Para quién' : '03 — For whom',
      body: es
        ? 'Agencias creativas que necesitan una mano senior rápida y confiable. Marcas que necesitan output de alta calidad sin un equipo de producción completo. Estudios independientes y empresas de producto que necesitan ejecución multidisciplinaria.'
        : 'Creative agencies that need a fast, reliable senior hand. Brands that need high-quality output without a full production team. Independent studios and product companies that need cross-discipline execution.',
    },
    {
      id: 'contact',
      label: es ? '04 — Contacto' : '04 — Contact',
      body: es
        ? 'Email o WhatsApp son los canales más rápidos. Respondo en 24 horas en días hábiles. Para retainers y trabajo continuo, coordinemos una llamada.'
        : "Email or WhatsApp are the fastest channels. I respond within 24 hours on weekdays. For retainers and ongoing work, let's set up a call.",
    },
  ];
}

function PackCard({ pack, lang, index }: { pack: Pack; lang: Lang; index: number }) {
  const [open, setOpen] = useState(false);
  const es = lang === 'es';

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="border border-gray-800 hover:border-nasared/50 transition-colors duration-300"
    >
      <button
        className="w-full text-left p-6 flex items-start justify-between gap-4 group"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex-1">
          <span className="text-nasared text-xs font-mono tracking-widest uppercase block mb-2">
            {String(pack.id).padStart(2, '0')} — {pack.tag}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-nasared transition-colors duration-200">
            {pack.title}
          </h3>
          <p className="text-gray-500 text-sm font-light mt-2 leading-relaxed">
            {pack.description}
          </p>
        </div>
        <span className={`text-gray-600 group-hover:text-nasared transition-all duration-200 mt-1 shrink-0 ${open ? 'rotate-45' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-800 pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3">
                  {es ? 'Qué incluye' : "What's included"}
                </p>
                <ul className="space-y-2">
                  {pack.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300 font-light">
                      <span className="text-nasared mt-1 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-mono text-gray-700 uppercase tracking-widest mt-6 mb-1">
                  {es ? 'Ideal para' : 'Best for'}
                </p>
                <p className="text-sm text-gray-500 font-light">{pack.forWhom}</p>
              </div>

              <div className={`border ${pack.caseStudy.placeholder ? 'border-dashed border-gray-800' : 'border-gray-800'} p-5`}>
                <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-3">
                  {pack.caseStudy.label}
                  {pack.caseStudy.placeholder && (
                    <span className="text-gray-700 ml-2">({es ? 'próximamente' : 'placeholder'})</span>
                  )}
                </p>
                <p className={`text-sm font-bold mb-3 ${pack.caseStudy.placeholder ? 'text-gray-600 italic' : 'text-white'}`}>
                  {pack.caseStudy.title}
                </p>
                <p className={`text-sm leading-relaxed font-light ${pack.caseStudy.placeholder ? 'text-gray-700 italic' : 'text-gray-400'}`}>
                  {pack.caseStudy.body}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 flex gap-3">
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(es ? `Consulta: ${pack.title}` : `Inquiry: ${pack.title}`)}`}
                className="text-xs font-mono font-bold tracking-widest uppercase px-4 py-2 bg-nasared text-white hover:bg-white hover:text-nasared transition-colors duration-200"
              >
                {es ? 'Consultar por email' : 'Inquire via email'}
              </a>
              <a
                href={`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(es ? `Hola Nico, me interesa el ${pack.title}.` : `Hi Nico, I'm interested in the ${pack.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold tracking-widest uppercase px-4 py-2 border border-gray-700 text-gray-400 hover:border-nasared hover:text-nasared transition-colors duration-200"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const { lang } = useLanguage();
  const es = lang === 'es';
  const packs = getPacks(lang);
  const intro = getIntro(lang);

  return (
    <>
      <SEO
        title={es ? 'Servicios — Packs Creativos' : 'Services — Creative Packs'}
        description={
          es
            ? 'Packs de servicios para agencias y marcas: Sprint IA, Video Post, 3D, Diseño de Sonido y Consultoría de Flujo de Trabajo por Nico Requena.'
            : 'Service packs for agencies and brands: AI Creative Sprint, Video Post, 3D Visuals, Sound Design and Workflow Consulting by Nico Requena.'
        }
      />

      <div className="p-4 lg:p-8 min-h-screen">
        {/* Hero */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-12">
          <p className="text-nasared text-xs font-mono tracking-widest uppercase mb-3">
            {es ? 'Disponible para proyectos' : 'Available for hire'}
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-4">
            {es ? 'SERVICIOS' : 'SERVICES'}
          </h1>
          <p className="text-gray-400 text-lg max-w-xl font-light">
            {es
              ? 'Trabajo creativo empaquetado para agencias, marcas y estudios que necesitan output rápido y de alta calidad en visuales, audio e IA.'
              : 'Packaged creative work for agencies, brands and studios that need fast, high-quality output across visuals, audio and AI.'}
          </p>
        </motion.div>

        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="h-px bg-gray-800 mb-12" />

        {/* Intro grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800 mb-16">
          {intro.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="bg-black p-6"
            >
              <p className="text-nasared text-xs font-mono tracking-widest uppercase mb-3">
                {item.label}
              </p>
              {item.id === 'contact' ? (
                <div className="space-y-2">
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{item.body}</p>
                  <div className="flex flex-col gap-1 pt-2">
                    <a href={`mailto:${EMAIL}`} className="text-xs font-mono text-nasared hover:underline">{EMAIL}</a>
                    <a href={`https://wa.me/${WPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-nasared hover:underline">
                      WhatsApp →
                    </a>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.body}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Packs heading */}
        <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
          <p className="text-nasared text-xs font-mono tracking-widest uppercase mb-2">
            {es ? 'Packs de Servicio' : 'Service Packs'}
          </p>
          <h2 className="text-2xl font-bold text-white">
            {es ? 'Elegí lo que necesitás' : 'Pick what you need'}
          </h2>
          <p className="text-gray-600 text-sm font-light mt-1">
            {es ? 'Hacé clic en cada pack para ver los detalles y el caso de estudio.' : 'Click any pack to expand details and case study.'}
          </p>
        </motion.div>

        {/* Packs list */}
        <div className="space-y-2 mb-20">
          {packs.map((pack, i) => (
            <PackCard key={pack.id} pack={pack} lang={lang} index={i} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-dashed border-gray-700 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="text-white font-bold text-lg mb-1">
              {es ? '¿No sabés qué pack te conviene?' : "Not sure which pack fits?"}
            </p>
            <p className="text-gray-500 text-sm font-light">
              {es ? 'Mandame un mensaje y lo vemos juntos.' : "Drop me a message and we'll figure it out together."}
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(es ? 'Trabajemos juntos' : "Let's work together")}`}
              className="text-xs font-mono font-bold tracking-widest uppercase px-5 py-3 bg-nasared text-white hover:bg-white hover:text-nasared transition-colors duration-200"
            >
              {es ? 'Escribime' : 'Email me'}
            </a>
            <a
              href={`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(es ? '¡Hola Nico, me gustaría trabajar con vos!' : "Hi Nico, I'd like to work with you!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold tracking-widest uppercase px-5 py-3 border border-gray-700 text-gray-400 hover:border-nasared hover:text-nasared transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
