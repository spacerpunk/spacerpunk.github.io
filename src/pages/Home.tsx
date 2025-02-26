import React, { useRef, useState, useEffect } from 'react';
import video01 from '../assets/Home/vid01.mp4'
import image01 from '../assets/Home/image01.png'
import music01 from '../assets/Home/music01.mp3'

type MediaItem = {
  id: number;
  image: string; // URL for the first frame preview
  video: string;
  audio: string;
  audioStartOffset?: number; // Optional audio start offset in seconds
  title?: string; // Optional title
  description?: string; // Optional description
  links?: { text: string; url: string }[]; // Optional links
};

const mediaItems: MediaItem[] = [
  {
    id: 1,
    image: image01,
    video: video01,
    audio: music01,
    audioStartOffset: 2, // Start audio 5 seconds in
    title: 'Delta City',
    description: 'Why are we even trying?',
    links: [
      { text: 'Official Website', url: 'https://peach.blender.org/' },
      { text: 'Watch in HD', url: 'https://www.youtube.com/watch?v=YE7VzlLtp-4' }
    ]
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300x500?text=First+Frame+2',
    video: 'https://www.w3schools.com/html/movie.mp4',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    audioStartOffset: 10, // Start audio 10 seconds in
    title: 'Sample Video',
    description: 'This is a demonstration video used for HTML5 video element examples.',
    links: [
      { text: 'Learn more', url: 'https://www.w3schools.com/html/html5_video.asp' }
    ]
  },
  // ... add more items as needed
];

type MediaCardProps = {
  item: MediaItem;
  onClick: (item: MediaItem) => void;
  width: number; // Accept width as a number for pixels
  aspectRatio: string; // Accept aspect ratio as a prop
};

const MediaCard: React.FC<MediaCardProps> = ({ item, onClick, width, aspectRatio }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    
    // Start video from beginning
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
    
    // Start audio with offset if specified
    if (audioRef.current) {
      if (item.audioStartOffset && item.audioStartOffset > 0) {
        audioRef.current.currentTime = item.audioStartOffset;
      } else {
        audioRef.current.currentTime = 0;
      }
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(item)}
    >
      {/* Use inline style for width */}
      <div style={{ width: `${width}px` }}>
        {/* Dynamic aspect ratio container based on props */}
        <div className={`relative ${aspectRatio} rounded-lg overflow-hidden`}>
          {/* Show the image when not hovering */}
          {!isHovering && (
            <img 
              src={item.image} 
              alt="Preview" 
              className="w-full h-full object-cover absolute inset-0" 
            />
          )}
          
          {/* Video stays in DOM but is hidden when not hovering */}
          <video
            ref={videoRef}
            src={item.video}
            loop
            muted
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover absolute inset-0 ${isHovering ? 'visible' : 'invisible'}`}
          />
          <audio ref={audioRef} src={item.audio} />
        </div>
      </div>
    </div>
  );
};

type ModalProps = {
  item: MediaItem;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted

  // Toggle mute state
  const toggleMute = () => {
    if (videoRef.current && audioRef.current) {
      const newMuteState = !isMuted;
      setIsMuted(newMuteState);
      audioRef.current.muted = newMuteState;
    }
  };

  // Play both video and audio when component mounts
  useEffect(() => {
    if (videoRef.current && audioRef.current) {
      // Set initial muted state (unmuted)
      audioRef.current.muted = isMuted;
      
      // Set audio offset if specified
      if (item.audioStartOffset && item.audioStartOffset > 0) {
        audioRef.current.currentTime = item.audioStartOffset;
      }
      
      // Start playback
      const playMedia = async () => {
        try {
          if (videoRef.current) {
            await videoRef.current.play();
          }
          if (audioRef.current) {
            await audioRef.current.play();
          }
        } catch (error) {
          console.error("Error playing media:", error);
        }
      };
      
      playMedia();
    }
    
    // Cleanup on unmount
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [item.audioStartOffset]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-lg overflow-hidden max-w-6xl w-full flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button (X) */}
        <button 
          className="absolute top-3 right-3 z-10 text-gray-600 hover:text-gray-900 bg-white bg-opacity-75 rounded-full p-1"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Video container - maintains original aspect ratio */}
        <div className="w-full md:w-2/3 relative">
          <div className={`relative ${item.aspectRatio || 'aspect-[4/5]'}`}>
            <video
              ref={videoRef}
              src={item.video}
              controls
              loop
              poster={item.image}
              className="w-full h-full object-contain"
            />
            {/* Hidden audio element */}
            <audio 
              ref={audioRef} 
              src={item.audio} 
              loop 
              className="hidden"
            />
          </div>
          
          {/* Mute/Unmute button */}
          <button 
            className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80"
            onClick={toggleMute}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Description and links */}
        <div className="w-full md:w-1/3 p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">{item.title || 'Media Item'}</h2>
          <p className="text-gray-700 mb-6">{item.description || 'No description available.'}</p>
          
          {item.links && item.links.length > 0 && (
            <div className="mt-auto">
              <h3 className="text-lg font-semibold mb-2">Links</h3>
              <ul className="space-y-2">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {link.text} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

type HoverMediaGridProps = {
  containerWidth?: number; // Default card width in pixels
  aspectRatio?: string; // Default aspect ratio
  gap?: number; // Gap between items in pixels
  minColumns?: number; // Minimum number of columns
  maxColumns?: number; // Maximum number of columns
};

const HoverMediaGrid: React.FC<HoverMediaGridProps> = ({
  containerWidth = 240, // Default width in pixels
  aspectRatio = 'aspect-[4/5]', // Default aspect ratio
  gap = 16, // Default gap in pixels
  minColumns = 1,
  maxColumns = 6,
}) => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (item: MediaItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="p-4" ref={containerRef}>
      {/* Custom grid container with inline styles for precise control */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, minmax(${containerWidth}px, 1fr))`,
          gap: `${gap}px`,
          justifyContent: 'center'
        }}
      >
        {mediaItems.map((item) => (
          <MediaCard 
            key={item.id} 
            item={item} 
            onClick={handleCardClick}
            width={containerWidth}
            aspectRatio={aspectRatio}
          />
        ))}
      </div>
      {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
    </div>
  );
};

export default HoverMediaGrid;