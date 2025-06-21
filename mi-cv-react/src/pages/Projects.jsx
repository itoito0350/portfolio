import React from 'react';
import { motion } from 'framer-motion';
import { ProjectsContainer, ProjectCard } from "../styles/ProjectsStyles";




const Projects = () => {
  const projects = [
    {
      title: 'CV Web con React',
      description: 'Proyecto personal minimalista con React + Vite.'
    },
    {
      title: 'Dashboard con Python & Django',
      description: 'Panel de administración con gráficos y analítica.'
    },
    {
      title: 'Landing Page con React',
      description: 'Diseño moderno y responsive.'
    },
    {
      title: 'E-commerce con Node.js',
      description: 'Plataforma de compras con autenticación JWT.'
    }
  ];

  return (
    <ProjectsContainer
      as={motion.section}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;

