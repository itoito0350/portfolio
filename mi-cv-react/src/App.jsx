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

  const [transitionStage, setTransitionStage] = useState('idle'); // 'idle', 'closing', 'changing', 'opening'
  const [pendingPath, setPendingPath] = useState(null);

  const handleNavigate = (path) => {
    if (transitionStage !== 'idle') return;
    setPendingPath(path);
    setTransitionStage('closing');
  };

  useEffect(() => {
    if (transitionStage === 'changing' && pendingPath) {
      navigate(pendingPath);
      setPendingPath(null);
      setTimeout(() => setTransitionStage('opening'), 100); // esperar un frame
    }

    if (transitionStage === 'opening') {
      const timeout = setTimeout(() => setTransitionStage('idle'), 1200);
      return () => clearTimeout(timeout);
    }
  }, [transitionStage, pendingPath, navigate]);

  const isHome = location.pathname === '/';

  return (
    <ThemeProvider theme={theme}>
      <GlitchBackground />
      {isHome && <Navbar onNavigate={handleNavigate} />}
      <PageTransition stage={transitionStage} setStage={setTransitionStage} />

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
          {transitionStage !== 'closing' && (
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
