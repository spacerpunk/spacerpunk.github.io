import BANNER from '../../assets/Images/TheNoise-Banner.png';
import TheNoise01 from '../../assets/Videos/thenoise01.mp4';
import TheNoise05 from '../../assets/Videos/thenoise05.mp4';
import TheNoiseImage01 from '../../assets/Images/thenoise1.png';
import TheNoiseImage02 from '../../assets/Images/thenoise2.png';
import TheNoiseImage03 from '../../assets/Images/thenoise3.png';
import TheNoiseImage04 from '../../assets/Images/thenoise4.png';
import TheNoiseImage05 from '../../assets/Images/thenoise5.png';
import TheNoiseImage06 from '../../assets/Images/thenoise6.png';
import TheNoiseImage07 from '../../assets/Images/thenoise7.png';
import TheNoiseImage08 from '../../assets/Images/thenoise8.png';
import TheNoiseImage09 from '../../assets/Images/thenoise9.png';
import TheNoiseImage010 from '../../assets/Images/thenoise10.png';
import TheNoiseImage011 from '../../assets/Images/thenoise11.png';
import TheNoiseImage012 from '../../assets/Images/thenoise12.png';
import TheNoiseImage013 from '../../assets/Images/thenoise13.png';
import TheNoiseImage014 from '../../assets/Images/thenoise14.png';
import TheNoiseImage015 from '../../assets/Images/thenoise15.png';
import TheNoiseImage016 from '../../assets/Images/thenoise16.png';
import TheNoiseImage017 from '../../assets/Images/thenoise17.png';
import TheNoiseImage018 from '../../assets/Images/thenoise18.png';
import ImageGrid from './ImageGrid';

const imageList = [
  {
    src: TheNoiseImage01,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage02,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage014,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage03,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage012,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage04,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
];

const imageList2 = [
  {
    src: TheNoiseImage015,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage08,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage010,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage013,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage09,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage016,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
];

const imageList3 = [
  {
    src: TheNoiseImage011,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage017,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage06,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage018,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage07,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: TheNoiseImage05,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
];

const TheNoise = () => {
  return (
    <div className="w-full pt-0 pr-0 pl-0 p-4 background-gray-800">
      <div className="w-full pb-4 background-gray-800">
        <img src={BANNER} alt="TheNoiseTeaser" className="w-full h-auto" />
      </div>
      <h1 className="text-2xl text-semibold font-bold">The Noise</h1>
      <div>
        <h3 className="w-full font-extralight text-sm py-1 text-nasared">
          #flux-ai #generativeai #blender #unrealengine #music #python #vfx
        </h3>
        <h3 className="text-normal font-semibold pt-4 pb-4">Moody Playlist</h3>
        <iframe
          className="md:flex"
          src="https://open.spotify.com/embed/playlist/3S0sljsAvx3rlWQlZJDkag?utm_source=generator&theme=0"
          width="50%"
          height="152"
          // frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <h2 className="w-full text-normal font-semibold pt-4">
          The Noise - Horror Series - Small Short Videos and Clips and
          Experiences to piece together a big Story at S4
        </h2>
        <h3 className="w-full text-sm font-light pt-2 pb-4">
          <p>
            Researching and falling deep on a Close Encounters, Random Event
            Generators, UFOs and Liminal spaces rabbit hole I came up with and
            idea for a story (Actually it was a video game first).{' '}
          </p>
          <p>
            A world, characters, events, interactions and lore for a world. I
            don't want to think of it as a Film, Book or Game...it's an idea.{' '}
          </p>
          <p>
            A SPACE, and I'd like to explore it and see what outputs I can get
            from it.
          </p>
          <p>
            I like the idea of creating things that may exist in the universe
            that I'm writing about.
          </p>
          <p>
            And if you pay attention to each small piece you may figure out the
            whole thing.
          </p>
        </h3>
        <div className="relative w-full h-[200px] my-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src={TheNoise01} type="video/mp4" />
          </video>
        </div>
        <h2 className="w-full font-light py-4">Stills</h2>
        <h3>
          <p>AI Generated Concept Art.</p>
          <p className="w-full font-light text-sm pt-2">
            Created using Flux and ComfyUI.
          </p>

          <h2 className="w-full font-normal py-4 text-nasared">
            <div className="container mx-auto">
              <ImageGrid
                images={imageList}
                columns={3} // Optional: 2, 3, or 4 columns
              />
            </div>
          </h2>
          <h2>
            <p className="w-full font-light text-sm py-0">
              I created a custom Flux Workflow using input images with blur and
              a high denoise value, this way I can control the lighting of the
              images and composition.
            </p>
          </h2>

          <h2 className="w-full font-normal py-4 text-nasared">
            <div className="container mx-auto">
              <ImageGrid
                images={imageList2}
                columns={3} // Optional: 2, 3, or 4 columns
              />
            </div>
          </h2>

          <div className="relative w-full h-[200px] my-8">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover"
            >
              <source src={TheNoise05} type="video/mp4" />
            </video>
          </div>

          <h2 className="w-full font-normal py-4 text-nasared">
            <div className="container mx-auto">
              <ImageGrid
                images={imageList3}
                columns={3} // Optional: 2, 3, or 4 columns
              />
            </div>
          </h2>
        </h3>
        <h2 className="w-full font-light py-4">The Story</h2>
        <h2 className="w-full font-light py-4">
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/_22onA4dyhs?si=ggjkxXk-ZSHbEZA5"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </h2>
        <h2 className="w-full font-light py-4">
          Unreal Engine
          <h3 className="text-normal text-nasared font-bold">WIP</h3>
        </h2>
      </div>
    </div>
  );
};

export default TheNoise;
