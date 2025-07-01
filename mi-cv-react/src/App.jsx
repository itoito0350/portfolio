import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const [stage, setStage] = useState('idle'); // 'idle', 'closing', 'changing', 'opening'
  const [nextPath, setNextPath] = useState(null);
  const [showContent, setShowContent] = useState(true);

  const isHome = location.pathname === '/';

  const onNavigate = (path) => {
    if (path !== location.pathname && stage === 'idle') {
      setNextPath(path);
      setStage('closing');
      setShowContent(false);
    }
  };

  useEffect(() => {
    if (stage === 'changing' && nextPath) {
      navigate(nextPath);
      setStage('opening');
    } else if (stage === 'opening') {
      const timeout = setTimeout(() => {
        setStage('idle');
        setShowContent(true);
      }, 1000); // Debe coincidir con la duración de la animación
      return () => clearTimeout(timeout);
    }
  }, [stage, nextPath, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <GlitchBackground />
      <Navbar onNavigate={onNavigate} />
      <PageTransition stage={stage} setStage={setStage} />

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
              transition={{ duration: 0.5, ease: 'easeOut' }}
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

