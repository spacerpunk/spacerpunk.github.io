interface ImageGridProps {
    images: {
      src: string;
      alt: string;
      title?: string;
      aspect?: 'square' | 'video' | 'portrait' | 'custom';
      customAspect?: string;
    }[];
    columns?: 2 | 3 | 4 ;
  }
  
  const ImageGrid = ({ images, columns = 3 }: ImageGridProps) => {
    const gridCols = {
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    };
  
    const aspectRatios = {
      square: 'aspect-square', // 1:1
      video: 'aspect-video',   // 16:9
      portrait: 'aspect-[3/4]', // 3:4
      custom: '' // Will use customAspect if provided
    };
  
    return (
      <div className={`grid ${gridCols[columns]} gap-4 p-4`}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300
              ${image.aspect ? aspectRatios[image.aspect] : 'aspect-square'}`}
            style={image.customAspect ? { aspectRatio: image.customAspect } : undefined}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                <p className="text-white text-sm font-bold">{image.title}</p>
              </div>
            )} */}
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageGrid;