import React from 'react';
import {AboutContainer} from "../styles/AboutStyles";


const About = () => {
  return (
    <AboutContainer>
      <h2>Sobre mí</h2>
      
      <p>
        Apasionada por la <span style={{ color: '#4e8477' }}>tecnología</span> y los <span style={{ color: '#4e8477' }}>retos constantes</span>.  
        Mi carrera como <strong>Full Stack Developer</strong> comienza en el área de <span>Frontend</span>, como freelancer, donde desarrollo interfaces modernas y <span>minimalistas.</span><br /><br />  
        Buscando ampliar mis conocimientos, me especializo en <span>Backend</span> y Arquitectura de Software a través de mis estudios oficiales en <span>Desarrollo de Aplicaciones Multiplataforma.</span> 
        <br /><br />
        A lo largo de mi trayectoria, obtengo certificaciones en <span>UX Design, Python Automation, Machine Learning..etc</span>, permitiéndome tener una <span>visión global </span>del desarrollo de software, desde la lógica del servidor hasta la <span>experiencia de usuario.</span>  
        <br /><br />
        Disfruto trabajando en <span>equipo</span> y  enfrentando<span> desafíos complejos. </span> Siempre comprometida con la formación continua.
      </p>
    </AboutContainer>
  );
};

export default About;
