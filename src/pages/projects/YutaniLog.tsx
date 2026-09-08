import TearsRainPreview from '../../assets/Yutani/TearsInRain-WanAnimateTest.mp4';
import { useLanguage } from '../../contexts/LanguageContext';

export default function YutaniLog() {
  const es = useLanguage().lang === 'es';
  return (
    <div className="w-full pt-0 pr-0 pl-0 p-4 background-gray-800">
      <h1 className="text-2xl text-semibold font-bold">Yutani-Log</h1>
      <div>
        <h3 className="w-full font-extralight text-sm py-1 text-nasared">
          #wananimate #tearsrain #yutani
        </h3>

        {/* Local Video */}
        <div className="w-full py-4">
          <video controls className="w-full h-auto">
            <source src={TearsRainPreview} type="video/mp4" />
            {es ? 'Tu navegador no soporta el tag de video.' : 'Your browser does not support the video tag.'}
          </video>
        </div>

        <h2 className="w-full text-normal font-semibold pt-4">PREVIEW</h2>
        <h3 className="w-full text-sm font-light pt-2 pb-4">
          <p>
            {es
              ? 'Wan Animate, prueba de animación facial a partir de imágenes de Flux 2 pro y videos de Blade Runner :P'
              : 'Wan Animate, Face Animation test from Flux 2 pro images and Blade Runner Videos :P'}
          </p>
        </h3>
      </div>
    </div>
  );
}
