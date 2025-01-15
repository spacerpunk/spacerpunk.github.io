// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import SideNotes from './components/SideNotes';
import Dashboard from './pages/Home';
import About from './pages/About';
import Home from './pages/Home';
import ThemeToggle from './components/ThemeToggle';

//LABS IMPORTS
import Electronics from './pages/labs/electronics';
import GenerativeAI from './pages/labs/GenerativeAI';
import AlternativeTechnology from './pages/labs/AlternativTechnology';

//WORK IMPORTS
import Monks from './pages/work/Monks';
import Dove from './pages/work/Dove';
import Atea from './pages/work/Atea';
import Generative from './pages/work/Generative';
import Music from './pages/work/Music';
import Tungsteno from './pages/work/Tungsteno';

//PROJECT IMPORTS
import TheNoise from './pages/projects/TheNoise';
import TheGlitch from './pages/projects/TheGlitch';
import TheTape from './pages/projects/TheTape';
import TrenchRun from './pages/projects/TrenchRun';


function App() {
  return (
    <Router>
      <div className="flex h-screen w-screen overflow-hidden">
        <div className="fixed top-0 left-0 h-full">
          <SideNav />
        </div>
        <main className="flex-1 p-4 ml-64 max-w-[calc(100vw-16rem)] overflow-y-auto">
          <div className="max-w-[calc(100vw-8rem)]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/work/Monks" element={<Monks />} />
              <Route path="/work/Dove" element={<Dove />} />
              <Route path="/work/atea" element={<Atea />} />
              <Route path="/work/Tungsteno" element={<Tungsteno />} />
              <Route path="/projects/TheNoise" element={<TheNoise />} />
              <Route path="/projects/TheGlitch" element={<TheGlitch />} />
              <Route path="/projects/TheTape" element={<TheTape />} />
              <Route path="/projects/TrenchRun" element={<TrenchRun />} />
              <Route path="/work/Generative" element={<Generative />} />
              <Route path="/work/Music" element={<Music />} />
              <Route path="/about" element={<About />} />
              <Route path="/labs/electronics" element={<Electronics />} />
              <Route path="/labs/GenerativeAI" element={<GenerativeAI />} />
              <Route path="/labs/AlternativeTechnology" element={<AlternativeTechnology />} />
            </Routes>
          </div>
          <SideNotes/>
          {/* <ThemeToggle /> */}
        </main>
          
        </div>
    </Router>
  );
}

export default App;
