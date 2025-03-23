import ImageGrid from './ImageGrid';
import badger00 from '../../assets/Badger/badger (0).png';
import badger01 from '../../assets/Badger/badger (1).png';
import badger02 from '../../assets/Badger/badger (2).png';
import badger03 from '../../assets/Badger/badger (3).png';

const imageList = [
  {
    src: badger00,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: badger01,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: badger02,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
  {
    src: badger03,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
];

export default function AIFF() {
  return (
    <div className="p-4">
      <h2 className="w-full font-light py-6">BANNER</h2>
      <h1 className="text-2xl text-semibold text-gray-800 font-bold">
        Badger's Safety First
      </h1>
      <h3 className="w-full font-extralight text-sm py-1 text-nasared">
        #aiff2025 #aerospace #video #film #flux #runway
      </h3>
      <h2 className="w-full font-normal py-4 text-nasared">
        Script
        <h3 className="w-full font-thin text-sm py 8 text-black">
          SCENE 01 “Well, howdy there, future-builders! Welcome to another
          wonderful day at Lockheed Martin—a place where imagination turns into
          innovation. You’ve got your hands on the future, but let’s keep you in
          one piece while you’re at it. Safety first, folks! The future depends
          on it.
        </h3>
        <h3 className="w-full font-thin text-sm py 8 text-black">
          SCENE 02 First up, the mighty Gravitational Engines! They sure can
          warp space, but stand too close to the field, and—yikes!—your face
          might stretch so far you'll need a second lunch break just to reel it
          back in! Accidentally flip the directional field without warning?
          Well, don’t be surprised if you find yourself flying through the
          factory window like a human rocket. Keep your distance, lock your
          settings, and always—always—respect the gravity zone!
        </h3>
        <h3 className="w-full font-thin text-sm py 8 text-black">
          SCENE 03 Next, our powerful Magnetic Engines. They’re a marvel of
          future propulsion, but boy, can they be fussy! Fire one up without
          proper shielding, and it might just start pulling the iron right out
          of your blood! That’s right, folks—your very lifeline might end up
          smeared on the walls. So, suit up in your magnetic shielding gear, and
          remember: strong magnets and humans don’t mix!
        </h3>
        <h3 className="w-full font-thin text-sm py 8 text-black">
          SCENE 04 And now, the Singularity Galactic GPS Tracker. What a
          marvel—pinpointing your location anywhere in the known universe! But
          let it slip out of alignment, and—uh oh!—you might accidentally create
          a pocket-sized universe. That’s right, a tiny, buzzing cosmos that
          might not take too kindly to its creator. One minute you’re
          calibrating coordinates, and the next, you’re in a galactic fistfight
          with a universe the size of a baseball! Keep those singularity
          stabilizers triple-checked, and remember: no one wins when multiverses
          collide!
        </h3>
        <h3 className="w-full font-thin text-sm py 8 text-black">
          SCENE 05 Finally, a friendly reminder about Cold Fusion Reactors.
          Sure, they’re clean, green, and power machines—but let those babies
          overheat, and you’ll have a meltdown hotter than your Aunt Edna’s
          jalapeño casserole. Monitor those coolant levels like your life
          depends on it—because, well, it does!
        </h3>
        <h3 className="w-full font-thin text-sm py 8 text-black">
          SCENE 06 Let’s talk about one of the quirkiest gadgets in the shop—the
          Probability Quantum Carburetor! This little beauty makes
          interdimensional propulsion possible, but, boy oh boy, does it have a
          mind of its own. Here’s the kicker: it only works if it’s being
          watched. That’s right, folks! No eyes on it, and the quantum wave
          won't collapse. It’ll stay in superposition and won’t do anything! But
          if you happen to glance away for just a second, it might warp into a
          probability state so chaotic, you’ll be driving Schrödinger’s cat to
          an alternate timeline. Whoopsie-daisy! So, how do we keep it running
          smoothly? Easy! We’ve got a whole position just for it: Certified
          Carburetor Supervisor! Your job? Always keep an eye on it—literally.
          Blink responsibly, folks, and rotate shifts often. This isn’t just a
          job; it’s quantum babysitting! And remember: the carburetor sees you
          seeing it, and that’s how we keep our reality intact!” Visual: A
          worker sits at a desk, staring intently at the Probability Quantum
          Carburetor, sipping coffee and giving a thumbs up to the camera. A
          digital sign above the carburetor reads: “Wave Function: Collapsed.
          Nice work!”
        </h3>
        <h3 className="w-full font-thin text-sm py 8 text-black">
          SCENE 07 At Lockheed Martin, we’re not just designing the future—we’re
          designing it safely. So, gear up, stay sharp, and keep those cosmic
          hazards at bay. Remember: the best innovations come from healthy,
          happy workers—like you!”
        </h3>
      </h2>
      <h2 className="w-full font-normal py-4 text-nasared">
        Style Frames
        <div className="container mx-auto">
          <ImageGrid
            images={imageList}
            columns={3} // Optional: 2, 3, or 4 columns
          />
        </div>
      </h2>
      <h2 className="w-full font-normal py-4 text-nasared">
        StoryBoard
        <h3 className="w-full font-extralight text-sm py-1 text-nasared"></h3>
      </h2>
      <h2 className="w-full font-normal py-4 text-nasared">Video Generation</h2>
      <h2 className="w-full font-normal py-4 text-nasared">
        Original Music - Human Made
      </h2>
      <h2 className="w-full font-normal py-4 text-nasared">Voice Generation</h2>
    </div>
  );
}
