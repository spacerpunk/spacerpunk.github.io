import SEO from '../../components/SEO';
import LazyImage from '../../components/LazyImage';

import FilmRef1 from '../../assets/nasaxhonda/Film References/FilmRef (1).jpg';
import FilmRef2 from '../../assets/nasaxhonda/Film References/FilmRef (2).jpg';
import FilmRef3 from '../../assets/nasaxhonda/Film References/FilmRef (3).jpg';
import FilmRef4 from '../../assets/nasaxhonda/Film References/FilmRef (4).jpg';
import FilmRef5 from '../../assets/nasaxhonda/Film References/FilmRef (5).jpg';
import FilmRef6 from '../../assets/nasaxhonda/Film References/FilmRef (6).jpg';
import FilmRef7 from '../../assets/nasaxhonda/Film References/FilmRef (7).jpg';
import FilmRef8 from '../../assets/nasaxhonda/Film References/FilmRef (8).jpg';

import BikeDesign1 from '../../assets/nasaxhonda/Bike Design/BikeDesign (1).png';
import BikeDesign2 from '../../assets/nasaxhonda/Bike Design/BikeDesign (2).png';
import BikeDesign3 from '../../assets/nasaxhonda/Bike Design/BikeDesign (3).png';
import BikeDesign4 from '../../assets/nasaxhonda/Bike Design/BikeDesign (4).png';
import BikeDesign5 from '../../assets/nasaxhonda/Bike Design/BikeDesign (5).png';
import BikeDesign6 from '../../assets/nasaxhonda/Bike Design/BikeDesign (6).png';
import BikeDesign7 from '../../assets/nasaxhonda/Bike Design/BikeDesign (7).png';
import BikeDesign8 from '../../assets/nasaxhonda/Bike Design/BikeDesign (8).png';
import BikeDesign9 from '../../assets/nasaxhonda/Bike Design/BikeDesign (9).png';

import FilmStyle1 from '../../assets/nasaxhonda/Film Style/4iptUKiGH4sHBJyWRsKju_75mzo24g.png';

const filmRefs = [
  { src: FilmRef1, alt: 'Motion blur rider — film reference' },
  { src: FilmRef2, alt: 'Motocross wheelie against desert landscape' },
  { src: FilmRef3, alt: 'Rear wheel kicking dust — film reference' },
  { src: FilmRef4, alt: 'Dirt bike wheelie in desert — film reference' },
  { src: FilmRef5, alt: 'Aerial backflip — film reference' },
  { src: FilmRef6, alt: 'High-speed pan blur — film reference' },
  { src: FilmRef7, alt: 'Desert flattrack drift — film reference' },
  { src: FilmRef8, alt: 'Silhouette in dust and flame — film reference' },
];

const bikeHero = [
  { src: BikeDesign5, alt: 'Honda XR-LRV — full side view' },
  { src: BikeDesign8, alt: 'Honda XR-LRV — side profile with LOX tank' },
];

const bikeDetails = [
  { src: BikeDesign7, alt: 'LOX Oxidizer fuel tank detail' },
  { src: BikeDesign9, alt: 'Navigation and mission dashboard' },
  { src: BikeDesign3, alt: 'LRV Diagnostics panel — TEST UNIT 03' },
  { src: BikeDesign2, alt: 'XR-LRV Telemetry unit — rear rack' },
  { src: BikeDesign4, alt: 'Front fairing with NASA badge' },
  { src: BikeDesign6, alt: 'Lower protection system — SCAP BANK 03' },
  { src: BikeDesign1, alt: 'Sealed terrain tire and front fork detail' },
];

export default function NasaXHonda() {
  return (
    <div className="w-full p-4 md:p-6">
      <SEO
        title="NASAXHONDA"
        description="A short dynamic film concept about a Honda NASA-engineered bike built to tackle any terrain — Mars rover meets motocross."
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-1">NASAXHONDA</h1>
      <p className="text-sm text-gray-500 mb-2">XR-LRV — TEST UNIT 03</p>

      <h3 className="font-extralight text-sm py-1 text-nasared">
        #nasa #honda #conceptfilm #space #engineering #shortfilm
      </h3>

      {/* Concept */}
      <div className="py-8 max-w-2xl">
        <h2 className="text-xl font-semibold mb-3">The Concept</h2>
        <p className="text-gray-400 leading-relaxed text-sm">
          A 15 to 30-second short dynamic film. Honda engineers — working under
          a classified NASA joint program — have built a bike for any terrain:
          the Honda XR-LRV, TEST UNIT 03. The same thinking that drove the Mars
          and Lunar Rovers now runs through a two-wheeled machine: LOX oxidizer
          fuel injection, low-gravity suspension geometry, sealed terrain tires,
          and a full telemetry suite. The rider wears a custom suit. The terrain
          does not matter.
        </p>
      </div>

      {/* Bike Design — Hero */}
      <section className="py-6">
        <h2 className="text-xl font-semibold mb-1">The Bike</h2>
        <p className="text-gray-500 text-sm mb-4">
          AI-generated concept renders. Designed in Gemini.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {bikeHero.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-sm">
              <LazyImage
                src={img.src}
                alt={img.alt}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bike Design — Details */}
      <section className="py-2">
        <p className="text-gray-500 text-xs mb-3 uppercase tracking-widest">
          Details
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {bikeDetails.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-sm">
              <LazyImage
                src={img.src}
                alt={img.alt}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Film Style */}
      <section className="py-8">
        <h2 className="text-xl font-semibold mb-1">Film Style</h2>
        <p className="text-gray-400 leading-relaxed text-sm mb-4 max-w-2xl">
          The film lives in a retrofuturist 1970s–80s aesthetic — grainy,
          sun-bleached, kinetic. Think NASA archival footage spliced with
          motocross Super 8. The XR-LRV is real. The moon is the track.
        </p>
        <div className="max-w-sm">
          <div className="overflow-hidden rounded-sm">
            <LazyImage
              src={FilmStyle1}
              alt="Astronaut riding Honda XR-LRV on the lunar surface"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Film References */}
      <section className="py-6">
        <h2 className="text-xl font-semibold mb-1">Film References</h2>
        <p className="text-gray-400 leading-relaxed text-sm mb-4 max-w-2xl">
          Speed, blur, dust, and a body fully committed to the machine. These
          references define the motion language of the film — fast panning
          shots, motion blur as a storytelling tool, light kicking through dust
          clouds.
        </p>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {filmRefs.map((img, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden rounded-sm">
              <LazyImage
                src={img.src}
                alt={img.alt}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
