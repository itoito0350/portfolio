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

  // Estado para animar solo en navegaciones distintas a la inicial
  const [isAnimating, setIsAnimating] = useState(false);
  // Estado para mostrar contenido con retraso en navegación
  const [showContent, setShowContent] = useState(isHome);

  useEffect(() => {
    if (isHome) {
      // En la página inicial se muestra contenido directamente sin animación
      setIsAnimating(false);
      setShowContent(true);
      return;
    }

    // En otras rutas: empieza animación y oculta contenido
    setIsAnimating(true);
    setShowContent(false);

    // Retrasa la aparición del contenido hasta que la animación termine
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setShowContent(true);
    }, 900); // Ajusta este tiempo según duración de animación en PageTransition

    return () => clearTimeout(timer);
  }, [location, isHome]);

  return (
    <ThemeProvider theme={theme}>
      <GlitchBackground />
      {isHome && <Navbar setIsAnimating={setIsAnimating} />}
      <PageTransition isAnimating={isAnimating} setIsAnimating={setIsAnimating} />

      <div
        style={{
          marginTop: isHome ? '200px' : '40px',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1200px',
          padding: '0 1rem',
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {showContent && (
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
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

