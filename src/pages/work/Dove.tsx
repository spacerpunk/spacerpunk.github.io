import BANNER from '../../assets/Dove/Dove_Thumb.png';
import Dove0 from '../../assets/Dove/dove (1).png';
import Dove1 from '../../assets/Dove/dove (1).jpeg';
import Dove2 from '../../assets/Dove/dove (5).png';
import Dove3 from '../../assets/Dove/dove (5).jpg';
import Dove4 from '../../assets/Dove/dove (3).png';
import Dove5 from '../../assets/Dove/dove (6).png';
import ImageGrid from '../projects/ImageGrid';

const imageList = [
  {
    src: Dove0,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: Dove1,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: Dove2,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: Dove3,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: Dove4,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: Dove5,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
];

export default function Dove() {
  return (
    <div className="w-full pt-0 pr-0 pl-0 p-4 background-gray-800">
      <div className="w-full pb-4 background-gray-800">
        <img src={BANNER} alt="TheNoiseTeaser" className="w-full h-auto" />
      </div>
      <h1 className="text-2xl text-semibold text-gray-800 font-bold">
        Dove: Real Virtual Beauty
      </h1>
      <div>
        <h3 className="w-full font-extralight text-sm py-1 text-nasared">
          #rigging #unrealengine #blender #animation #characters
        </h3>

        <h2 className="w-full text-italic font-normal pt-4">
          Dove is entering the world of gaming with the global launch of Real
          Virtual Beauty, a series of commitments challenging the representation
          of beauty online, and changing education for self-esteem in the
          virtual realm.
        </h2>
        <div className="container mx-auto flex gap-4">
          <iframe
            src="https://player.vimeo.com/video/752877118?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="960"
            height="540"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="DOVE Real Virtual Beauty / LILY"
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/752876211?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="960"
            height="540"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="DOVE Real Virtual Beauty / COCO"
          ></iframe>
        </div>
        <h3 className="w-full text-sm font-light pt-2 pb-4">
          <p>
            For this project I worked together with{' '}
            <a
              className="text-sm font-semibold text-gray-800"
              href="https://tungstenofilms.com/projects"
            >
              Tungsteno Films, an Indie Film company from Buenos Aires,
              Argentina and Spain
            </a>
          </p>
          <p>
            My part was the character rigs, animation and a bit of scripting
            rendering both in Blender and Unreal Engine.{' '}
          </p>
          <p>
            It was my first dive into rigging in Blender and I had a lot ot
            learn.{' '}
          </p>
          <p>
            The timespan of the project was about 1 month so we had little time
            to test things, the designs were coming in fast and we had to adjust
            to the changes.
          </p>
          <p>
            The concept of project was to put real women inside video games, so
            gamers can chooste to use a real looking avatar.
          </p>
        </h3>
        <div className="container mx-auto flex gap-4">
          <iframe
            src="https://player.vimeo.com/video/753558503?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="960"
            height="540"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="DOVE Real Virtual Beauty / SAM"
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/752875432?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="960"
            height="540"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="DOVE Real Virtual Beauty / CINTHIA"
          ></iframe>
        </div>
        <h2 className="w-full font-light p-4">Some BTS of the process</h2>
        <div className="container mx-auto">
          <ImageGrid
            images={imageList}
            columns={3} // Optional: 2, 3, or 4 columns
          />
        </div>
        <h3>
          <p>Rigging done inside Blender</p>
          <p className="w-full font-light text-sm pt-2">
            Face animation was done with Mocap and the tweaked by hand in
            Blender and Unreal Engine.
          </p>
          <p className="w-full font-light text-sm py-0">
            I had to work with custom Python Scripts for blender to fix some
            FaceCapture issues.
          </p>
          <h2 className="w-full font-normal p-4 text-nasared"></h2>
          <h2>
            <p className="w-full font-light text-sm py-0">
              Check out the Behance Post!
            </p>
            <iframe
              src="https://www.behance.net/embed/project/153780873?ilo0=1"
              height="316"
              width="404"
              allowFullScreen
              frameBorder="0"
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </h2>
        </h3>
        <h2 className="w-full font-light py-4"></h2>
      </div>
    </div>
  );
}
