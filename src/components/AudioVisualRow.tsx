// src/components/AudioVisualRow.tsx
import { useRef } from 'react';

interface AudioVisualCardProps {
  gifSrc: string;
  audioSrc: string;
  title: string;
}

const AudioVisualCard = ({ gifSrc, audioSrc, title }: AudioVisualCardProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const gifRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    audioRef.current?.play();
  };

  const handleMouseLeave = () => {
    audioRef.current?.pause();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={gifRef}
        src={gifSrc}
        alt={title}
        className="w-full h-full object-cover"
      />
      <audio ref={audioRef} src={audioSrc} />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
        <p className="text-white text-sm font-bold">{title}</p>
      </div>
    </div>
  );
};

const AudioVisualRow = () => {
  const items = [
    {
      title: 'Track 1',
      gifSrc: '/path/to/gif1.gif',
      audioSrc: '/path/to/audio1.mp3',
    },
    {
      title: 'Track 2',
      gifSrc: '/path/to/gif2.gif',
      audioSrc: '/path/to/audio2.mp3',
    },
    {
      title: 'Track 3',
      gifSrc: '/path/to/gif3.gif',
      audioSrc: '/path/to/audio3.mp3',
    },
    {
      title: 'Track 4',
      gifSrc: '/path/to/gif4.gif',
      audioSrc: '/path/to/audio4.mp3',
    },
  ];

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="aspect-square">
            <AudioVisualCard
              title={item.title}
              gifSrc={item.gifSrc}
              audioSrc={item.audioSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioVisualRow;
