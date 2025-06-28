import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactContainer, InfoContainer, ContactInfo, Link, SocialLinks } from "../styles/ContactStyles";
import { FaGithub, FaKaggle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    setIsFading(true);
    window.skipManualFade = true;

    setTimeout(() => {
      navigate('/');
    }, 800);
  };

  return (
    <ContactContainer className={isFading ? 'fade-out' : ''}>
      <h2>Contact me</h2>
      <p>If you want to get in touch or check out my projects, feel free to click the icons below.

</p>
      
      <InfoContainer>
        <ContactInfo>
          <FaPhoneAlt style={{ verticalAlign: 'middle', fontSize: '1.5rem' }} />
          <p style={{ margin: 0, lineHeight: '1.5', fontSize: '1.2rem' }}>(+34) 623154247</p>
        </ContactInfo>

        <ContactInfo>
          <FaEnvelope style={{ verticalAlign: 'middle', fontSize: '1.5rem' }} />
          <p style={{ margin: 0, lineHeight: '1.5', fontSize: '1.2rem' }}>itoito035@gmail.com</p>
        </ContactInfo>
      </InfoContainer>

      <SocialLinks>
        <Link href="https://github.com/itoito0350" target="_blank" aria-label="GitHub">
          <FaGithub style={{ verticalAlign: 'middle' }} />
        </Link>

        <Link href="https://www.kaggle.com/milagrosangulo" target="_blank" aria-label="Kaggle">
          <FaKaggle style={{ verticalAlign: 'middle' }} />
        </Link>
      </SocialLinks>

      <button onClick={handleBackClick}>Volver al inicio</button>
    </ContactContainer>
  );
};

export default Contact;
