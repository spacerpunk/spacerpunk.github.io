import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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

interface CaseStudyLink { label: string; url: string; external?: boolean }

interface Pack {
  id: number;
  tag: string;
  title: string;
  description: string;
  includes: string[];
  forWhom: string;
  caseStudy: {
    label: string;
    title: string;
    body: string;
    placeholder: boolean;
    links?: CaseStudyLink[];
  };
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
        title: es ? 'Storyboard con IA para Film Conceptual — Toyota @ Team23' : 'AI Storyboard for Concept Film — Toyota @ Team23',
        body: es
          ? 'Pipeline de generación de imágenes con IA (ComfyUI + Weave + Fal.ai, modelos Flux 2, NanoBanana2, Seedream y ChatGPT Image 2) para producir un storyboard de un film conceptual de Toyota. Cada frame iterado contra referencias del vehículo para mantener geometría, color e iluminación pixel-accurate. El storyboard es la base del film conceptual actualmente en producción.'
          : 'AI image generation pipeline (ComfyUI + Weave + Fal.ai, running Flux 2, NanoBanana2, Seedream and ChatGPT Image 2) to produce a storyboard for a Toyota concept film. Each frame iterated against vehicle references to nail exact geometry, colour and lighting. The storyboard is now the foundation for the concept film in production.',
        placeholder: false,
        links: [{ label: es ? 'Ver proyecto →' : 'View project →', url: '/work/toyotateam23' }],
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
        title: es ? 'Director de Audio y Post — Tungsteno Films (2016–2021)' : 'Audio Direction & Post Production — Tungsteno Films (2016–2021)',
        body: es
          ? '5 años como Director de Audio y luego VFX & 3D Generalist en esta productora indie de Buenos Aires. Cortometrajes (La Grieta, ¡NO!), piloto de serie sci-fi (Abismo), serie animada semanal y publicidad para Dove, Pringles y Visa. Post completo: grabación en set, re-grabación, diseño de sonido, edición, mezcla 5.1, más edición de video, compositing y 3D en Blender y Unreal Engine.'
          : '5 years as Audio Director and later VFX & 3D Generalist at this Buenos Aires indie film company. Short films (La Grieta, ¡NO!), sci-fi series pilot (Abismo), animated weekly series and advertising for Dove, Pringles and Visa. Full pipeline: on-set recording, re-recording, sound design, editing, 5.1 mixing, plus video editing, compositing and 3D in Blender and Unreal Engine.',
        placeholder: false,
        links: [{ label: es ? 'Ver proyecto →' : 'View project →', url: '/work/Tungsteno' }],
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
        label: es ? 'Casos de Estudio' : 'Case Studies',
        title: es ? 'Visualización 3D — Dove + NASAXHONDA' : '3D Visualization — Dove + NASAXHONDA',
        body: es
          ? 'Dos proyectos: Dove "Real Virtual Beauty" — animación 3D completa, shading y rendering en Blender integrado con compositing de acción real. Y NASAXHONDA XR-LRV — visualización conceptual de una moto lunar NASA×Honda art-directed a través de pipelines de generación de imágenes con IA, desde diseño de placa hasta renders hero del vehículo.'
          : 'Two projects: Dove "Real Virtual Beauty" — full 3D animation, shading and rendering in Blender integrated with live-action compositing. And NASAXHONDA XR-LRV — concept visualization of a NASA×Honda lunar rover bike, art-directed through AI image generation pipelines from spec sheet to hero vehicle renders.',
        placeholder: false,
        links: [
          { label: 'Dove →', url: '/work/dove' },
          { label: 'NASAXHONDA →', url: '/projects/nasaxhonda' },
        ],
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
        label: es ? 'Casos de Estudio' : 'Case Studies',
        title: es ? 'Score Original — ATEA OST + Discografía Spacerpunk' : 'Original Score — ATEA OST + Spacerpunk Discography',
        body: es
          ? 'Banda sonora original completa para la serie documental ATEA — score, texturas ambientales, diseño de sonido y audio post en todos los episodios, lanzado como álbum independiente. Más de una década de lanzamientos que abarcan scores para cine, electrónica experimental y diseño de sonido disponibles en Bandcamp.'
          : 'Full original soundtrack for the ATEA documentary series — score, ambient textures, sound design and audio post across all episodes, released as a standalone album. Over a decade of releases spanning film scores, experimental electronics and sound design work available on Bandcamp.',
        placeholder: false,
        links: [
          { label: 'ATEA →', url: '/work/atea' },
          { label: 'Bandcamp →', url: 'https://spacerpunk.bandcamp.com/', external: true },
        ],
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
        ? ['Auditoría de flujo de trabajo y análisis de brechas', 'Integración de herramientas de IA (Agentes, IA Generativa, modelos personalizados, IA + Postproducción)', 'Scripts de automatización y plantillas', 'Sesiones de capacitación del equipo', 'Soporte async continuo (opción retainer)']
        : ['Workflow audit & gap analysis', 'AI tool integration (Agents, Generative AI, custom models, AI + PostProduction Pipelines)', 'Automation scripts & templates', 'Team training sessions', 'Ongoing async support (retainer option)'],
      forWhom: es
        ? 'Agencias, equipos creativos internos, estudios de post'
        : 'Agencies, in-house creative teams, post studios',
      caseStudy: {
        label: es ? 'Casos de Estudio' : 'Case Studies',
        title: es ? 'Pipelines Agénticos — .Monks + Superside' : 'Agentic Pipelines — .Monks + Superside',
        body: es
          ? 'Dos sistemas en .Monks: (1) Pipeline completamente agéntico (Cursor + Claude Sonnet + Google Imagen/Gemini/Veo + n8n + After Effects) que genera assets siempre on-brand y puebla templates de broadcast automáticamente — de días de trabajo a minutos. (2) Sistema de moodboard-a-entrega para Superside usando Flux 2 Pro y ChatGPT Agentic, produciendo entregables multi-formato desde el brief hasta el output final.'
          : 'Two systems built at .Monks: (1) A fully agentic pipeline (Cursor + Claude Sonnet + Google Imagen/Gemini/Veo + n8n + After Effects) that generates always-on-brand assets and auto-populates broadcast templates — turning multi-day manual work into minutes. (2) A moodboard-to-delivery system for Superside using Flux 2 Pro and ChatGPT Agentic, producing multi-format deliverables from creative brief to final output.',
        placeholder: false,
        links: [
          { label: es ? 'Agentic @Monks →' : 'Agentic @Monks →', url: '/work/agenticmonks' },
          { label: 'Superside →', url: '/work/superside' },
        ],
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
                {pack.caseStudy.links && pack.caseStudy.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {pack.caseStudy.links.map((l) =>
                      l.external ? (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-nasared hover:underline"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          key={l.url}
                          to={l.url}
                          className="text-xs font-mono text-nasared hover:underline"
                        >
                          {l.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
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
          <p className="text-gray-500 text-sm max-w-xl font-light">
            {es
              ? 'Trabajo creativo empaquetado para agencias, marcas y estudios que necesitan output rápido y de alta calidad en visuales, audio e IA.'
              : 'Packaged creative work for agencies, brands and studios that need fast, high-quality output across visuals, audio and AI.'}
          </p>
        </motion.div>

        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="h-px bg-gray-800 mb-10" />

        {/* Packs list — right after hero */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mb-2">
          <p className="text-gray-600 text-xs font-mono mb-4">
            {es ? '↓ Hacé clic en cada pack para ver detalles y caso de estudio.' : '↓ Click any pack to expand details and case study.'}
          </p>
        </motion.div>

        <div className="space-y-2 mb-16">
          {packs.map((pack, i) => (
            <PackCard key={pack.id} pack={pack} lang={lang} index={i} />
          ))}
        </div>

        <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="h-px bg-gray-800 mb-12" />

        {/* Intro grid — below packs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800 mb-16">
          {intro.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
