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
  const location = useLocation();

  // Estado para la animación y mostrar contenido
  const [animationStage, setAnimationStage] = useState('idle'); // 'idle' | 'closing' | 'opening'
  const [showContent, setShowContent] = useState(false);

  // Guardamos la ruta previa para comparar
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    const comingFromHome = previousPath.current === '/';
    const goingToHome = location.pathname === '/';

    if (comingFromHome && !goingToHome) {
      // Salimos del home: animamos transición completa
      setAnimationStage('closing');
      setShowContent(false);
    } else {
      // Entramos al home o navegamos dentro de otras páginas: no animar
      setAnimationStage('idle');
      setShowContent(true);
    }

    previousPath.current = location.pathname;
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <ThemeProvider theme={theme}>
      <GlitchBackground />
      {isHome && <Navbar />}
      
      {/* Solo renderizamos animación si está en closing o opening */}
      {(animationStage === 'closing' || animationStage === 'opening') && (
        <PageTransition
          animationStage={animationStage}
          setAnimationStage={setAnimationStage}
          onOpeningComplete={() => {
            setShowContent(true);
            setAnimationStage('idle');
          }}
        />
      )}

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

