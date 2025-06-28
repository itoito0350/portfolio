import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectsContainer, ProjectCard } from "../styles/ProjectsStyles";

const Projects = () => {
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();

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
    }
  ];

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

      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.github && (
            <p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#4CAF50', textDecoration: 'underline' }}
              >
                View on GitHub
              </a>
            </p>
          )}
        </ProjectCard>
      ))}

      <button onClick={handleBackClick}>Back to top</button>
    </ProjectsContainer>
  );
};

export default Projects;

