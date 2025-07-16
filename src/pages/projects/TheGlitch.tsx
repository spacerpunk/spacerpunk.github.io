import glitchgiff1 from '../../assets/TheGlitch/glitch1.gif';
import glitchgiff2 from '../../assets/TheGlitch/glitchV1.gif';
import glitchgiff3 from '../../assets/TheGlitch/glitchV3.gif';

export default function TheGlitch() {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-semibold font-bold">
        The Glitch - Unity 2D Platformer (Controling Music with Movement)
      </h1>
      <div>
        <h3 className="w-full font-extralight text-sm py-1 text-nasared">
          #unity #c-sharp #2d #music #programming #animation
        </h3>
        <div className="w-100 pb-4 background-gray-800">
          <img src={glitchgiff3} alt="TheNoiseTeaser" className="h-100" />
        </div>
        <h2 className="w-full font-light py-4">
          2D Pixel Art Platformer done for a Game Jam in Unity in 2021. I joined
          the Jam alone and couldn't make it in time but it took one week extra
          only.
        </h2>
        <h2 className="w-full font-light py-4">
          The main idea was that you control music with movement, and that your
          "lives" would add or remove musical elements from the Original Score
          as well as slowing down the tempo. So if you are playing well the
          whole soundtrack should play at full speed, and if you are playing bad
          maybe only the bass is playing (which is sad so play well!).
        </h2>
        <h2 className="w-full font-light py-4">
          <iframe
            src="https://bandcamp.com/EmbeddedPlayer/album=839502178/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://spacerpunk.bandcamp.com/album/the-glitch">
              The Glitch by Spacerpunk
            </a>
          </iframe>
        </h2>

        <div className="w-100 pb-4 background-gray-800">
          <img src={glitchgiff1} alt="TheNoiseTeaser" className="h-100" />
        </div>

        <iframe
          frameBorder="0"
          src="https://itch.io/embed/1632336"
          width="552"
          height="167"
        >
          <a href="https://nrequena.itch.io/the-glitch">
            The Glitch by NRequena
          </a>
        </iframe>
        <h2 className="w-full font-light py-4">
          The Glitch V2 - 2025 - 2026. I envision a different and better version
          of this idea that I want to explore this year if I get the time. Where
          the tempo and movement of the player is set and unchanged, and the
          Musical Elements just get added or removed depending on the lives you
          have.
        </h2>
        <div className="w-100 pb-4 background-gray-800">
          <img src={glitchgiff2} alt="TheNoiseTeaser" className="h-100" />
        </div>
      </div>
    </div>
  );
}
