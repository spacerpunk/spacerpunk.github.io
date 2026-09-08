import TheTape01 from '../../assets/TheTape/thetape (5).png';
import TheTape02 from '../../assets/TheTape/thetape (2).png';
import TheTape03 from '../../assets/TheTape/thetape (6).png';
import TheTape04 from '../../assets/TheTape/thetape (3).png';
import ImageGrid from './ImageGrid';
import BANNER from '../../assets/TheTape/BannerTape.png';
import { useLanguage } from '../../contexts/LanguageContext';

const imageList = [
  {
    src: TheTape01,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheTape02,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheTape03,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheTape04,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
];

export default function TheTape() {
  const es = useLanguage().lang === 'es';
  return (
    <div className="p-4">
      <h2 className="w-full font-light py-6">
        <div className="w-full pb-4 background-gray-800">
          <img src={BANNER} alt="TheNoiseTeaser" className="w-full h-auto" />
        </div>
      </h2>
      <h1 className="text-2xl text-semibold font-bold">
        {es ? 'The Tape (2021) — Cortometraje en Unreal Engine' : 'The Tape (2021) - Unreal Engine Short Film'}
      </h1>
      <div>
        <h3 className="w-full font-extralight text-sm py-1 text-nasared">
          #unrealengine #vfx #blender #music #rendering #modeling
        </h3>
        <h2 className="w-full font-light py-4">
          <p>
            {es
              ? 'The Tape es un cortometraje conceptual para aprender Unreal Engine.'
              : 'The tape is a short concept film to learn Unreal Engine.'}
          </p>
          <br />
          <p>
            {es
              ? 'Quería enfocarme en la luz, el rendering y sacar una historia simple y un cortometraje a partir de unos pocos assets de la librería de Unreal.'
              : 'I wanted to focus on light, rendering and getting a simple story and short film from a few assets from the Unreal Library.'}
          </p>
          <h2 className="w-full font-normal py-4 text-nasared">
            <div className="container mx-auto">
              <ImageGrid
                images={imageList}
                columns={2} // Optional: 2, 3, or 4 columns
              />
            </div>
          </h2>
          <br />
          <p>
            {es
              ? 'Siempre hago música original y diseño de sonido para mis proyectos y este no fue la excepción. Amo la última parte del proceso de hacer un film: llegar a sumar mi música y mis SFX siempre me mete en estado de flow.'
              : 'I always make original music and sound design for my projects and this was not the exception, I love the last part of the process of making a film, getting to add my music and SFX always gets me into a flow state.'}
          </p>
          <br />
        </h2>
        <h2 className="w-full font-light py-4">
          <iframe
            src="https://bandcamp.com/EmbeddedPlayer/track=2612877663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://spacerpunk.bandcamp.com/track/the-tape">
              The Tape by Spacerpunk
            </a>
          </iframe>
        </h2>
        <h2 className="w-full font-light py-4">
          {es
            ? 'La idea surgió de escuchar viejas grabaciones de EVP (Fenómeno de Voz Electrónica). La idea de una vieja grabación en casete que alguien puede diseccionar y recuperar para encontrar sonidos extraños y paranormales.'
            : 'The idea came from listening to some old EVP (Electronic Voice Phenomenon) recordings. The idea of a old cassette recording that someone can disect and recover to find strange and paranormal sounds.'}
        </h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/K1BhmaMNmFk?si=ywwESySEK9QilgWw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 className="w-full font-light py-4">OST</h2>
      </div>
    </div>
  );
}
