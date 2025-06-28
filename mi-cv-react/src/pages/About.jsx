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
      <h2>About me</h2>
      <p>
        Passionate about <span>technology </span> and <span> constant challenges.</span>.  
        My career as a<strong>Full Stack Developer</strong> began in the <span>Frontend</span> field, working as a freelancer, where I created modern and minimalist <span>interfaces</span>.
        <br /><br />  
       Seeking to expand my knowledge, I specialized in  <span>Backend development and Software Architecture</span> through formal studies in  <span>Multiplatform Application Development.</span>. 
        <br /><br />
        Throughout my journey, I’ve earned certifications in <span>UX Design, Python Automation, Machine Learning and more</span>, giving me a  <span>global perspective</span> of software development, from server logic to  <span>user experience.</span>.  
        <br /><br />
        Working with others to overcome <span>complex challenges</span> is something I truly enjoy. Always committed to continuous learning.
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
        Back to top
      </button>
    </AboutContainer>
  );
};

export default About;
