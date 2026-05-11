import SEO from '../../components/SEO';
import LazyImage from '../../components/LazyImage';

// Reference frames passed into Seedance
import Ref1 from '../../assets/Upload/Reference (1).png';
import Ref2 from '../../assets/Upload/Reference (2).png';
import Ref3 from '../../assets/Upload/Reference (3).png';
import Ref4 from '../../assets/Upload/Reference (4).png';
import Ref5 from '../../assets/Upload/Reference (5).png';
import Ref6 from '../../assets/Upload/Reference (6).png';

// Seedance 2.0 output videos
import Video1 from '../../assets/Upload/REFERENCE_TO_VIDEO_EXAMPLE_01.mp4';
import Video2 from '../../assets/Upload/REFERENCE_TO_VIDEO_EXAMPLE_02.mp4';
import Video3 from '../../assets/Upload/REFERENCE_TO_VIDEO_EXAMPLE_03.mp4';
import Video4 from '../../assets/Upload/REFERENCE_TO_VIDEO_EXAMPLE_04.mp4';

// Alt references & key visual
import AltRef1jpg from '../../assets/Upload/Alt_Ref (1).jpg';
import AltRef1png from '../../assets/Upload/Alt_Ref (1).png';
import AltRef2jpg from '../../assets/Upload/Alt_Ref (2).jpg';
import AltRef2png from '../../assets/Upload/Alt_Ref (2).png';
import AltRef4png from '../../assets/Upload/Alt_Ref (4).png';
import AltRef4jpg from '../../assets/Upload/Alt_Ref (4).jpg';
import AltRef5jpg from '../../assets/Upload/Alt_Ref (5).png';
import Pill from '../../assets/Upload/Pill.png';

const referenceFrames = [Ref1, Ref2, Ref3, Ref4, Ref5, Ref6];
const outputVideos = [Video1, Video2, Video3, Video4];
const altRefs = [AltRef1jpg, AltRef1png, AltRef2jpg, AltRef2png, AltRef4png, AltRef4jpg, AltRef5jpg, Pill];

// Placeholder — replace with actual Seedance prompt
const SEEDANCE_PROMPT = `[ PROMPT PLACEHOLDER ]

A figure dissolves into streams of luminous data, consciousness fragmenting into
packets of light as it ascends through a digital void. Hyper-real skin texture
transitions into cascading code. Cinematic, slow motion, cold blue and white
tones, volumetric light.`;

export default function Upload() {
  return (
    <div className="w-full p-4 md:p-6 max-w-5xl">
      <SEO
        title="UPLOAD"
        description="Digital upload experiments exploring data transfer, connectivity, and virtual presence"
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-1">UPLOAD</h1>
      <h3 className="font-extralight text-sm py-1 text-nasared mb-4">
        #upload #digital #datatransfer #seedance #videoAI
      </h3>

      <p className="text-gray-300 leading-relaxed mb-2 max-w-2xl">
        An exploration of digital consciousness and the concept of uploading human
        experience into virtual space — brought to life using Seedance 2.0's
        reference-to-video pipeline.
      </p>
      <p className="text-sm text-gray-500 leading-relaxed mb-10 max-w-2xl">
        Reference frames were art-directed and passed alongside a prompt into
        Seedance 2.0 to generate consistent, high-fidelity video outputs that
        stay true to the original visual concept.
      </p>

      {/* ── Reference Frames ── */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Reference Frames</h2>
        <p className="text-sm text-gray-400 mb-4">
          Six frames used as visual anchors for the Seedance 2.0 generation.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {referenceFrames.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border border-gray-800 hover:border-nasared transition-colors duration-200"
            >
              <LazyImage
                src={src}
                alt={`Reference frame ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Prompt ── */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Seedance 2.0 Prompt</h2>
        <div className="rounded-lg border border-nasared/30 bg-nasared/5 p-5">
          <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap leading-relaxed">
            {SEEDANCE_PROMPT}
          </pre>
        </div>
      </section>

      {/* ── Video Outputs ── */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-1">Seedance 2.0 Outputs</h2>
        <p className="text-sm text-gray-400 mb-4">
          Three generated examples from the same reference set and prompt.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {outputVideos.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border border-gray-800 hover:border-nasared transition-colors duration-200"
            >
              <video
                src={src}
                className="w-full h-full object-cover"
                controls
                muted
                loop
                playsInline
              />
              <p className="text-xs text-gray-500 p-2">Example {String(i + 1).padStart(2, '0')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Alt References & Pill ── */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-1">Alt References</h2>
        <p className="text-sm text-gray-400 mb-4">
          Additional reference material and key visual.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {altRefs.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border border-gray-800 hover:border-nasared transition-colors duration-200"
            >
              <LazyImage
                src={src}
                alt={`Alt reference ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
          <div className="overflow-hidden rounded-lg border border-gray-800 hover:border-nasared transition-colors duration-200">
            <LazyImage
              src={Pill}
              alt="Upload — Pill key visual"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
