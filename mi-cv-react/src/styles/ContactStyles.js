import styled from 'styled-components';

const ContactContainer = styled.section`
  width: 100%; /* Ancho completo */
  max-width: 800px; /* Ancho máximo para pantallas grandes */
  margin: 80px auto; /* Centrado horizontal automático */
  padding: 20px;
  color: white;
  border-radius: 10px;
  text-align: center;

  /* Centrado adicional en pantallas pequeñas */
  @media (max-width: 1200px) { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 90%; /* Más pequeño en pantallas pequeñas */
    margin: 60px auto; /* Margen superior ajustado */
    min-height: 100vh; /* Ocupa toda la pantalla */
  }

  /* Estilos del título h2 */
  h2 {
    font-family: ${(props) => props.theme.fontFamily.main};
    letter-spacing: 1.5px;
    margin-bottom: 20px;
    font-size: 2rem; /* Tamaño base */

    @media (max-width: 1200px) { 
      font-size: 1.8rem; /* Un poco más pequeño en laptops */
    }

    @media (max-width: 768px) { 
      font-size: 1.5rem; /* Mucho más pequeño en móviles */
    }
  }

  /* Estilos del párrafo p */
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 20px;
    font-family: ${(props) => props.theme.fontFamily.main};

    @media (max-width: 1200px) { 
      font-size: 1rem; /* Más pequeño en laptops */
    }

    @media (max-width: 768px) { 
      font-size: 0.9rem; /* Aún más pequeño en móviles */
    }
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
