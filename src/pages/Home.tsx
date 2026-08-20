import SEO from '../components/SEO';
import LatestProjects from '../components/LatestProjects';
import { useLanguage } from '../contexts/LanguageContext';

const t = {
  en: {
    subtitle: 'creative technology',
    tagline: 'i make music & sound & visuals & films',
    taglineSub: '(sometimes with code && sometimes with ai)',
    discography: 'DISCOGRAPHY',
    more: 'more...',
    visual: 'VISUAL',
    generativeAI: 'Generative AI',
    creativeTech: '+ Creative Technologist',
    seniorEditor: 'Senior Video Editor @ Monks',
    contact: 'CONTACT',
    code: 'CODE',
    codeNote: '(this is not a serious operation)',
    site: 'SITE',
  },
  es: {
    subtitle: 'tecnología creativa',
    tagline: 'hago música & sonido & visuales & films',
    taglineSub: '(a veces con código && a veces con ia)',
    discography: 'DISCOGRAFÍA',
    more: 'más...',
    visual: 'VISUAL',
    generativeAI: 'IA Generativa',
    creativeTech: '+ Tecnólogo Creativo',
    seniorEditor: 'Senior Video Editor @ Monks',
    contact: 'CONTACTO',
    code: 'CÓDIGO',
    codeNote: '(esto no es una operación seria)',
    site: 'SITIO',
  },
};

export default function Home() {
  const { lang } = useLanguage();
  const tx = t[lang];

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <SEO
        title="Home"
        description="SPACERPUNK - Music, Visuals, and Creative Technology by Nico Requena. Exploring generative AI, sound design, and visual experiences."
      />
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
        nico requena
      </h1>
      <h3 className="text-base md:text-lg font-extralight py-2">
        {tx.subtitle}
      </h3>
      <div>
        <h3 className="text-lg md:text-xl font-extralight py-4 text-nasared">
          {tx.tagline}{' '}
          <h2 className="text-sm md:text-base font-extralight py-0 text-nasared">
            <a
              href="https://spacerpunk.github.io/"
              className="text-nasared hover:underline"
            >
              {tx.taglineSub}
            </a>
          </h2>
        </h3>

        {/* LATEST PROJECTS */}
        <LatestProjects />

        {/* DISCOGRAPHY */}
        <section className="py-4 md:py-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            {tx.discography}
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <a href="https://spacerpunk.bandcamp.com/album/-" target="_blank" rel="noopener noreferrer" className="text-nasared hover:underline">
                ..--.. (2025)
              </a>
            </li>
            <li>
              <a href="https://spacerpunk.bandcamp.com/album/atea-tracks" target="_blank" rel="noopener noreferrer" className="text-nasared hover:underline">
                ATEA: OST (2024)
              </a>
            </li>
            <li>
              <a href="https://spacerpunk.bandcamp.com/album/terminus" target="_blank" rel="noopener noreferrer" className="text-nasared hover:underline">
                Terminus (2021)
              </a>
            </li>
            <li>
              <a href="https://spacerpunk.bandcamp.com/album/controlled-machines-2" target="_blank" rel="noopener noreferrer" className="text-nasared hover:underline">
                Controlled Machines (2020)
              </a>
            </li>
            <li>
              <a href="https://spacerpunk.bandcamp.com/album/isolation" target="_blank" rel="noopener noreferrer" className="text-nasared hover:underline">
                Isolation (2020)
              </a>
            </li>
            <li>
              <a href="https://spacerpunk.bandcamp.com/album/goodbye-on-a-train-station" target="_blank" rel="noopener noreferrer" className="text-nasared hover:underline">
                Goodbye on a Train Station (2019)
              </a>
            </li>
            <li>
              <a href="https://spacerpunk.bandcamp.com/album/la-grieta-original-music-from-the-short-film" className="text-nasared hover:underline">
                La Grieta: OST (2019)
              </a>
            </li>
            <li>
              <a href="https://spacerpunk.bandcamp.com/album/no-original-short-film-soundtrack" className="text-nasared hover:underline">
                ¡NO!: OST (2018)
              </a>
            </li>
            <li>
              <a href="https://spacerpunk.bandcamp.com/album/abismo-nomofobia-music-from-the-original-series" className="text-nasared hover:underline">
                Abismo: OST (2017)
              </a>
            </li>
            <li>
              <a href="https://spacerpunk.bandcamp.com/album/and-then-there-was-nothing" className="text-nasared hover:underline">
                And Then There Was Nothing (2017)
              </a>
            </li>
            <li>
              <a href="https://spacerpunk.bandcamp.com/album/pale-blue-album" className="text-nasared hover:underline">
                Pale Blue Album (2015)
              </a>
            </li>
            <li>
              <a href="https://spacerpunk.bandcamp.com/album/photograph-of-a-black-hole" className="text-nasared hover:underline">
                Photograph of a Black Hole (2014)
              </a>
            </li>
            <li>
              <a href="https://spacerpunk.bandcamp.com/" className="text-nasared hover:underline">
                {tx.more}
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/intl-es/artist/6pUpuBZFid3AGpgTOnrIYr?si=PSosqVwWSIW1XMsHGaHaiA" className="text-nasared hover:underline">
                SPOTYF**KD
              </a>
            </li>
          </ul>
        </section>

        {/* VISUAL */}
        <section className="py-4 md:py-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">{tx.visual}</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <a href="https://www.youtube.com/watch?v=SuLCzrZaNeE" target="_blank" rel="noopener noreferrer" className="text-nasared hover:underline">
                Ruido
              </a>
            </li>
            <li>
              <a href="https://youtu.be/fbZuxEJJvhA?si=mEeRvy1I6tYd7cPJ" className="text-nasared hover:underline">
                Reel
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nico.reque" className="text-nasared hover:underline">
                {tx.generativeAI}
              </a>
            </li>
            <li>
              <a href="https://spacerpunk.github.io/" className="text-nasared hover:underline">
                {tx.creativeTech}
              </a>
            </li>
            <li>
              <a href="https://www.monks.com/" className="text-nasared hover:underline">
                {tx.seniorEditor}
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/gallery/153780873/Dove-Real-Virtual-Beauty" className="text-nasared hover:underline">
                Animation + Shading + Rendering: Dove Real Beauty
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/gallery/146761393/The-Tape" className="text-nasared hover:underline">
                Unreal Engine Short Film: The Tape
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/gallery/101279919/The-Rift-(La-Grieta)" className="text-nasared hover:underline">
                VFX + Compositing: The Rift
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/gallery/87684661/Tungsteno-FIlms-Intro" className="text-nasared hover:underline">
                Brand Intro: Tungsteno Films
              </a>
            </li>
          </ul>
        </section>

        {/* CONTACT */}
        <section className="py-4 md:py-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">{tx.contact}</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <a href="https://www.instagram.com/nico.reque/" className="text-nasared hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nicolas-requena-90b16110b/" className="text-nasared hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:requena.nicolas@gmail.com" target="_blank" rel="noopener noreferrer" className="text-nasared hover:underline">
                Mail
              </a>
            </li>
          </ul>
        </section>

        {/* CODE */}
        <section className="py-4 md:py-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">{tx.code}</h2>
          <h3 className="text-sm font-extralight py-0 pb-4 text-nasared">
            {tx.codeNote}
          </h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <a href="https://github.com/spacerpunk/TheGlitch_v01" className="text-nasared hover:underline">
                The Glitch
              </a>
            </li>
            <li>
              <a href="https://github.com/spacerpunk/in-the-nature-of-js" className="text-nasared hover:underline">
                in the nature of JS
              </a>
            </li>
            <li>
              <a href="https://github.com/spacerpunk/trackerplatz-RE" className="text-nasared hover:underline">
                trackerplatzRE
              </a>
            </li>
            <li>
              <a href="https://github.com/spacerpunk/oscillator_one" target="_blank" rel="noopener noreferrer" className="text-nasared hover:underline">
                oscilator in nannou
              </a>
            </li>
          </ul>
        </section>

        <h2 className="w-full font-light py-4">
          {tx.site}
          <a href="https://spacerpunk.github.io/" className="text-nasared hover:underline"></a>
        </h2>
      </div>
    </div>
  );
}
