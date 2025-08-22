import ImageGrid from '../projects/ImageGrid';

const imageList = [
  {
    src: TheNoiseImage01,
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
      <h1 className="text-4xl text-semibold font-bold">AI Image Generation</h1>
      <h2 className="w-full font-normal py-4 text-nasared">
        <div className="container mx-auto">
          <ImageGrid
            images={imageList}
            columns={4} // Optional: 2, 3, or 4 columns
          />
        </div>
      </h2>
      <h1 className="text-4xl text-semibold font-bold">
        Image Model Fine Tunning
      </h1>
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
    </div>
  );
}
