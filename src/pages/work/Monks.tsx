// Dynamically import all images from the Monks/ImageGen folder (including subfolders)
const imageModules = import.meta.glob('../../assets/Monks/ImageGen/**/*.{png,jpg,jpeg,gif,webp}', { eager: true });

// Convert the modules object to an array of image data
const images = Object.entries(imageModules).map(([path, module]) => {
  // Extract filename from path for alt text
  const filename = path.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'Monks work';
  return {
    src: (module as { default: string }).default,
    alt: filename,
  };
});

export default function Monks() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        some of my work @ Monks
      </h1>
      <h2 className="text-lg font-light mb-6 text-nasared">
        synthetic image generation for various brands
      </h2>

      {/* Dynamic Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
