import styled from 'styled-components';
import interBackground from '../assets/inter.jpg';

const AboutContainer = styled.section`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${interBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(180deg); /* 🔄 Ajusta según lo que necesites */
    z-index: 0;
    opacity: 0.2; /* Puedes subirla o bajarla */
    pointer-events: none;
  }

  /* Todo el contenido encima del fondo */
  > * {
    position: relative;
    z-index: 2;
  }

  /* Resto de tus estilos como antes */
  max-width: 800px;
  margin: 1rem auto;
  padding: 1rem 2rem;
  color: white;
  border-radius: 10px;
  text-align: center;

  h2 {
    font-family: ${(props) => props.theme.fontFamily.main};
    letter-spacing: 1.5px;
    margin-bottom: 20px;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    font-family: ${(props) => props.theme.fontFamily.main};
    font-weight: bold;
    color: #b3b3b3;
  }

  span {
    color: #4e8477;
    font-weight: bold;
  }

  button {
    margin-top: 2rem;
    padding: 0.8rem 2rem;
    background: #4e8477;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1rem;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export { AboutContainer };
