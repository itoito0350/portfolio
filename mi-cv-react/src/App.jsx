import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
import NewHomepage from './pages/NewHomepage';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import './styles/index.css';

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Estado para controlar las animaciones - INICIALMENTE DESACTIVADO
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [showNavbar, setShowNavbar] = useState(isHome);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // PRIMERA CARGA: No animar nada
    if (isInitialLoad) {
      setIsInitialLoad(false);
      setShowNavbar(isHome);
      setIsAnimating(false);
      setShowContent(true);
      return;
    }

    // Si estamos en home, mostrar navbar inmediatamente
    if (isHome) {
      setShowNavbar(true);
      setIsAnimating(false);
      setShowContent(true);
      return;
    }

    // En otras rutas: ocultar navbar y iniciar animación
    setShowNavbar(false);
    setIsAnimating(true);
    setShowContent(false);

    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 800);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 400);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(contentTimer);
    };
  }, [location, isHome, isInitialLoad]);

  return (
    <ThemeProvider theme={theme}>
      <GlitchBackground isAnimating={isAnimating} />
      
      {/* Navbar solo visible en Home */}
      {showNavbar && <Navbar setIsAnimating={setIsAnimating} />}
      
      <PageTransition isAnimating={isAnimating} />

      <div
        style={{
          marginTop: isHome ? '200px' : '40px',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1200px',
          padding: '0 1rem',
          minHeight: 'auto' // CORREGIDO: elimina altura forzada
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {showContent && (
            <motion.div
              key={location.pathname}
              initial={isInitialLoad ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ 
                duration: 0.7, 
                ease: 'easeInOut',
                delay: isHome ? 0 : 0.3 
              }}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Header />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/new" element={<NewHomepage />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <SkillsTicker />
    </ThemeProvider>
  );
};

export default App;
