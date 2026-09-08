import { createContext, useContext, useState } from 'react';

export type Lang = 'en' | 'es';

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggle: () => {},
});

const STORAGE_KEY = 'spcrpnk-lang';

// IANA time zones for Spanish-speaking countries — used to approximate the
// visitor's country when the browser locale isn't conclusive.
const SPANISH_TIMEZONES = new Set([
  // Spain
  'Europe/Madrid', 'Africa/Ceuta', 'Atlantic/Canary',
  // Mexico
  'America/Mexico_City', 'America/Cancun', 'America/Merida', 'America/Monterrey',
  'America/Matamoros', 'America/Chihuahua', 'America/Ciudad_Juarez', 'America/Ojinaga',
  'America/Mazatlan', 'America/Bahia_Banderas', 'America/Hermosillo', 'America/Tijuana',
  // Argentina
  'America/Argentina/Buenos_Aires', 'America/Argentina/Cordoba', 'America/Argentina/Salta',
  'America/Argentina/Jujuy', 'America/Argentina/Tucuman', 'America/Argentina/Catamarca',
  'America/Argentina/La_Rioja', 'America/Argentina/San_Juan', 'America/Argentina/Mendoza',
  'America/Argentina/San_Luis', 'America/Argentina/Rio_Gallegos', 'America/Argentina/Ushuaia',
  'America/Buenos_Aires', 'America/Cordoba', 'America/Mendoza', 'America/Catamarca', 'America/Jujuy',
  // Rest of Latin America
  'America/Bogota', 'America/Lima', 'America/Santiago', 'America/Punta_Arenas', 'Pacific/Easter',
  'America/Caracas', 'America/Guayaquil', 'Pacific/Galapagos', 'America/La_Paz', 'America/Asuncion',
  'America/Montevideo', 'America/Havana', 'America/Santo_Domingo', 'America/Guatemala',
  'America/Tegucigalpa', 'America/El_Salvador', 'America/Managua', 'America/Costa_Rica',
  'America/Panama', 'America/Puerto_Rico',
  // Equatorial Guinea
  'Africa/Malabo',
]);

function isSpanishSpeaking(): boolean {
  // 1) Browser locale (es, es-AR, es-ES, …)
  try {
    const langs =
      navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language];
    if (langs.some((l) => l && l.toLowerCase().startsWith('es'))) return true;
  } catch {
    /* navigator unavailable */
  }
  // 2) Fall back to the device time zone → country
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && SPANISH_TIMEZONES.has(tz)) return true;
  } catch {
    /* Intl unavailable */
  }
  return false;
}

function detectInitialLang(): Lang {
  // An explicit choice always wins over auto-detection.
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    /* localStorage unavailable */
  }
  return isSpanishSpeaking() ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectInitialLang);

  const toggle = () =>
    setLang((l) => {
      const next: Lang = l === 'en' ? 'es' : 'en';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore persistence failure */
      }
      return next;
    });

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
