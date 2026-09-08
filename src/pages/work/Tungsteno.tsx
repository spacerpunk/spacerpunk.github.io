//import BANNER from '../../assets/Images/TheNoise-Banner.png';
//import SPLIT from '../../assets/Images/TheNoise-Banner.png';
import PRINGLES from '../../assets/Tungsteno/pringles.png';
import LEGENDS from '../../assets/Tungsteno/legends.png';
import { useLanguage } from '../../contexts/LanguageContext';

const Tungsteno = () => {
  const es = useLanguage().lang === 'es';
  const site = es ? 'Miralo en el sitio oficial ' : 'Check it out on the official website ';
  const here = es ? 'Acá.' : 'Here.';
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white">
        VFX + Audio Director @
        <a
          className="font-black text-green-500"
          href="https://tungstenofilms.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tungsteno Films
        </a>
      </h1>
      {/* <div className="w-full pb-4 background-gray-800">
        <img src={BANNER} alt="TheNoiseTeaser" className="w-full h-auto" />
      </div> */}
      <div>
        <h3 className="w-full font-extralight text-sm py-1 text-nasared">
          #films #sounddesign #vfx #originalmusic #editing
        </h3>
        <h2 className="w-full text-italic font-normal pt-4 text-white">
          {es
            ? 'De 2016 a 2021 trabajé como Director de Audio y más tarde como VFX & 3D Generalist en esta productora de cine indie de Buenos Aires (hoy también en Barcelona). Hice 4 cortometrajes, 1 piloto de serie de 45 minutos, una serie animada semanal, pitches en Unreal Engine para clientes, un montón de música original, y aprendí Blender, Unity, Unreal Engine y muchas cosas más.'
            : 'From 2016 to 2021 I worked as an Audio Director and later as a VFX & 3D Generalist at this Indie Film Company in Buenos Aires (now also in Barcelona). I did 4 short films, 1 45 minutes series pilot, an animated weekly series, Unreal Engine Pitches for clients, a lot of original music, learned Blender, Unity, Unreal Engine and many more.'}
        </h2>
        <h2 className="w-full text-italic font-normal pt-4 pb-4 text-white ">
          {es ? 'Estos son algunos de los proyectos en los que trabajé.' : 'These are some of the projects I worked on.'}
        </h2>
        {/* <div className="w-full pb-4 background-gray-800">
          <img src={SPLIT} alt="TheNoiseTeaser" className="w-full h-auto" />
        </div> */}

        <h2 className="w-full text-normal font-semibold pt-8 text-white">
          Tungsteno Intro
        </h2>
        <h3 className="w-full text-sm font-light pt-2 pb-4 text-white">
          <p className="w-full text-sm font-light pt-2 pb-4">
            {es
              ? '¡Este es el intro a medida de la productora, para el cual hice el 40% de la Animación 3D, el Rendering y el Shading, además del Diseño de Sonido completo de la escena!'
              : 'This is the custom intro for the Film Company, for which I did 40% of the 3D Animation, Rendering, and Shading. As well as the Full Sound Design of the scene!'}{' '}
          </p>
          <p className="w-full text-sm font-light pt-2 pb-4">
            {es
              ? 'Se hizo 100% en Blender, animado a mano y compositado en Davinci Resolve. El diseño de sonido se hizo 100% en Ableton Live.'
              : 'It was done 100% in Blender, animated by hand and composited in Davinci Resolve. The Sound design was done 100% in Ableton Live.'}{' '}
          </p>
          <p className="w-full text-sm font-light pt-2 pb-4">
            {site}
            <a
              className="font-black text-green-500"
              href="https://tungstenofilms.com/tungsteno"
              target="_blank"
              rel="noopener noreferrer"
            >
              {here}
            </a>
          </p>
          <iframe
            src="https://player.vimeo.com/video/368534828?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="1280"
            height="720"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Tungsteno Films Introduction"
          ></iframe>
        </h3>
        <h2 className="w-full text-normal font-semibold pt-8">
          {es ? 'The Rift — Cortometraje' : 'The Rift - Short Film'}
        </h2>
        <h3 className="w-full text-sm font-light pt-2 pb-4">
          <p className="w-full text-sm font-light pt-2 pb-4">
            {es
              ? 'The Rift ("La Grieta") es un cortometraje sobre un grupo de hermanos que escapan de un villano misterioso y extrañamente western que busca un objeto especial.'
              : 'The Rift ("La Grieta") is a Short Film about a group of brothers escaping from a mysterious and weirdly western villain with a wanted special object.'}{' '}
          </p>
          <p>
            {es
              ? 'Estuve involucrado en todos los aspectos de la producción de audio: grabación en sitio, regrabación, diseño de sonido, edición, mezcla, composición de la música original y la mezcla final 5.1.'
              : 'I was involved in all aspects of audio production: In Site recording, Re Recording, Sound Design, Editing, Mixing, Writing the Original Music and final 5.1 mix.'}{' '}
          </p>
          <p>
            {es
              ? 'En este caso también participé en algo del VFX, como los fogonazos de disparos, el camera tracking y el rendering 3D.'
              : 'I was also in this case involved on some of the VFX, like Muzzle Flashes, Camera Tracking and 3D Rendering.'}{' '}
          </p>
          <p className="w-full text-sm font-light pt-2 pb-4">
            {site}
            <a
              className="font-black text-green-500"
              href="https://tungstenofilms.com/lagrieta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {here}
            </a>
          </p>
          <iframe
            src="https://player.vimeo.com/video/350810904?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="1280"
            height="720"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="★ La Grieta ★"
          ></iframe>
          <p className="pt-4">
            <a
              className="text-sm font-black text-nasared"
              href="https://spacerpunk.bandcamp.com/album/la-grieta-original-music-from-the-short-film"
              target="_blank"
              rel="noopener noreferrer"
            >
              SOUNDTRACK
            </a>
          </p>
        </h3>
        <h2 className="w-full text-normal font-semibold pt-8">
          {es ? 'Abismo — Episodio 1 (Piloto)' : 'Abismo - Episode 1 (Pilot)'}
        </h2>
        <h3 className="w-full text-sm font-light pt-2 pb-4">
          <p className="w-full text-sm font-light pt-2 pb-4">
            {es
              ? 'Abyss (o "Abismo") es el piloto de una serie de ciencia ficción de 8 episodios que el estudio planeaba hacer; lamentablemente solo se hizo el piloto. Estuve involucrado en todos los aspectos de la producción de audio: grabación en sitio, regrabación, diseño de sonido, edición, mezcla, composición de la música original y la mezcla final 5.1.'
              : 'Abyss or (Abismo) is the pilot for an 8 Episode Science Fiction Series the studio was planing on doing, unfortunately they only did the pilot. I was involved in all aspects of audio production: In Site recording, Re Recording, Sound Design, Editing, Mixing, Writing the Original Music and final 5.1 mix.'}{' '}
          </p>
          <p className="w-full text-sm font-light pt-2 pb-4">
            {site}
            <a
              className="font-black text-green-500"
              href="https://tungstenofilms.com/abyss"
              target="_blank"
              rel="noopener noreferrer"
            >
              {here}
            </a>
          </p>
          <iframe
            src="https://player.vimeo.com/video/327353190?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="1280"
            height="720"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="ABYSS - Teaser"
          ></iframe>
          <p className="pt-4">
            <a
              className="text-sm font-black text-nasared"
              href="https://spacerpunk.bandcamp.com/album/abismo-nomofobia-music-from-the-original-series"
              target="_blank"
              rel="noopener noreferrer"
            >
              SOUNDTRACK
            </a>
          </p>
        </h3>
        <h2 className="w-full text-normal font-semibold pt-8">
          {es ? 'NO! — Cortometraje' : 'NO! - Short Film'}
        </h2>
        <h3 className="w-full text-sm font-light pt-2 pb-2">
          <p className="w-full text-sm font-light pt-2 pb-4">
            {es
              ? '"NO" es un cortometraje que aborda la violenta realidad de la violencia de género en Argentina. Sigue creciendo año tras año a un ritmo alarmante. En menos de 24hs esto va a volver a pasar. Estuve de nuevo a cargo de toda la producción de audio: grabación en set, regrabación, edición, mezcla, banda sonora original y una mezcla final 5.1 para proyectarse en el Festival Internacional de Cine de Mar del Plata.'
              : '"NO" is a short film that deals with the violent reality of gender violence in Argentina. It keeps growing year after year at an alarming rate. in less than 24hs this will happen again. I was in charge again of the whole audio production, In Set Recording, Re Recording, Editing, Mixing, Original Soundtrack and a final 5.1 mix to screen on the "Mar del Plata International Film Festival".'}{' '}
          </p>
          <p className="w-full text-sm font-light pt-2 pb-4">
            {site}
            <a
              className="font-black text-green-500"
              href="https://tungstenofilms.com/no"
              target="_blank"
              rel="noopener noreferrer"
            >
              {here}
            </a>
          </p>
          <iframe
            src="https://player.vimeo.com/video/232048661?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="1280"
            height="720"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="NO!"
          ></iframe>
          <p className="pt-4">
            <a
              className="text-sm font-black text-nasared"
              href="https://spacerpunk.bandcamp.com/album/no-original-short-film-soundtrack"
              target="_blank"
              rel="noopener noreferrer"
            >
              SOUNDTRACK
            </a>
          </p>
        </h3>
        <h2 className="w-full text-normal font-semibold pt-8">
          {es ? 'Los Gloder — Serie Animada Semanal' : 'Los Gloder - Animated Weekly Series'}
        </h2>
        <h3 className="w-full text-sm font-light pt-2 pb-2">
          <p className="w-full text-sm font-light pt-2 pb-4">
            {es
              ? 'Esta era una serie semanal de reseñas de videojuegos hecha por nosotros. Trabajé en la animación 2D de los personajes, la edición de video, el diseño de sonido y la música original del intro de cada semana.'
              : "This was a Weekly Video Game review series done by us. I worked on the 2D animation of the characerts, Video Editing, Sound Design and Original Music for each week's intro."}{' '}
          </p>

          <iframe
            src="https://player.vimeo.com/video/292715098?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="1280"
            height="720"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Los Glouder Trailer"
          ></iframe>
          <p className="pt-4">
            <a
              className="text-sm font-black text-nasared"
              href="https://spacerpunk.bandcamp.com/album/scoring-lagfiles"
              target="_blank"
              rel="noopener noreferrer"
            >
              SOUNDTRACK
            </a>
          </p>
        </h3>
        <h2 className="w-full text-normal font-semibold pt-8">
          {es ? 'Legends "The Home of Football" — Mezcla Final 5.1' : 'Legends "The Home of Football" - Final 5.1 Mix'}
        </h2>
        <h3 className="w-full text-sm font-light pt-2 pb-2">
          <div className="w-full pb-4 background-gray-800">
            <img src={LEGENDS} alt="Papita" className="w-80 h-auto" />
          </div>
          <p className="w-full text-sm font-light pt-2 pb-4">
            {es
              ? 'Es una experiencia especial en el Museo del Fútbol de Barcelona. Hice la mezcla final 5.1 y el diseño de sonido.'
              : 'This is an special experience on the Museum of Football in Barcelona. I did the final 5.1 mix and Sound Design for it.'}{' '}
          </p>
          <p className="w-full text-sm font-light pt-2 pb-4">
            {site}
            <a
              className="font-black text-green-500"
              href="https://tungstenofilms.com/legends"
              target="_blank"
              rel="noopener noreferrer"
            >
              {here}
            </a>
          </p>
        </h3>
        <h2 className="w-full text-normal font-semibold pt-8">
          Pringles Socials
        </h2>
        <h3 className="w-full text-sm font-light pt-2 pb-2">
          <div className="w-full pb-4 background-gray-800">
            <img src={PRINGLES} alt="Papita" className="w-80 h-auto" />
          </div>
          <p className="w-full text-sm font-light pt-2 pb-4">
            {es
              ? 'Posteos para redes de Pringles hechos 100% en Unreal Engine y Blender. Animación, Rendering, Compositing.'
              : 'Social posts for Pringles done 100% in Unreal Engine and Blender. Animation, Rendering, Compositing.'}{' '}
          </p>
          <p className="w-full text-sm font-light pt-2 pb-4">
            {site}
            <a
              className="font-black text-green-500"
              href="https://tungstenofilms.com/pringles"
              target="_blank"
              rel="noopener noreferrer"
            >
              {here}
            </a>
          </p>
        </h3>
        <h3 className="w-full text-sm font-light pt-2 pb-4">
          <p></p>
        </h3>
      </div>
    </div>
  );
};

export default Tungsteno;
