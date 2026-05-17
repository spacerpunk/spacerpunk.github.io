import PasswordGate from '../../components/PasswordGate';

export default function NoeAssociates() {
  return (
    <PasswordGate storageKey="noeassociates-unlocked">
      <div className="w-full p-4 max-w-6xl">
        <h1 className="text-2xl font-bold mb-1">Noe&amp;Associates Showcase</h1>
        <h3 className="text-nasared text-sm font-extralight mb-4">
          #noeassociates #showcase #creative
        </h3>
        <p className="text-base font-normal text-gray-200 mb-2 max-w-3xl">
          Coming soon — content will be added here.
        </p>
      </div>
    </PasswordGate>
  );
}
