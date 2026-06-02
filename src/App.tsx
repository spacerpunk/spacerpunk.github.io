// src/App.tsx
import { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './contexts/LanguageContext';
import SideNav from './components/SideNav';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';

// PAGES - Lazy loaded
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

// WORK - Lazy loaded
const Monks = lazy(() => import('./pages/work/Monks'));
const Dove = lazy(() => import('./pages/work/Dove'));
const Atea = lazy(() => import('./pages/work/Atea'));
const Generative = lazy(() => import('./pages/work/Generative'));
const Tungsteno = lazy(() => import('./pages/work/Tungsteno'));
const AgenticMonks = lazy(() => import('./pages/work/AgenticMonks'));
const ToyotaTeam23 = lazy(() => import('./pages/work/ToyotaTeam23'));
const Superside = lazy(() => import('./pages/work/Superside'));
const NoeAssociates = lazy(() => import('./pages/work/NoeAssociates'));
const FirstAveMachine = lazy(() => import('./pages/work/FirstAveMachine'));

// PROJECTS - Lazy loaded
const TheNoise = lazy(() => import('./pages/projects/TheNoise'));
const TheGlitch = lazy(() => import('./pages/projects/TheGlitch'));
const TheTape = lazy(() => import('./pages/projects/TheTape'));
const TrenchRun = lazy(() => import('./pages/projects/TrenchRun'));
const Anomaly = lazy(() => import('./pages/projects/Anomaly'));
const YutaniLog = lazy(() => import('./pages/projects/YutaniLog'));
const MusicMoodboards = lazy(() => import('./pages/projects/MusicMoodboards'));
const ToyotaConcept = lazy(() => import('./pages/projects/ToyotaConcept'));
const NasaXHonda = lazy(() => import('./pages/projects/NasaXHonda'));
const UGCSlopntent = lazy(() => import('./pages/projects/UGCSlopntent'));
const GenerativeConceptsAlbum = lazy(
  () => import('./pages/projects/GenerativeConceptsAlbum'),
);
const VerticalMusicWaves = lazy(
  () => import('./pages/projects/VerticalMusicWaves'),
);
const Upload = lazy(() => import('./pages/projects/Upload'));

// POLVO LAB
const PolvoLab = lazy(() => import('./pages/polvolab/PolvoLab'));

// SERVICES
const Services = lazy(() => import('./pages/Services'));

// 404 Page
const NotFound = lazy(() => import('./pages/NotFound'));

const WPP_NUMBER = '5491155985615';
const EMAIL = 'requena.nicolas@gmail.com';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const { lang, toggle } = useLanguage();

  return (
    <ErrorBoundary>
      <div className="flex h-screen w-screen overflow-hidden">
        <SideNav />

        <main className="flex-1 overflow-y-auto w-full lg:ml-0">
          <div className="p-4 lg:p-8 max-w-7xl mx-auto">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />

                {/* work */}
                <Route path="/work/monks" element={<Monks />} />
                <Route path="/work/dove" element={<Dove />} />
                <Route path="/work/atea" element={<Atea />} />
                <Route path="/work/tungsteno" element={<Tungsteno />} />
                <Route path="/work/generative" element={<Generative />} />
                <Route path="/work/agenticmonks" element={<AgenticMonks />} />
                <Route path="/work/toyotateam23" element={<ToyotaTeam23 />} />
                <Route path="/work/superside" element={<Superside />} />
                <Route path="/work/noeassociates" element={<NoeAssociates />} />
                <Route path="/work/firstavemachine" element={<FirstAveMachine />} />

                {/* projects */}
                <Route path="/projects/thenoise" element={<TheNoise />} />
                <Route path="/projects/theglitch" element={<TheGlitch />} />
                <Route path="/projects/upload" element={<Upload />} />
                <Route path="/projects/thetape" element={<TheTape />} />
                <Route path="/projects/trenchrun" element={<TrenchRun />} />
                <Route path="/projects/anomaly" element={<Anomaly />} />
                <Route path="/projects/yutanilog" element={<YutaniLog />} />
                <Route
                  path="/projects/musicmoodboards"
                  element={<MusicMoodboards />}
                />
                <Route
                  path="/projects/toyotaconcept"
                  element={<ToyotaConcept />}
                />
                <Route path="/projects/nasaxhonda" element={<NasaXHonda />} />
                <Route
                  path="/projects/ugcslopntent"
                  element={<UGCSlopntent />}
                />
                <Route
                  path="/projects/generativeconceptsalbum"
                  element={<GenerativeConceptsAlbum />}
                />
                <Route
                  path="/projects/verticalmusicwaves"
                  element={<VerticalMusicWaves />}
                />

                {/* services */}
                <Route path="/services" element={<Services />} />

                {/* polvo lab */}
                <Route path="/polvolab" element={<PolvoLab />} />

                {/* 404 catch-all */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </main>

        <ScrollToTop />

        {/* Persistent top-right controls */}
        <motion.div
          className="fixed top-4 right-6 z-50 flex items-center gap-2"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          {/* EN / ES toggle */}
          <motion.button
            onClick={toggle}
            className="flex items-center gap-1 text-xs font-mono font-bold tracking-widest uppercase px-3 py-3 border border-gray-700 bg-black hover:border-nasared transition-colors duration-200 select-none"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Toggle language"
          >
            <span className={lang === 'en' ? 'text-nasared' : 'text-gray-600'}>EN</span>
            <span className="text-gray-700">·</span>
            <span className={lang === 'es' ? 'text-nasared' : 'text-gray-600'}>ES</span>
          </motion.button>

          {/* Work with me */}
          <motion.button
            onClick={() => setContactOpen(true)}
            className="bg-nasared text-white text-xs font-mono font-bold tracking-widest uppercase px-5 py-3 shadow-lg hover:bg-white hover:text-nasared transition-colors duration-200 select-none"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {lang === 'en' ? 'Work with me' : 'Laburemos'}
          </motion.button>
        </motion.div>

        {/* Contact modal */}
        <AnimatePresence>
          {contactOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setContactOpen(false)}
              />

              {/* Modal card */}
              <motion.div
                key="modal"
                className="fixed z-50 top-1/2 left-1/2 lg:left-[calc(50%+8rem)] -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-black border border-gray-800 shadow-2xl p-8"
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                {/* Close */}
                <button
                  onClick={() => setContactOpen(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <p className="text-nasared text-xs font-mono tracking-widest uppercase mb-2">
                  {lang === 'en' ? "Let's talk" : 'Hablemos'}
                </p>
                <h2 className="text-2xl font-bold text-white mb-1">
                  {lang === 'en' ? 'Work with me' : 'Trabajemos juntos'}
                </h2>
                <p className="text-gray-500 text-sm font-light mb-8">
                  {lang === 'en'
                    ? 'Pick the channel that works best for you.'
                    : 'Elegí el canal que prefieras.'}
                </p>

                <div className="space-y-3">
                  {/* Email */}
                  <motion.a
                    href={`mailto:${EMAIL}?subject=Work%20with%20me`}
                    className="flex items-center gap-4 w-full border border-gray-800 p-4 text-white hover:border-nasared hover:bg-nasared/5 transition-colors duration-200 group"
                    whileHover={{ x: 4 }}
                  >
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-nasared transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide">Email</p>
                      <p className="text-xs text-gray-500 font-mono">{EMAIL}</p>
                    </div>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    href={`https://wa.me/${WPP_NUMBER}?text=Hey%20Nico%2C%20I%27d%20love%20to%20work%20with%20you!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 w-full border border-gray-800 p-4 text-white hover:border-nasared hover:bg-nasared/5 transition-colors duration-200 group"
                    whileHover={{ x: 4 }}
                  >
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-nasared transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide">WhatsApp</p>
                      <p className="text-xs text-gray-500 font-mono">
                        {lang === 'en' ? 'Quick message' : 'Mensaje rápido'}
                      </p>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  );
}
