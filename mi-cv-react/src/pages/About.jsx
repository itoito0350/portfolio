import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AboutContainer } from '../styles/AboutStyles';
import GreenSmoke from '../components/GreenSmoke'; // tu SVG animado

const About = () => {
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    setIsFading(true);
    window.skipManualFade = true;
    setTimeout(() => {
      navigate('/');
    }, 800);
  };

  return (
    <AboutContainer className={isFading ? 'fade-out' : ''}>
      <GreenSmoke /> {/* fondo */}
      <h2>Sobre mí</h2>
      <p>
        Apasionada por la <span>tecnología</span> y los <span>retos constantes</span>.  
        Mi carrera como <strong>Full Stack Developer</strong> comienza en el área de <span>Frontend</span>, como freelancer, donde desarrollo interfaces modernas y <span>minimalistas</span>.
        <br /><br />  
        Buscando ampliar mis conocimientos, me especializo en <span>Backend</span> y Arquitectura de Software a través de mis estudios oficiales en <span>Desarrollo de Aplicaciones Multiplataforma</span>. 
        <br /><br />
        A lo largo de mi trayectoria, obtengo certificaciones en <span>UX Design, Python Automation, Machine Learning, etc.</span>, permitiéndome tener una <span>visión global</span> del desarrollo de software, desde la lógica del servidor hasta la <span>experiencia de usuario</span>.  
        <br /><br />
        Disfruto trabajando en <span>equipo</span> y enfrentando <span>desafíos complejos</span>. Siempre comprometida con la formación continua.
      </p>
      <button
        onClick={handleBackClick}
        style={{
          marginTop: '2rem',
          padding: '0.8rem 2rem',
          background: '#4e8477',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 2,
        }}
      >
        Volver al inicio
      </button>
    </AboutContainer>
  );
};

export default About;
