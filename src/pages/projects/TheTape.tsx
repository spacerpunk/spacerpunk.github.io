import TheTape01 from '../../assets/TheTape/thetape (5).png';
import TheTape02 from '../../assets/TheTape/thetape (2).png';
import TheTape03 from '../../assets/TheTape/thetape (6).png';
import TheTape04 from '../../assets/TheTape/thetape (3).png';
import ImageGrid from './ImageGrid';
import BANNER from '../../assets/TheTape/BannerTape.png';

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
  return (
    <div className="p-4">
      <h2 className="w-full font-light py-6">
        <div className="w-full pb-4 background-gray-800">
          <img src={BANNER} alt="TheNoiseTeaser" className="w-full h-auto" />
        </div>
      </h2>
      <h1 className="text-2xl text-semibold text-gray-800 font-bold">
        The Tape (2021) - Unreal Engine Short Film
      </h1>
      <div>
        <h3 className="w-full font-extralight text-sm py-1 text-nasared">
          #unrealengine #vfx #blender #music #rendering #modeling
        </h3>
        <h2 className="w-full font-light py-4">
          <p>The tape is a short concept film to learn Unreal Engine.</p>
          <br />
          <p>
            I wanted to focus on light, rendering and getting a simple story and
            short film from a few assets from the Unreal Library.
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
            I always make original music and sound design for my projects and
            this was not the exception, I love the last part of the process of
            making a film, getting to add my music and SFX always gets me into a
            flow state.
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
          The idea came from listening to some old EVP (Electronic Voice
          Phenomenon) recordings. The idea of a old cassette recording that
          someone can disect and recover to find strange and paranormal sounds.
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
