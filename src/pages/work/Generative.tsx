import { useState } from 'react';

// Dynamically import all images and GIFs from the CT folder
const imageModules = import.meta.glob('../../assets/CT/**/*.{png,jpg,jpeg,gif,webp}', { eager: true });

// Optional: Add descriptions for specific files (you can edit these or add more)
const descriptions: Record<string, string> = {
  'QwenLeatt.png': 'Flux Image generation + Qwen Image Editing - Leatt product integration',
  'QwenFox.png': 'Flux Image generation + Qwen Image Editing - Fox product integration',
  'BG_01.png': 'Background generation with Flux & Qwen',
  'BG_02.png': 'AI-generated environment for product placement',
  'BG_03.png': 'Synthetic background - ComfyUI workflow',
  'BG_04.png': 'Generated scene with AI models',
  'BG_05.png': 'Custom environment creation',
  'BG_01_Edit.png': 'Product integration without lighting adjustments',
  'BG_02_Edit.png': 'Gear placement - pre-processing step',
  'BG_03_Edit.png': 'Initial product composite',
  'BG_04_Edit.png': 'Base composition layer',
  'BG_05_Edit.png': 'Product positioning stage',
  'BG_02_Qwen.png': 'Qwen model integration - final composite',
  'BG_03_Qwen.png': 'Context model processing',
  'BG_04_Qwen.png': 'Reference model integration',
  'BG_05_Qwen.png': 'Final upscale and detailer pass',
};

// Convert the modules object to an array of image data
const images = Object.entries(imageModules)
  .map(([path, module]) => {
    const filename = path.split('/').pop() || '';
    return {
      src: (module as { default: string }).default,
      filename,
      description: descriptions[filename] || filename.replace(/\.[^/.]+$/, ''),
    };
  })
  .sort(() => Math.random() - 0.5); // Randomize order

// Hover Image Component
function HoverImage({ src, description }: { src: string; description: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWide, setIsWide] = useState(false);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    // Consider images with aspect ratio > 1.5 as wide/landscape (16:9 is ~1.78)
    setIsWide(aspectRatio > 1.5);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg group cursor-pointer ${
        isWide ? 'col-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={description}
        className="w-full h-auto object-contain transition-opacity duration-300"
        loading="lazy"
        onLoad={handleImageLoad}
      />
      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-white text-sm text-center font-light">{description}</p>
      </div>
    </div>
  );
}

export default function Generative() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Gen AI </h1>
      <h2 className="text-lg font-light mb-6 text-nasared">
        experiments in AI generation, AI workflows, and creative coding, (some are old, AI improves every day)
      </h2>

      {/* Dynamic Grid with Hover Descriptions */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 auto-rows-auto">
        {images.map((image, index) => (
          <HoverImage key={index} src={image.src} description={image.description} />
        ))}
      </div>
    </div>
  );
}
