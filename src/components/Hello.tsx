import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hello = () => {
  const { lang } = useLanguage();
  const es = lang === 'es';

  return (
    <div className="pb-4 mb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Nicolas Requena
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.2 }}
        className="w-full text-sm font-light py-4"
      >
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="font-semibold text-nasared"
        >
          {es ? '¡Hola!' : 'Hello there!'}
        </motion.h2>
        <br />
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
        >
          {es
            ? 'Soy Nicolas Daniel Requena, un Creative Technologist '
            : "I'm Nicolas Daniel Requena a Creative Technologist "}
          <a className="font-thin">
            {es ? '(antes Senior Video Editor)' : '(previously a Senior Video Editor)'}
          </a>{' '}
          <a className="font-black text-nasared" href="https://www.monks.com">
            @ .Monks
          </a>
        </motion.p>
        <br />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.0 }}
        >
          <p>{es ? '¿Quién soy?' : 'Who is me?'}</p>
          <p>
            {es
              ? 'Productor Musical, Compositor e Ingeniero de Audio que se autodidactó en VFX y trabajo 3D por amor al Cine...'
              : 'Music Producer, Composer and Audio Engineer who taught himself to do VFX and 3D Work for the love of Films...'}
          </p>
          <p>
            {es
              ? '...y que después se vio obligado a estudiar programación cuando descubrió que es la única manera de que el software haga lo que uno quiere.'
              : "...and was later forced into study programming when I found out that's the only way to make software do what you want."}
          </p>
        </motion.div>
        <br />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.2 }}
        >
          <p>
            {es
              ? 'Siempre me consideré un artista que ama experimentar con tecnología, pero encuentro que la línea entre ambas cosas se vuelve más difusa cada día.'
              : "I'd always thought of myself as an artist that loves to tinker with technology, but I find the line between those getting blurrier every day."}
          </p>
          <p>
            {es
              ? 'Los medios para hacer Arte están cambiando rápidamente y me encanta encontrar nuevas formas de trabajar con tecnología tanto en el mundo del hardware como del software.'
              : 'The means to make Art are changing fast and I love to find new ways to work with technology both in the Hard and Software worlds.'}
          </p>
        </motion.div>
        <br />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.4 }}
        >
          <p>
            <a className="font-black text-nasared p-2" href="https://spacerpunk.bandcamp.com/">
              {es ? 'Música' : 'Music'}
            </a>
            ,
            <a className="font-black text-nasared p-2" href="https://www.behance.net/nicolasrequena">
              VFX
            </a>
            ,
            <a className="font-black text-nasared p-2" href="https://www.behance.net/gallery/87684661/Tungsteno-FIlms-Intro">
              {es ? 'Diseño de Sonido' : 'Sound Design'}
            </a>
            ,
            <a className="font-black text-nasared p-2" href="https://www.behance.net/gallery/153780873/Dove-Real-Virtual-Beauty">
              {es ? 'Animación 3D' : '3D Animation'}
            </a>
            ,
            <a className="font-black text-nasared p-2" href="https://nrequena.itch.io/the-glitch">
              {es ? 'Videojuegos' : 'Video Games'}
            </a>
            ,
            <a className="font-black text-nasared p-2" href="https://www.instagram.com/spacrpunk/">
              {es ? 'Arte Generativo' : 'Generative Art'}
            </a>
            ,
            <a className="font-black text-nasared p-2" href="https://www.youtube.com/watch?v=_22onA4dyhs&ab_channel=spacerpunk">
              {es ? 'Cine' : 'Films'}
            </a>
            ,
            <a className="font-black text-nasared p-2" href="https://github.com/spacerpunk">
              {es ? 'Código' : 'Coding'}
            </a>
            {es
              ? ', son algunas de las salidas creativas que encontré para mi creatividad.'
              : ', are some of the creative ouputs I found for my creativity.'}
          </p>
        </motion.div>
        <br />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.6 }}
        >
          <p>
            {es
              ? 'Actualmente trabajo como Senior Creative Technologist en .Monks, creando pipelines para los equipos de Diseño, Edición y VFX que incluyen herramientas de IA generativa, Modelos personalizados y Scripts.'
              : "I'm currently working as a Senior Creative Technologist in .Monks, creating pipelines for the Design, Editing and VFX teams that include AI generative tools, custom Models and Scripts."}
          </p>
          <p>
            {es
              ? 'Creando Apps y Herramientas de Generación de Imágenes con Flux y Stable Diffusion.'
              : 'Creating Image Generation Apps and Tools with Flux and Stable Diffusion.'}
          </p>
          <p>
            {es
              ? 'Trabajando entre el equipo de Backend y el Cliente para encontrar los mejores usos y herramientas con IA.'
              : 'Working in between the Backend team and the Client to figure out the best uses and tools with AI.'}
          </p>
        </motion.div>
        <br />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.8 }}
        >
          <p>
            {es
              ? 'También sigo trabajando como VFX Artist y Video Editor para marcas como General Motors, Buick, Amazon, Google, SCJ, Cadillac y muchas más.'
              : 'Also still working as a VFX Artist and Video Editor for brands like General Motors, Buick, Amazon, Google, SCJ, Cadillac and many more.'}
          </p>
          <p>
            {es
              ? 'Edición, Compositing y trabajo completo de VFX (Animación, Iluminación, Renderizado) con Unreal Engine y Blender.'
              : 'Hands on editing, Compositing, and doing full VFX work (Animation, Lighting, Rendering) with Unreal Engine and Blender.'}
          </p>
        </motion.div>
        <br />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2.0 }}
        >
          <p>
            {es
              ? 'Me encantaría colaborar en un proyecto juntos y encontrar las mejores soluciones (creativas y técnicas) para vos y tu visión.'
              : "I'd love to collaborate on a project together and find the best (creative and technical) solutions for you and your vision."}
          </p>
        </motion.div>
        <br />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2.2 }}
        >
          <p>{es ? '¡Mantené la curiosidad y seguí aprendiendo!' : 'Stay Curious and Keep on Learning!'}</p>
        </motion.div>
        <br />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 2.4 }}
        >
          <p>{es ? '¡Salud!' : 'Cheers!'}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hello;
