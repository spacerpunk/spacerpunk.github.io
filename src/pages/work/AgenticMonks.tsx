import n8nOriginal from '../../assets/Monks/GoogleAgent/n8n_original_q90_fps15_1650x1080.gif';
import n8nEndcard from '../../assets/Monks/GoogleAgent/n8n_endcard_q90_fps15_675x540.gif';
import uiGif from '../../assets/Monks/GoogleAgent/UI Gif_q90_fps15_1350x1080.gif';
import afterEffects from '../../assets/Monks/GoogleAgent/AfterEffects_q90_fps15_960x450.gif';
import master from '../../assets/Monks/GoogleAgent/Master_q90_fps15_540x960.gif';
import variation01 from '../../assets/Monks/GoogleAgent/Variation01_q90_fps15_540x960.gif';
import variation02 from '../../assets/Monks/GoogleAgent/Variation02_q90_fps15_540x960.gif';

const techStack = [
  { label: 'Cursor', color: 'text-white border-white/30 bg-white/5' },
  { label: 'Claude Sonnet', color: 'text-nasared border-nasared/30 bg-nasared/5' },
  { label: 'Google Imagen', color: 'text-blue-400 border-blue-400/30 bg-blue-400/5' },
  { label: 'Google Gemini', color: 'text-blue-300 border-blue-300/30 bg-blue-300/5' },
  { label: 'Google Veo', color: 'text-purple-400 border-purple-400/30 bg-purple-400/5' },
  { label: 'n8n', color: 'text-orange-400 border-orange-400/30 bg-orange-400/5' },
  { label: 'After Effects', color: 'text-indigo-400 border-indigo-400/30 bg-indigo-400/5' },
];

export default function AgenticMonks() {
  return (
    <div className="w-full p-4 max-w-6xl">

      {/* Header */}
      <h1 className="text-2xl font-bold mb-1">Agentic @ Monks</h1>
      <h3 className="text-nasared text-sm font-extralight mb-4">
        #agentic #workflows #generativeAI #aftereffects #brands
      </h3>
      <p className="text-base font-normal text-gray-200 mb-2 max-w-3xl">
        A fully agentic pipeline built with Cursor and Claude Sonnet that connects Google's
        image, text, and video generation APIs to produce always-on-brand, product-accurate
        renders — then feeds them directly into After Effects templates to generate finished
        content dynamically.
      </p>
      <p className="text-sm font-light text-gray-400 mb-6 max-w-3xl">
        The system handles brief intake, brand-consistent prompt engineering, asset generation,
        quality filtering, and template population — turning what was a multi-day manual process
        into an automated run that outputs broadcast-ready variations in minutes.
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-10">
        {techStack.map((tech) => (
          <span
            key={tech.label}
            className={`text-xs px-2.5 py-1 rounded border font-medium ${tech.color}`}
          >
            {tech.label}
          </span>
        ))}
      </div>

      {/* Section: The Workflow */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-1">The Workflow</h2>
        <p className="text-sm text-gray-400 mb-4">
          Orchestrated in n8n — the agent ingests a product brief, calls Google's APIs for
          image and copy generation, scores results for brand accuracy, and routes approved
          assets into the After Effects render pipeline.
        </p>

        {/* n8n wide flow */}
        <div className="w-full overflow-hidden rounded-lg border border-gray-800 mb-4">
          <img
            src={n8nOriginal}
            alt="n8n agentic workflow — full pipeline"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <img
              src={n8nEndcard}
              alt="n8n endcard generation sub-flow"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
            <p className="text-xs text-gray-500 p-2">Endcard sub-flow</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <img
              src={uiGif}
              alt="Agent UI — brief intake and asset review"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
            <p className="text-xs text-gray-500 p-2">Brief intake & asset review UI</p>
          </div>
        </div>
      </section>

      {/* Section: After Effects Output */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-1">After Effects Output</h2>
        <p className="text-sm text-gray-400 mb-4">
          Approved assets are automatically mapped to template layers. The agent populates
          text, product renders, and background plates, then triggers a render queue —
          outputting multiple brand-locked variations without manual touch.
        </p>
        <div className="w-full overflow-hidden rounded-lg border border-gray-800">
          <img
            src={afterEffects}
            alt="After Effects template populated by the agent"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
          <p className="text-xs text-gray-500 p-2">Dynamic template population</p>
        </div>
      </section>

      {/* Section: Output Variations */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-1">Output Variations</h2>
        <p className="text-sm text-gray-400 mb-4">
          Each run produces a master cut and format-adapted variations — vertical for
          social, horizontal for display — all brand-consistent, no manual resizing.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <img
              src={master}
              alt="Master output"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
            <p className="text-xs text-gray-500 p-2">Master</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <img
              src={variation01}
              alt="Variation 01"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
            <p className="text-xs text-gray-500 p-2">Variation 01</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <img
              src={variation02}
              alt="Variation 02"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
            <p className="text-xs text-gray-500 p-2">Variation 02</p>
          </div>
        </div>
      </section>

    </div>
  );
}
