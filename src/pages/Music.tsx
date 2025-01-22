import AudioVisualRow from '../components/AudioVisualRow';

export default function Music() {
  return (
    <div className="p-4">
      <p>
        UDIO SPOTLIGHT for my Music page…each track is featured with an animated
        image (simple animation), when you hover over it it plays it (the best
        part) if you click on it opens the track full and plays it (I love the
        #tags and description…and we could have a link on the bottom to redirect
        to Spotify or Bandcamp.
      </p>
      <div className="w-full p-4">
        <AudioVisualRow />
      </div>
    </div>
  );
}
