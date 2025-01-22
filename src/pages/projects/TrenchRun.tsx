import TrenchGif from '../../assets/Gifs/Trench.gif';
import ImageGrid from './ImageGrid';
import TrenchImage1 from '../../assets/Images/Trench1.png'
import TrenchImage2 from '../../assets/Images/Trench2.png'
import TrenchImage3 from '../../assets/Images/Trench3.png'
import TrenchImage4 from '../../assets/Images/Trench4.png'
import TrenchImage5 from '../../assets/Images/Trench5.png'
import TrenchImage6 from '../../assets/Images/Trench6.png'

const imageList = [
  {
    src: TrenchImage1,
    alt: "Description 1",
    title: "Optional Title 1",
    aspect: "video"
  },
  {
    src: TrenchImage2,
    alt: "Description 2",
    title: "Optional Title 2",
    aspect: "video"
  },
  {
    src: TrenchImage3,
    alt: "Description 3",
    aspect: "video"
  },
  {
    src: TrenchImage4,
    alt: "Description 3",
    aspect: "video"
  },
  {
    src: TrenchImage5,
    alt: "Description 3",aspect: "video"

  },
  {
    src: TrenchImage6,
    alt: "Description 3",
    aspect: "video"
  },
];

export default function TrenchRun() {
  return (
    <div className="p-4">
      <h2 className="w-full font-light py-6 pb-0">
      <img src={TrenchGif} alt="TheNoiseTeaser" className="w-full h-[152px] object-cover object-center" />
        </h2>
      {/* <h1 className="text-2xl text-semibold text-gray-800 font-bold">
        Tribute 3D Scenes Trench Run Star Wars
      </h1> */}
          <h3 className="w-full font-extralight text-sm py-1 text-nasared">
          #vfx #modeling #unrealengine #blender #starwars
          </h3>
        <h3 className="w-full font-light pt-6">
          <p>
          I wanted to do the shot of the Targeting Computer from the Trench Run over the weekend but I got a little carried away. And since UE5 is so cool and real time I got to do a bunch of shots in no time!
          </p>
        </h3>
        <h2 className="w-full font-normal py-4 text-nasared">
          <div className="container mx-auto">
            <ImageGrid 
              images={imageList} 
              columns={3} // Optional: 2, 3, or 4 columns
            />
          </div>
        </h2>
        <h2 className="w-full font-normal py-4">
          <p>A small tribute to the amazing Trench Run. Modeled the Targeting Computer and Death Star on Blender...Rendered on Blender and UE5, a bit of sound desing and a track from Battlefront 1.</p>
        </h2>
        {/* <h2 className="w-full font-normal py-4 text-nasared">
         Blender Part
        </h2>
        <h2 className="w-full font-normal py-4 text-nasared">
         Unreal Engine Part
        </h2> */}
        <h2 className="w-full font-normal py-4 text-nasared">
        <iframe width="100%" height="360" src="https://www.youtube.com/embed/eN-t8QMp024?si=wICBbB6RkG8tkHd1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </h2>

    </div>
  );
}
