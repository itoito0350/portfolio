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

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import './styles/index.css';

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Estado para controlar las animaciones
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Si estamos en home, no animar
    if (isHome) {
      setIsAnimating(false);
      setShowContent(true);
      return;
    }

    // Iniciar animación al cambiar de ruta
    setIsAnimating(true);
    setShowContent(false);

    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 800); // Duración de la animación

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 400); // Mostrar contenido a mitad de animación

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(contentTimer);
    };
  }, [location, isHome]);

  return (
    <ThemeProvider theme={theme}>
      <GlitchBackground isAnimating={isAnimating} />
      
      {/* Navbar siempre visible */}
      <Navbar setIsAnimating={setIsAnimating} />
      
      <PageTransition isAnimating={isAnimating} />

      <div
        style={{
          marginTop: isHome ? '200px' : '140px',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1200px',
          padding: '0 1rem',
          minHeight: 'calc(100vh - 300px)'
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {showContent && (
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 30 }}
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
