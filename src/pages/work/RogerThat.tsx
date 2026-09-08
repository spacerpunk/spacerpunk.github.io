import SEO from '../../components/SEO';
import LazyImage from '../../components/LazyImage';
import { VideoEmbed } from '../../components/content/Prose';
import { useLanguage } from '../../contexts/LanguageContext';

import RefMusic from '../../assets/RogerThat/Patagonia Skybound.mp3';

// Demo film hosted on YouTube (the source mp4 is 377 MB — too large for the repo).
// Paste the video ID from the YouTube URL, e.g. https://youtu.be/XXXXXXXXXXX
const DEMO_YOUTUBE_ID = 'JyLiczd-_SQ';

// Reference frames — generated with GPT Image + Nano Banana
const frameModules = import.meta.glob(
  '../../assets/RogerThat/*.{png,jpg,jpeg}',
  { eager: true },
);

interface Frame {
  src: string;
  filename: string;
}

const frames: Frame[] = Object.entries(frameModules)
  .map(([path, mod]) => ({
    src: (mod as { default: string }).default,
    filename: path.split('/').pop() || '',
  }))
  .sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }));

interface Step {
  n: string;
  en: { title: string; body: string };
  es: { title: string; body: string };
}

const steps: Step[] = [
  {
    n: '01',
    en: {
      title: 'Frame generation',
      body: 'An agent generated every frame of the film using GPT Image and Nano Banana — keeping character consistency and the same look-dev across all images.',
    },
    es: {
      title: 'Generación de frames',
      body: 'Un agente generó todos los frames de la pieza usando GPT Image y Nano Banana, conservando la consistencia de personajes y el mismo look dev en todas las imágenes.',
    },
  },
  {
    n: '02',
    en: {
      title: 'Image to video',
      body: 'Every still was then run through Seedance 2.5 to bring it to motion and generate the video shots.',
    },
    es: {
      title: 'Imagen a video',
      body: 'Después pasé todas las imágenes por Seedance 2.5 para darles movimiento y generar los planos en video.',
    },
  },
  {
    n: '03',
    en: {
      title: 'Edit',
      body: 'Shots were assembled, edited and fine-tuned in Premiere Pro.',
    },
    es: {
      title: 'Edición',
      body: 'Los planos se montaron, editaron y ajustaron en Premiere Pro.',
    },
  },
  {
    n: '04',
    en: {
      title: 'Voice & music',
      body: 'A voice-over was generated in ElevenLabs and the original music track in Suno AI.',
    },
    es: {
      title: 'Voz y música',
      body: 'La voz en off se generó en ElevenLabs y la música original en Suno AI.',
    },
  },
];

export default function RogerThat() {
  const { lang } = useLanguage();
  const es = lang === 'es';

  return (
    <div className="w-full p-4 md:p-6">
      <SEO
        title="RogerThat — AI Demo"
        description="An AI-made demo film for RogerThat: frames generated with GPT Image and Nano Banana, animated with Seedance 2.5, edited in Premiere Pro, voice in ElevenLabs and music in Suno AI."
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-1">RogerThat</h1>
      <p className="text-sm text-gray-500 mb-2">
        {es ? 'Demo — pieza hecha con IA' : 'Demo — AI-made film'}
      </p>

      <h3 className="font-extralight text-sm py-1 text-nasared">
        #ai #genai #aivideo #seedance #gptimage #nanobanana #premierepro
      </h3>

      {/* Demo video */}
      <section className="py-6">
        <p className="text-xs font-mono text-nasared tracking-widest uppercase mb-3">
          Demo
        </p>
        <VideoEmbed
          youtubeId={DEMO_YOUTUBE_ID}
          title="RogerThat — AI Demo"
          caption={es ? 'Ver en YouTube' : 'Watch on YouTube'}
        />
      </section>

      {/* How it was made */}
      <section className="py-6">
        <h2 className="text-xl font-semibold mb-1">
          {es ? 'Cómo lo hice' : 'How it was made'}
        </h2>
        <p className="text-gray-400 leading-relaxed text-sm mb-6 max-w-2xl">
          {es
            ? 'Una demo que armé para mostrarle a RogerThat qué se puede lograr con un pipeline de IA de punta a punta. Todo el flujo, de la generación de imágenes a la edición final.'
            : 'A demo I put together to show RogerThat what an end-to-end AI pipeline can do — from image generation all the way to the final edit.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-3xl">
          {steps.map((step) => (
            <div key={step.n} className="flex gap-4">
              <span className="text-nasared font-mono text-sm shrink-0 pt-0.5">
                {step.n}
              </span>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide mb-1">
                  {es ? step.es.title : step.en.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {es ? step.es.body : step.en.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reference frames */}
      <section className="py-6">
        <h2 className="text-xl font-semibold mb-1">
          {es ? 'Imágenes de referencia' : 'Reference frames'}
        </h2>
        <p className="text-gray-400 leading-relaxed text-sm mb-4 max-w-2xl">
          {es
            ? 'Frames generados con GPT Image y Nano Banana, conservando el mismo look dev en toda la pieza.'
            : 'Frames generated with GPT Image and Nano Banana, holding the same look-dev across the whole film.'}
        </p>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {frames.map((frame, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden rounded-sm">
              <LazyImage
                src={frame.src}
                alt={`RogerThat — reference frame ${i + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reference music */}
      <section className="py-6">
        <h2 className="text-xl font-semibold mb-1">
          {es ? 'Música de referencia' : 'Reference music'}
        </h2>
        <p className="text-gray-400 leading-relaxed text-sm mb-4 max-w-2xl">
          {es
            ? 'Track original generado en Suno AI — "Patagonia Skybound".'
            : 'Original track generated in Suno AI — "Patagonia Skybound".'}
        </p>
        <audio src={RefMusic} controls className="w-full max-w-md" />
      </section>

      {/* Note */}
      <section className="py-6">
        <p className="text-gray-500 text-sm italic max-w-2xl">
          {es
            ? 'Todo el proceso llevó unas 2 horas, desde la concepción de la idea hasta el primer edit del video. Hay muchísimo por pulir — pero lo armé ayer en 2 horas.'
            : 'The whole process took about 2 hours, from the initial idea to the first edit. There is plenty left to polish — but I built it yesterday in 2 hours.'}
        </p>
      </section>
    </div>
  );
}
