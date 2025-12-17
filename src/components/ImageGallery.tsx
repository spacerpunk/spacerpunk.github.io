// components/ImageGallery.tsx
type ImgItem = {
  src: string;
  alt?: string;
  title?: string;
};

export default function ImageGallery({ images }: { images: ImgItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-2">
      {images.map((img, i) => (
        <figure key={i} className="rounded-lg overflow-hidden">
          {/* w-full + h-auto keeps the native proportions */}
          <img
            src={img.src}
            alt={img.alt ?? ""}
            className="w-full h-full object-cover"
            //className="block w-full h-100"
            loading="lazy"
          />
          {img.title && (
            <figcaption className="mt-1 text-xs text-neutral-500">
              {img.title}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
