import SEO from '../../components/SEO';
import LazyImage from '../../components/LazyImage';
import BG from '../../assets/Upload/BG.jpg';
import Pill from '../../assets/Upload/Pill.png';

export default function Upload() {
  return (
    <div className="w-full p-4 md:p-6">
      <SEO
        title="UPLOAD"
        description="Digital upload experiments exploring data transfer, connectivity, and virtual presence"
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">UPLOAD</h1>
      <div>
        <h3 className="font-extralight text-sm py-1 text-nasared">
          #upload #digital #datatransfer #connectivity #virtual
        </h3>

        <div className="py-6">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-400 leading-relaxed">
            An exploration of digital consciousness, data transfer, and the
            concept of uploading human experience into virtual space. Merging
            technology, philosophy, and visual storytelling to question the
            nature of existence in the digital age.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
          <div className="w-full">
            <LazyImage
              src={BG}
              alt="Upload - Digital Background"
              className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full">
            <LazyImage
              src={Pill}
              alt="Upload - Pill Concept"
              className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
