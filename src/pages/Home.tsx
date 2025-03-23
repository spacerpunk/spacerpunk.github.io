import React, { useRef, useState, useEffect } from 'react';
import video01 from '../assets/Home/vid01.mp4';
import image01 from '../assets/Home/image01.png';
import music01 from '../assets/Home/music01.mp3';
import music02 from '../assets/Home/1968.mp3';
import music03 from '../assets/Home/ADRIFT.mp3';
import music04 from '../assets/Home/Analog Sunset.mp3';
import music05 from '../assets/Home/Androids.mp3';
import music06 from '../assets/Home/Controlled Machines.mp3';
import music07 from '../assets/Home/Pale Blue Dot (ft. Carl Sagan).mp3';
import music08 from '../assets/Home/Cyberpunk.mp3';
import music09 from '../assets/Home/And Then There Was Nothing.mp3';

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
    audioStartOffset: 1, // Start audio 5 seconds in
    title: 'Delta City',
    description: 'Why are we even trying?',
    links: [
      { text: 'Track on Bandcamp', url: 'https://peach.blender.org/' },
      {
        text: 'More Stuff',
        url: 'https://linktr.ee/spacerpunk',
      },
    ],
  },
  {
    id: 2,
    image: image01,
    video: video01,
    audio: music02,
    audioStartOffset: 10, // Start audio 10 seconds in
    title: 'Yeah',
    description: 'Why are we even trying?',
    links: [
      {
        text: 'More Stuff',
        url: 'https://linktr.ee/spacerpunk',
      },
    ],
  },
  {
    id: 3,
    image: image01,
    video: video01,
    audio: music03,
    audioStartOffset: 10, // Start audio 10 seconds in
    title: 'Yeah',
    description: 'Why are we even trying?',
    links: [
      {
        text: 'More Stuff',
        url: 'https://linktr.ee/spacerpunk',
      },
    ],
  },
  {
    id: 4,
    image: image01,
    video: video01,
    audio: music04,
    audioStartOffset: 10, // Start audio 10 seconds in
    title: 'Yeah',
    description: 'Why are we even trying?',
    links: [
      {
        text: 'More Stuff',
        url: 'https://linktr.ee/spacerpunk',
      },
    ],
  },
  {
    id: 5,
    image: image01,
    video: video01,
    audio: music05,
    audioStartOffset: 10, // Start audio 10 seconds in
    title: 'Yeah',
    description: 'Why are we even trying?',
    links: [
      {
        text: 'More Stuff',
        url: 'https://linktr.ee/spacerpunk',
      },
    ],
  },
  {
    id: 5,
    image: image01,
    video: video01,
    audio: music06,
    audioStartOffset: 10, // Start audio 10 seconds in
    title: 'Yeah',
    description: 'Why are we even trying?',
    links: [
      {
        text: 'More Stuff',
        url: 'https://linktr.ee/spacerpunk',
      },
    ],
  },
  {
    id: 5,
    image: image01,
    video: video01,
    audio: music07,
    audioStartOffset: 10, // Start audio 10 seconds in
    title: 'Yeah',
    description: 'Why are we even trying?',
    links: [
      {
        text: 'More Stuff',
        url: 'https://linktr.ee/spacerpunk',
      },
    ],
  },
  {
    id: 5,
    image: image01,
    video: video01,
    audio: music08,
    audioStartOffset: 10, // Start audio 10 seconds in
    title: 'Yeah',
    description: 'Why are we even trying?',
    links: [
      {
        text: 'More Stuff',
        url: 'https://linktr.ee/spacerpunk',
      },
    ],
  },
  {
    id: 5,
    image: image01,
    video: video01,
    audio: music09,
    audioStartOffset: 10, // Start audio 10 seconds in
    title: 'Yeah',
    description: 'Why are we even trying?',
    links: [
      {
        text: 'More Stuff',
        url: 'https://linktr.ee/spacerpunk',
      },
    ],
  },
  // ... add more items as needed
];

type MediaCardProps = {
  item: MediaItem;
  onClick: (item: MediaItem) => void;
  width: number; // Accept width as a number for pixels
  aspectRatio: string; // Accept aspect ratio as a prop
};

const MediaCard: React.FC<MediaCardProps> = ({
  item,
  onClick,
  width,
  aspectRatio,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeout = useRef<number | null>(null);

  const handleMouseEnter = () => {
    // Start a timeout to begin playback after 2 seconds
    hoverTimeout.current = window.setTimeout(() => {
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
    }, 500);
  };

  const handleMouseLeave = () => {
    // Clear the timeout if the user stops hovering before 2 seconds
    if (hoverTimeout.current !== null) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
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
      <div style={{ width: `${width}px` }}>
        <div className={`relative ${aspectRatio} rounded-lg overflow-hidden`}>
          {!isHovering && (
            <img
              src={item.image}
              alt="Preview"
              className="w-full h-full object-cover absolute inset-0"
            />
          )}
          <video
            ref={videoRef}
            src={item.video}
            loop
            muted
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover absolute inset-0 ${
              isHovering ? 'visible' : 'invisible'
            }`}
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
      // Set the audio element's muted property based on isMuted
      audioRef.current.muted = isMuted;

      // Set audio offset if specified
      if (item.audioStartOffset && item.audioStartOffset > 0) {
        audioRef.current.currentTime = item.audioStartOffset;
      }

      // Start playback for both video and audio
      const playMedia = async () => {
        try {
          if (videoRef.current) {
            await videoRef.current.play();
          }
          if (audioRef.current) {
            await audioRef.current.play();
          }
        } catch (error) {
          console.error('Error playing media:', error);
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
  }, [item.audioStartOffset, isMuted]);

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Video container - maintains original aspect ratio */}
        <div className="w-full md:w-2/3 relative">
          <div className="relative aspect-[4/5]">
            <video
              ref={videoRef}
              src={item.video}
              //controls
              loop
              poster={item.image}
              className="w-full h-full object-contain"
            />
            {/* Hidden audio element */}
            <audio ref={audioRef} src={item.audio} loop className="hidden" />
          </div>

          {/* Mute/Unmute button */}
          <button
            className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80"
            onClick={toggleMute}
          >
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Description and links */}
        <div className="w-full md:w-1/3 p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">
            {item.title || 'Media Item'}
          </h2>
          <p className="text-gray-700 mb-6">
            {item.description || 'No description available.'}
          </p>

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
};

const HoverMediaGrid: React.FC<HoverMediaGridProps> = ({
  containerWidth = 240, // Default width in pixels
  aspectRatio = 'aspect-[4/5]', // Default aspect ratio
  gap = 32, // Default gap in pixels
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
          justifyContent: 'center',
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
