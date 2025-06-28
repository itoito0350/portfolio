import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles/App.css'; 
import GlitchBackground from './components/GlitchBackground';
import PageTransition from './components/PageTransition';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './pages/Header';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import SkillsTicker from './components/SkillsTicker';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import './styles/index.css';

const App = () => {
  const [animationStage, setAnimationStage] = useState('idle'); // 'idle' | 'closing' | 'opening'
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Cuando cambia la ruta, inicia animación de cierre
    setAnimationStage('closing');
    setShowContent(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <ThemeProvider theme={theme}>
      <GlitchBackground />
      {isHome && <Navbar />}
      
      <PageTransition
        animationStage={animationStage}
        setAnimationStage={setAnimationStage}
        onOpeningComplete={() => {
          setShowContent(true);
          setAnimationStage('idle');
        }}
      />

      <div
        style={{
          marginTop: isHome ? '200px' : '40px',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1200px',
          padding: '0 1rem',
        }}
      >
        <AnimatePresence mode="wait">
          {showContent && (
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Header />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          )}
        </AnimatePresence>
      </div>

      <SkillsTicker />
    </ThemeProvider>
  );
};

export default App;

