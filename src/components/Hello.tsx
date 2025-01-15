import { motion } from 'framer-motion';

const Hello = () => {
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
        transition={{ duration: 0.5 }} className="font-semibold text-nasared">Hello there!
        </motion.h2>
        <br/> {/* Add two line breaks for more space */}
        <motion.p         whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.7 }} >I'm Nicolas Daniel Requena a Creative Technologist <a className="font-thin">(previously a Senior Video Editor)</a> <a className="font-black text-nasared" href="https://www.monks.com">@ .Monks</a></motion.p>
        <br/>       
        <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.0 }} >
        <p>Who is me?</p>
        <p>Music Producer, Composer and Audio Engineer who taught himself to do VFX and 3D Work for the love of Films...</p>        
        <p>...and was later forced into study programming when I found out that's the only way to make software to do what you want.</p>
        </motion.div>
        <br/>        
        <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.2 }} >
        <p>I'd always thought of myself as an artist that loves to tinker with technology, but I find the line between those getting blurrier every day.</p>
        <p>The means to make Art are changing fast and I love to find ways to work with new technology both in the Hard and Software worlds.</p>
        </motion.div>
        <br/>        
        <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.4 }} >
        <p>Generative Music, VFX, 3D Animation, Sound Design, Software Development, Scripting, Generative AI, Video Games, 3D Experiences, Original Music, are some of the creative ouputs I found for my creativity.</p>
        </motion.div>
        <br/>        
        <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.6 }} >
        <p>I'm currently working as a Senior Creative Technologist in .Monks, creating pipelines for the Design, Editing and VFX teams that include AI generative tools, custom Models and Scripts.</p>
        <p>Creating Image Generation Apps and Tools with Flux and Stable Diffusion.</p>
        <p>Working in between the Backend team and the Client to figure out the best uses and tools with AI.</p>
        </motion.div>
        <br/>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.8 }} >
        <p>Also still working as a VFX Artist and Video Editor for brands like General Motors, Buick, Amazon, Google, SCJ, Cadillac and many more. </p>
        <p>Hands on editing, Compositing, and doing full VFX work (Animation, Lighting, Rendering) with Unreal Engine and Blender.</p>
        </motion.div>
        <br/>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 2.0 }} >
        <p>I'd love to collaborate on a project together and find the best (creative and technical) solutions for you and your vision.</p>
        </motion.div>
        <br/>        
        <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 2.2 }} >
        <p>Stay Curious and Keep on Learning!</p>
        </motion.div>
        <br/>        
        <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 2.4 }} >
        <p>Cheers!</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hello;