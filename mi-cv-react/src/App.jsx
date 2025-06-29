import React, { useState, useEffect, useRef } from 'react';
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const location = useLocation();
  const isFirstLoad = useRef(true);
  const prevPath = useRef(null);

  useEffect(() => {
    // No animar si es la primera carga o si se vuelve al home
    const currentPath = location.pathname;
    const comingBackToHome = currentPath === '/' && prevPath.current !== null;

    if (isFirstLoad.current || comingBackToHome) {
      isFirstLoad.current = false;
      prevPath.current = currentPath;
      return;
    }

    setIsAnimating(true);
    setShowContent(false);

    const timer = setTimeout(() => {
      setIsAnimating(false);
      setShowContent(true);
    }, 800);

    prevPath.current = currentPath;
    return () => clearTimeout(timer);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <ThemeProvider theme={theme}>
      <GlitchBackground />
      {isHome && <Navbar setIsAnimating={setIsAnimating} />}
      {isAnimating && <PageTransition isAnimating={isAnimating} />}

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
              transition={{ duration: 0.5, ease: "easeOut" }}
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


