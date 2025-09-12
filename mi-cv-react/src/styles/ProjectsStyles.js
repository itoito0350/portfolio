import styled from 'styled-components';

const ProjectsContainer = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: 40px; /* REDUCIDO para empezar más arriba */

  /* Resto de tus estilos */
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 2rem;
  color: white;
  border-radius: 10px;
  text-align: center;

  h2 {
    font-family: ${(props) => props.theme.fontFamily.main};
    letter-spacing: 1.5px;
    margin-bottom: 30px;
    font-size: 2.5rem;
    margin-top: 0; /* Sin margen superior extra */
  }

  /* Contenedor del grid de proyectos */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 20px;
  }

  /* Tarjetas de proyecto */
  .project-card {
    background: rgba(30, 30, 50, 0.7);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(78, 132, 119, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(78, 132, 119, 0.4);
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #4cc9f0;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    font-family: ${(props) => props.theme.fontFamily.main};
    color: #b3b3b3;
    margin: 0.5rem 0;
  }

  .project-links {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 1rem;
  }

  a {
    color: #4CAF50;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid #4CAF50;
    border-radius: 5px;
    transition: all 0.3s ease;
    
    &:hover {
      background: #4CAF50;
      color: white;
    }
    
    &.demo-link {
      color: #4cc9f0;
      border-color: #4cc9f0;
      
      &:hover {
        background: #4cc9f0;
        color: white;
      }
    }
  }

  button {
    margin-top: 1.5rem;
    padding: 0.8rem 2rem;
    background: #4e8477;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
    
    &:hover {
      background: #3a6b5f;
    }
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1rem;
    margin-top: 20px; /* Menos margen en móvil */

    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 20px;
      margin-top: 15px;
    }

    .project-card {
      padding: 1.2rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }

    .project-links {
      flex-direction: column;
      gap: 10px;
    }

    button {
      margin-top: 1rem;
      padding: 0.7rem 1.5rem;
    }
  }

  @media (max-width: 480px) {
    margin-top: 15px;
    padding: 0.8rem;
    
    h2 {
      font-size: 1.8rem;
    }
    
    .project-card {
      padding: 1rem;
    }
  }
`;

export { ProjectsContainer };
