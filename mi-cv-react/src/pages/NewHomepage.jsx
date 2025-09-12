import React from 'react';
import NewHero from '../components/NewHero';
import NewAbout from '../components/NewAbout';
import NewProjects from '../components/NewProjects';
import NewContact from '../components/NewContact';
import '../styles/NewDesign.css';

const NewHomepage = () => {
  return (
    <div className="new-portfolio">
      <NewHero />
      <NewAbout />
      <NewProjects />
      <NewContact />
      
      {/* Skills Ticker Fijo */}
      <div className="skills-ticker">
        <div className="ticker-content">
          <span className="ticker-item">HTML5</span> • 
          <span className="ticker-item">CSS3</span> • 
          <span className="ticker-item">React</span> • 
          <span className="ticker-item">Node.js</span> • 
          <span className="ticker-item">Python</span> • 
          <span className="ticker-item">Django</span> • 
          <span className="ticker-item">JavaScript</span> • 
          <span className="ticker-item">React Native</span> • 
          <span className="ticker-item">UI/UX Design</span> • 
          <span className="ticker-item">Figma</span> • 
          <span className="ticker-item">Git</span> • 
          <span className="ticker-item">MySQL</span> •
          <span className="ticker-item">PostgreSQL</span> •
          <span className="ticker-item">Docker</span> •
          <span className="ticker-item">3D Modeling</span> •
          <span className="ticker-item">Android Studio</span>
        </div>
      </div>
    </div>
  );
};

export default NewHomepage;
