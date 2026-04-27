import SEO from '../../components/SEO';

export default function ToyotaConcept() {
  return (
    <div className="w-full p-4 md:p-6">
      <SEO
        title="Toyota Concept Film"
        description="Conceptual film project for Toyota exploring future mobility and design"
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Toyota Concept Film
      </h1>
      <div>
        <h3 className="font-extralight text-sm py-1 text-nasared">
          #conceptfilm #toyota #futuredesign #mobility
        </h3>

        <div className="py-6">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-400 leading-relaxed">
            A conceptual exploration of future mobility through the lens of
            Toyota's design philosophy. Blending cutting-edge visuals with
            speculative design thinking.
          </p>
        </div>

        <div className="py-4">
          <p className="text-sm text-gray-500">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}
