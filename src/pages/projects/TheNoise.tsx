import BANNER from '../../assets/Images/TheNoise-Banner.png';
import TheNoise01 from '../../assets/Videos/thenoise01.mp4';

const TheNoise = () => {
  return (
    <div className="w-full pt-0 pr-0 pl-0 p-4 background-gray-800">
      <div className="w-full pb-4 background-gray-800">
        <img src={BANNER} alt="TheNoiseTeaser" className="w-full h-auto" />
      </div>
      <h1 className="text-2xl text-semibold text-gray-800 font-bold">
        The Noise
      </h1>
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
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <h2 className="w-full text-normal font-semibold pt-4">CONCEPT</h2>
        <h3 className="w-full text-sm font-light pt-2 pb-4">
          Researching and falling deep on a Close Encounters, Random Event
          Generators, UFOs and Liminal spaces rabbit hole I came up with and
          idea for a story (Actually it was a video game first). A world,
          characters, events, interactions and lore for a world in which my
          story develops. I don't like to think of it as a Film, Book or
          Game...it's an idea, a SPACE, and I'd like to explore it and see what
          outputs I can get from it. Go deep into it and see what I can come out
          with. Concept work will be feautred here as well as the process of
          using this creative space to generate Art, working towards making a
          Short Horror First Person Retro Game and a Short Film. I like the idea
          of creating things that may exist in the universe that I'm writing
          about. For that I'm also prototyping some Electronic Devices that
          generate Sounds with AI and data from weird events
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
          <p>
            Reference Images, Storyboard Images and some of the were later used
            for img2vid AI generation.
          </p>
        </h3>
        <h2 className="w-full font-light py-4">Short Film Clips (WIP)</h2>
        <h2 className="w-full font-light py-4">The Story</h2>
        <h2 className="w-full font-light py-4">
          Design and Generate with AI - Storyboard
        </h2>
        <h3 className="text-sm">ComfyUI - FLUX</h3>
        <h3 className="text-sm">Text2Speech</h3>
        <h3 className="text-sm">PyramidFlow, Runway, LTX</h3>
        <h2 className="w-full font-light py-4">The Game</h2>
        <h2 className="w-full font-light py-4">
          SoundDesign App with Electronics
        </h2>
      </div>
    </div>
  );
};

export default TheNoise;
