import SEO from '../../components/SEO';
import { useLanguage } from '../../contexts/LanguageContext';

export default function VerticalMusicWaves() {
  const es = useLanguage().lang === 'es';
  return (
    <div className="w-full p-4 md:p-6">
      <SEO
        title="Vertical Sliced Music Waves"
        description="Visual music project exploring vertical waveform slicing and audio visualization"
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Vertical Sliced Music Waves
      </h1>
      <div>
        <h3 className="font-extralight text-sm py-1 text-nasared">
          #audiovisualization #waveforms #experimental #visuals
        </h3>

        <div className="py-6">
          <h2 className="text-xl font-semibold mb-4">{es ? 'Sobre esto' : 'About'}</h2>
          <p className="text-gray-400 leading-relaxed">
            {es
              ? 'Un proyecto audiovisual experimental que corta las formas de onda de la música en vertical, creando representaciones visuales únicas del sonido. Cada corte revela patrones y ritmos ocultos dentro del espectro de audio.'
              : 'An experimental audio-visual project that slices music waveforms vertically, creating unique visual representations of sound. Each slice reveals hidden patterns and rhythms within the audio spectrum.'}
          </p>
        </div>

        <div className="py-4">
          <p className="text-sm text-gray-500">{es ? 'Próximamente...' : 'Coming soon...'}</p>
        </div>
      </div>
    </div>
  );
}
