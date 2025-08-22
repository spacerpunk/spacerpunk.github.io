import ImageGrid from '../projects/ImageGrid';
import { HoverRevealCard } from '../../components/HoverCard'
import MonksAI01 from '../../assets/Monks/ImageGen/bmw/monks_ai (1).png';
import MonksAI02 from '../../assets/Monks/ImageGen/bmw/monks_ai (2).png';
import MonksAI03 from '../../assets/Monks/ImageGen/bmw/monks_ai (3).png';
import MonksAI04 from '../../assets/Monks/ImageGen/bmw/monks_ai (4).png';
import MonksAI05 from '../../assets/Monks/ImageGen/bmw/monks_ai (5).png';
import MonksAI06 from '../../assets/Monks/ImageGen/bmw/monks_ai (6).png';
import MonksAI07 from '../../assets/Monks/ImageGen/random/ai-gen-mm (1).png'
import MonksAI08 from '../../assets/Monks/ImageGen/random/ai-gen-mm (2).png'
import MonksAI09 from '../../assets/Monks/ImageGen/random/ai-gen-mm (3).png'
import MonksAI010 from '../../assets/Monks/ImageGen/random/ai-gen-mm (4).png'




const imageList = [
  {
    src: MonksAI01,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'portrait' as const,
  },
  {
    src: MonksAI02,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'portrait' as const,
  },
  {
    src: MonksAI03,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'portrait' as const,
  },
  {
    src: MonksAI04,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
    {
    src: MonksAI05,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
    {
    src: MonksAI06,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'square' as const,
  },
    {
    src: MonksAI07,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'portrait' as const,
  },
  {
    src: MonksAI08,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'portrait' as const,
  },
  {
    src: MonksAI09,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'portrait' as const,
  },
  {
    src: MonksAI010,
    alt: 'Description 1',
    title: 'Optional Title 1',
    aspect: 'video' as const,
  },
];


export default function Monks() {
  return (
    <div className="p-4">
      <h1 className="text-xl text-semibold font-bold">
        some of my work @ Monks
      </h1>
      <h1 className="text-4xl text-semibold font-bold">Video Editing</h1>
      <h1 className="text-4xl text-semibold font-bold">3D Generalist</h1>
      <h1 className="text-4xl text-semibold font-bold">Product Replacement</h1>
      <h1 className="text-4xl text-semibold font-bold">Compositing</h1>
      <h1 className="text-2xl text-semibold font-bold">synthetic image generation for brand contect, some examples .., </h1>
      <h2 className="font-size-medium text-semibold font-light">BMW,Europcar,Vivo,Puig,etc,etc, just iamges and when you hover you get HOW you did them, but only one per brand</h2>
      <h1 className="text-4xl text-semibold font-bold">
        Image Model Fine Tunning
      </h1>
      {/* 👇 Example HoverRevealCard added separately */}

      <h2 className="font-size-medium text-semibold font-light">      
        <div className="mt-8 max-w-sm">
          <HoverRevealCard
            src={MonksAI01}
            alt="BMW studio render"
            title="BMW – Studio Example"
            details="Created with Stable Diffusion LoRA fine-tune for BMW style, composited in Photoshop."
          />
        </div>
      </h2>
      <h2 className="font-size-medium text-semibold font-light">SCJ LoRa</h2>
      <h2 className="font-size-medium text-semibold font-light">GMI LoRa</h2>
      <h2 className="font-size-medium text-semibold font-light">Puig LoRa</h2>

      <h1 className="text-4xl text-semibold font-bold">LLM Fine Tunning</h1>
      <h1 className="text-4xl text-semibold font-bold">
        ComfyUI Custom Workflow Creation
      </h1>
      <h1 className="text-4xl text-semibold font-bold">
        Agentic Workflows for Video Generation
      </h1>
      <h1 className="text-4xl text-semibold font-bold">
        Automation Workflows for Social Asset Generation
      </h1>
      <h1 className="text-small text-semibold font-light pt-8">
random gens drop @ monks     </h1>
            <h2 className="w-full font-normal py-4 text-nasared">
        <div className="container mx-auto">
          <ImageGrid
            images={imageList}
            columns={4} // Optional: 2, 3, or 4 columns
          />
        </div>
      </h2>
    </div>
  );
}
