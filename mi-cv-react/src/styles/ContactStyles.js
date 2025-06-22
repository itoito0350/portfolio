import styled from 'styled-components';
import inter from '../assets/inter.jpg';

const ContactContainer = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 20px 40px; /* Espacio arriba para compensar el nav fijo */
  color: white;
  border-radius: 10px;
  text-align: center;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${inter});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(180deg);
    opacity: 0.2;
    z-index: 0;
    pointer-events: none;
  }

  @media (max-width: 1200px) {
    padding: 80px 15px 30px;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    padding: 60px 10px 30px;
  }

  h2 {
    font-family: ${(props) => props.theme.fontFamily.main};
    letter-spacing: 1.5px;
    margin-bottom: 20px;
    font-size: 2rem;
    position: relative;
    z-index: 2;

    @media (max-width: 1200px) { 
      font-size: 1.8rem;
    }

    @media (max-width: 768px) { 
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 20px;
    font-family: ${(props) => props.theme.fontFamily.main};
    position: relative;
    z-index: 2;

    @media (max-width: 1200px) { 
      font-size: 1rem;
    }

    @media (max-width: 768px) { 
      font-size: 0.9rem;
    }
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
    position: relative;
    z-index: 2;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

const Link = styled.a`
  color: white;
  font-size: 2rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primary};
  }

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

export { ContactContainer, InfoContainer, ContactInfo, Link, SocialLinks };
