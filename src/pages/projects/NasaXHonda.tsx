import SEO from '../../components/SEO';

export default function NasaXHonda() {
  return (
    <div className="w-full p-4 md:p-6">
      <SEO
        title="NASAXHONDA"
        description="Collaborative concept merging NASA's space exploration with Honda's engineering excellence"
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">NASAXHONDA</h1>
      <div>
        <h3 className="font-extralight text-sm py-1 text-nasared">
          #nasa #honda #collaboration #space #engineering
        </h3>

        <div className="py-6">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-400 leading-relaxed">
            A conceptual collaboration between NASA's pioneering space
            technology and Honda's precision engineering. Exploring the
            intersection of space exploration and automotive innovation.
          </p>
        </div>

        <div className="py-4">
          <p className="text-sm text-gray-500">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}
