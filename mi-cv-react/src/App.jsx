import React, { useState, useEffect, useRef } from 'react';
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Para evitar animación al montar la app por primera vez
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setIsAnimating(false);
      setShowContent(true);
      return;
    }

    // Evitar animación si hay flag externo (como antes)
    if (window.skipManualFade) {
      setIsAnimating(false);
      setShowContent(true);
      window.skipManualFade = false;
      return;
    }

    // Si es navegación normal, animar
    setIsAnimating(true);
    setShowContent(false);

    const timer = setTimeout(() => {
      setIsAnimating(false);
      setShowContent(true);
    }, 1000); // duración del overlay + buffer

    return () => clearTimeout(timer);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <ThemeProvider theme={theme}>
      <GlitchBackground />
      {isHome && <Navbar setIsAnimating={setIsAnimating} />}
      <PageTransition isAnimating={isAnimating} />

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

