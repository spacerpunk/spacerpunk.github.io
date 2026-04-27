import SEO from '../../components/SEO';

export default function UGCSlopntent() {
  return (
    <div className="w-full p-4 md:p-6">
      <SEO
        title="UGC Slopntent"
        description="Experimental user-generated content exploring the aesthetics of digital chaos"
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">UGC Slopntent</h1>
      <div>
        <h3 className="font-extralight text-sm py-1 text-nasared">
          #ugc #experimental #digitalart #chaos
        </h3>

        <div className="py-6">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-400 leading-relaxed">
            An experimental exploration of user-generated content aesthetics,
            embracing the raw, unpolished nature of digital creation. A study in
            controlled chaos and authentic expression.
          </p>
        </div>

        <div className="py-4">
          <p className="text-sm text-gray-500">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}
