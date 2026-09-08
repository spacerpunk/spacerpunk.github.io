import { useLanguage } from '../../contexts/LanguageContext';

export default function Atea() {
  const es = useLanguage().lang === 'es';
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold ">
        {es ? 'ATEA — 24hs de música original' : 'ATEA 24hs of original music'}
      </h1>
      <p className="text-1xl font-semibold ">
        <a href="https://spacerpunk.bandcamp.com/album/atea-tracks">
          {es ? 'MÚSICA' : 'MUSIC'}
        </a>
      </p>
      <h1 className="text-2xl text-semibold font-bold">
        Dove: Real Virtual Beauty
      </h1>
      <div>
        <h3 className="w-full font-extralight text-sm py-1 text-nasared">
          #rigging #unrealengine #blender #animation #characters
        </h3>

        <h2 className="w-full text-italic font-normal pt-4">
          {es
            ? 'ATEA es una marca de ropa para la cual creé 12hs de música original para un video de playlist chill. (Lamentablemente el video salió de línea). Acá hay algunos extractos del score en Bandcamp'
            : 'ATEA is a clothing brand for which I created 12hs of original music for a Chill Playlist Video. (Sadly the video went offline). Here is some extracts of the Score on Bandcamp'}
          <iframe
            src="https://bandcamp.com/EmbeddedPlayer/album=765318260/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://spacerpunk.bandcamp.com/album/atea-tracks">
              ATEA - Tracks by Spacerpunk
            </a>
          </iframe>
        </h2>
      </div>
    </div>
  );
}
