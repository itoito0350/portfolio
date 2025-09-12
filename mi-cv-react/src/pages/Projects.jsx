import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectsContainer, ProjectCard } from "../styles/ProjectsStyles";

const Projects = () => {
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  const handleBackClick = () => {
    setIsFading(true);
    window.skipManualFade = true;
    setTimeout(() => {
      navigate('/');
    }, 800);
  };

  const projects = [
    {
      title: 'GYM-FIT',
      description: 'Web platform for gyms. React + Django.',
      github: 'https://github.com/itoito0350/Django-react_project.git'
    },
    {
      title: 'Civica.React-Native',
      description: 'Cross-platform app for citizen management.',
      github: 'https://github.com/itoito0350/proyecto-civica.git'
    },
    {
      title: 'My Projects',
      description: 'Web and Mobile Application Projects.',
      github: 'https://github.com/itoito0350/Proyectos.git'
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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

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

      {/* Contenedor principal con botones de navegación */}
      <div style={{ position: 'relative', width: '100%', margin: '30px 0' }}>
        
        {/* Botón izquierdo */}
        <button
          onClick={scrollLeft}
          style={{
            position: 'absolute',
            left: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: '#4cc9f0',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ←
        </button>

        {/* Contenedor de scroll horizontal */}
        <div
          ref={scrollContainerRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '20px',
            padding: '20px 10px',
            scrollbarWidth: 'thin',
            scrollbarColor: '#4cc9f0 #1a1a2e',
            cursor: 'grab',
            scrollSnapType: 'x mandatory'
          }}
          onMouseDown={(e) => {
            const container = scrollContainerRef.current;
            if (container) {
              const startX = e.pageX - container.offsetLeft;
              const scrollLeft = container.scrollLeft;
              
              const onMouseMove = (e) => {
                const x = e.pageX - container.offsetLeft;
                const walk = (x - startX) * 2;
                container.scrollLeft = scrollLeft - walk;
              };
              
              const onMouseUp = () => {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
              };
              
              document.addEventListener('mousemove', onMouseMove);
              document.addEventListener('mouseup', onMouseUp);
            }
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              style={{
                minWidth: '300px',
                flexShrink: 0,
                scrollSnapAlign: 'start'
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
                  >
                    🌐 Live Demo
                  </a>
                )}
              </div>
            </ProjectCard>
          ))}
        </div>

        {/* Botón derecho */}
        <button
          onClick={scrollRight}
          style={{
            position: 'absolute',
            right: '-50px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: '#4cc9f0',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          →
        </button>
      </div>

      {/* Indicador de scroll */}
      <div style={{
        textAlign: 'center',
        color: '#a5b4fc',
        fontSize: '14px',
        marginTop: '10px'
      }}>
        ← Scroll or use arrows to see more projects →
      </div>

      <button onClick={handleBackClick} style={{ marginTop: '30px' }}>
        Back to top
      </button>
    </ProjectsContainer>
  );
};

export default Projects;
