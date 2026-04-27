// src/App.tsx
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
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

// 404 Page
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
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

                {/* projects */}
                <Route path="/projects/thenoise" element={<TheNoise />} />
                <Route path="/projects/theglitch" element={<TheGlitch />} />
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
                <Route path="/projects/upload" element={<Upload />} />

                {/* 404 catch-all */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </main>

        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}
