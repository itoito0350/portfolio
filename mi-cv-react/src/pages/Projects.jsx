import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectsContainer, ProjectCard } from "../styles/ProjectsStyles";

const Projects = () => {
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleBackClick = () => {
    setIsFading(true);
    window.skipManualFade = true;
    setTimeout(() => {
      navigate('/');
    }, 800);
  };

  const projects = [
    {
      title: 'My Projects',
      description: 'Web and Mobile Application Projects.',
      github: 'https://github.com/itoito0350/Proyectos.git'
    },
    {
      title: 'Civica.React-Native',
      description: 'Cross-platform app for citizen management.',
      github: 'https://github.com/itoito0350/proyecto-civica.git'
    },
    {
      title: 'GYM-FIT',
      description: 'Web platform for gyms. React + Django.',
      github: 'https://github.com/itoito0350/Django-react_project.git'
    },
    {
      title: 'Customer Segmentation RFM',
      description: 'Machine Learning project for customer segmentation.',
      github: 'https://github.com/itoito0350/rfm-analysis.git',
      demo: 'https://itoito0350.github.io/rfm-analysis/',
    },
    {
      title: 'Loan Approval Prediction',
      description: 'Machine Learning model for loan approval predictions.',
      github: 'https://github.com/itoito0350/Loan-Approval-Prediction-A-Balanced-Data-Approach.git',
    }
  ];

  // Duplicar proyectos para efecto infinito
  const duplicatedProjects = [...projects, ...projects];

  return (
    <ProjectsContainer
      as={motion.section}
      className={isFading ? 'fade-out' : ''}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>My Projects</h2>

      {/* Contenedor del carrusel infinito */}
      <div 
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '20px 0',
          margin: '30px 0'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          style={{
            display: 'flex',
            gap: '20px',
            width: 'max-content'
          }}
          animate={{
            x: [0, -((300 + 20) * projects.length)] // Ancho de tarjeta + gap
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}
          whileHover={{ scale: 1.02 }}
        >
          {duplicatedProjects.map((project, i) => (
            <ProjectCard
              key={i}
              style={{
                minWidth: '300px',
                height: '200px',
                flexShrink: 0
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div style={{ 
                marginTop: '15px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#4CAF50', 
                      textDecoration: 'underline',
                      fontSize: '14px'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    📁 View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#4cc9f0', 
                      textDecoration: 'underline',
                      fontSize: '14px'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    🌐 Live Demo
                  </a>
                )}
              </div>
            </ProjectCard>
          ))}
        </motion.div>
      </div>

      <button onClick={handleBackClick} style={{ marginTop: '30px' }}>
        Back to top
      </button>
    </ProjectsContainer>
  );
};

export default Projects;
