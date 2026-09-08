import SEO from '../../components/SEO';
import { useLanguage } from '../../contexts/LanguageContext';

export default function UGCSlopntent() {
  const es = useLanguage().lang === 'es';
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
          <h2 className="text-xl font-semibold mb-4">{es ? 'Sobre esto' : 'About'}</h2>
          <p className="text-gray-400 leading-relaxed">
            {es
              ? 'Una exploración experimental de la estética del contenido generado por usuarios, abrazando la naturaleza cruda y sin pulir de la creación digital. Un estudio sobre el caos controlado y la expresión auténtica.'
              : 'An experimental exploration of user-generated content aesthetics, embracing the raw, unpolished nature of digital creation. A study in controlled chaos and authentic expression.'}
          </p>
        </div>

        <div className="py-4">
          <p className="text-sm text-gray-500">{es ? 'Próximamente...' : 'Coming soon...'}</p>
        </div>
      </div>
    </div>
  );
}
