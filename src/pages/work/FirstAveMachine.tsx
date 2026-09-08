import PasswordGate from '../../components/PasswordGate';
import { useLanguage } from '../../contexts/LanguageContext';

export default function FirstAveMachine() {
  const es = useLanguage().lang === 'es';
  return (
    <PasswordGate storageKey="firstavemachine-unlocked">
      <div className="w-full p-4 max-w-6xl">
        <h1 className="text-2xl font-bold mb-1">1stAveMachine Showcase</h1>
        <h3 className="text-nasared text-sm font-extralight mb-4">
          #1stavemachine #showcase #creative #production
        </h3>
        <p className="text-base font-normal text-gray-200 mb-2 max-w-3xl">
          {es ? 'Próximamente — acá se va a agregar el contenido.' : 'Coming soon — content will be added here.'}
        </p>
      </div>
    </PasswordGate>
  );
}
