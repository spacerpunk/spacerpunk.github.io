import { motion } from 'framer-motion';

const Hello = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Le
        <span className="text-neutral-400"> Mat</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duraction: 1.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          {/* <div className="flex item-center justify-center">
            <img className="rounded-lg" src={aboutImg} alt="about" />
          </div> */}
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duraction: 1.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex ustify-center lg:justify-start">
            <p className="my-2 maxw-xl py-6">
              Hello there! Creative Technologist @ .Monks I'm a Music Producer,
              Composer and Audio Engineer who taught himself to code, do VFX and
              loves making Films (and other weird stuff). The means of
              entertainment are changing every day and I love to find new ways
              to work with that tech, AI, Generative tools, Game Development,
              VR, AR, Web experiences, Mobile Apps, Films and more. I'd love to
              collaborate on a project together and find the best sound (or
              music) tailored for you.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hello;
