import React from 'react';

const NewContact = () => {
  return (
    <section className="contact white-bg">
      <div className="contact-content">
        <h2 className="contact-title">Contact me</h2>
        <p className="contact-text">
          If you want to get in touch or check out my projects, feel free to click the icons below.
        </p>
        
        <div className="info-container">
          <div className="contact-info">
            <i className="fas fa-phone icon"></i>
            <p>(+34) 623154247</p>
          </div>
          
          <div className="contact-info">
            <i className="fas fa-envelope icon"></i>
            <p>itoito035@gmail.com</p>
          </div>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/itoito0350" className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          
          <a href="https://www.kaggle.com/milagrosangulo" className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-kaggle"></i>
          </a>
        </div>
        
        <button className="back-btn">Back to top</button>
      </div>
    </section>
  );
};

export default NewContact;
