import { useState, useEffect, useRef, VideoHTMLAttributes } from 'react';

interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  placeholderColor?: string;
}

export default function LazyVideo({
  src,
  placeholderColor = '#2a2a2a',
  className = '',
  ...props
}: LazyVideoProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px',
      },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoadedData={() => setIsLoading(false)}
          {...props}
        />
      )}
      {(!isInView || isLoading) && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: placeholderColor }}
        >
          {isLoading && isInView && (
            <div className="w-8 h-8 border-4 border-nasared border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>
      )}
    </div>
  );
}
