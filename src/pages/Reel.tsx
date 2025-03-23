export default function Reel() {
  return (
    <div className="p-4">
      <iframe
        width="960"
        height="540"
        src="https://www.youtube.com/embed/fbZuxEJJvhA?si=XdH_1F7bPnwKNVT8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
