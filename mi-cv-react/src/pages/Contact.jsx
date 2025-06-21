import React from 'react';
import {ContactContainer, InfoContainer, ContactInfo, Link, SocialLinks } from "../styles/ContactStyles";
import { FaGithub, FaKaggle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 



const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contacta conmigo</h2>
      <p>Si deseas ponerte en contacto o ver mis proyectos, no dudes en hacer clic en los iconos de abajo.</p>
      
      <InfoContainer>
        {/* Teléfono */}
        <ContactInfo>
          <FaPhoneAlt style={{ verticalAlign: 'middle', fontSize: '1.5rem' }} />
          <p style={{ margin: 0, lineHeight: '1.5', fontSize: '1.2rem' }}>(+34) 623154247</p>
        </ContactInfo>

        {/* Email */}
        <ContactInfo>
          <FaEnvelope style={{ verticalAlign: 'middle', fontSize: '1.5rem' }} />
          <p style={{ margin: 0, lineHeight: '1.5', fontSize: '1.2rem' }}>itoito035@gmail.com</p>
        </ContactInfo>
      </InfoContainer>

      <SocialLinks>
        {/* GitHub */}
        <Link href="https://github.com/itoito0350" target="_blank" aria-label="GitHub">
          <FaGithub style={{ verticalAlign: 'middle' }} />
        </Link>

        {/* Kaggle */}
        <Link href="https://www.kaggle.com/milagrosangulo" target="_blank" aria-label="Kaggle">
          <FaKaggle style={{ verticalAlign: 'middle' }} />
        </Link>
      </SocialLinks>
    </ContactContainer>
  );
};

export default Contact;
