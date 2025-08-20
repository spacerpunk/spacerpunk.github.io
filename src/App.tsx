// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav';

// PAGES
import Home from './pages/Home';
import About from './pages/About';

// WORK
import Monks from './pages/work/Monks';
import Dove from './pages/work/Dove';
import Atea from './pages/work/Atea';
import Generative from './pages/work/Generative';
import Tungsteno from './pages/work/Tungsteno';

// PROJECTS
import TheNoise from './pages/projects/TheNoise';
import TheGlitch from './pages/projects/TheGlitch';
import TheTape from './pages/projects/TheTape';
import TrenchRun from './pages/projects/TrenchRun';
import Anomaly from './pages/projects/Anomaly';

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="fixed top-0 left-0 h-full">
        <SideNav />
      </div>

      <main className="flex-1 p-4 ml-64 max-w-[calc(100vw-16rem)] overflow-y-auto">
        <div className="max-w-[calc(100vw-8rem)]">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* use lowercase paths for GitHub Pages (case-sensitive) */}
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

            {/* optional: catch-all → home */}
            {/* <Route path="*" element={<Home />} /> */}
          </Routes>
        </div>
      </main>
    </div>
  );
}
