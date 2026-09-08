import SEO from '../../components/SEO';
import { useLanguage } from '../../contexts/LanguageContext';

export default function MusicMoodboards() {
  const es = useLanguage().lang === 'es';
  return (
    <div className="w-full p-4 md:p-6">
      <SEO
        title="Music Moodboards"
        description="Curated visual and sonic mood boards exploring different musical atmospheres and aesthetics"
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Music Moodboards</h1>
      <div>
        <h3 className="font-extralight text-sm py-1 text-nasared">
          #music #moodboards #visualdesign #curation
        </h3>

        <div className="py-6">
          <h2 className="text-xl font-semibold mb-4">{es ? 'Sobre esto' : 'About'}</h2>
          <p className="text-gray-400 leading-relaxed">
            {es
              ? 'Una colección de mood boards curados que combinan estética visual con paisajes sonoros. Cada board explora una atmósfera única, mezclando paletas de color, texturas y referencias musicales.'
              : 'A collection of curated mood boards combining visual aesthetics with sonic landscapes. Each board explores a unique atmosphere, blending color palettes, textures, and musical references.'}
          </p>
        </div>

        <div className="py-4">
          <p className="text-sm text-gray-500">{es ? 'Próximamente...' : 'Coming soon...'}</p>
        </div>
      </div>
    </div>
  );
}
