import styled from 'styled-components';
import interBackground from '../assets/inter.jpg';

const AboutContainer = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: 40px; 

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
    transform: rotate(180deg);
    z-index: 0;
    opacity: 0.2;
    pointer-events: none;
  }

  
  > * {
    position: relative;
    z-index: 2;
  }

  
  max-width: 800px;
  margin: 0 auto; /* Cambiado: solo margen horizontal */
  padding: 1rem 2rem;
  color: white;
  border-radius: 10px;
  text-align: center;

  h2 {
    font-family: ${(props) => props.theme.fontFamily.main};
    letter-spacing: 1.5px;
    margin-bottom: 20px;
    font-size: 2.5rem;
    margin-top: 0; /* Aseguramos que no tenga margen superior */
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    font-family: ${(props) => props.theme.fontFamily.main};
    font-weight: bold;
    color: #b3b3b3;
    margin: 0.5rem 0; /* Reducido margen vertical */
  }

  span {
    color: #4e8477;
    font-weight: bold;
  }

  button {
    margin-top: 1.5rem; /* Reducido desde 2rem */
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
    margin-top: 20px; 

    h2 {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    p {
      font-size: 1rem;
      margin: 0.3rem 0;
    }

    button {
      margin-top: 1rem;
    }
  }
`;

export { AboutContainer };
