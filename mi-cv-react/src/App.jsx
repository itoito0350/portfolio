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

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import './styles/index.css';

const App = () => {
  const [isAnimating, setIsAnimating] = useState(true); // Inicia con la animación activa
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAnimating(true); 
    setShowContent(false); 

    setTimeout(() => {
      setIsAnimating(false); 
      setShowContent(true); 
    }, 1500); 

  }, []); 

  useEffect(() => {
    setIsAnimating(true); 
    setShowContent(false); 

    setTimeout(() => {
      setIsAnimating(false); 
      setShowContent(true); 
    }, 1500); 

  }, [location]); 

  return (
    <ThemeProvider theme={theme}>
      <GlitchBackground />
      <Navbar setIsAnimating={setIsAnimating} />
      
      {/* PageTransition controla la animación global */}
      <PageTransition isAnimating={isAnimating} setIsAnimating={setIsAnimating} />

      <div style={{ marginTop: '200px', marginRight: '300px' }}>
        <AnimatePresence mode="wait">
          {showContent && (
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Header />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default App;
