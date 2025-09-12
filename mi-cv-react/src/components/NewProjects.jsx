import React from 'react';

const NewProjects = () => {
  return (
    <section className="projects dark-bg">
      <div className="container">
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">Customer Segmentation</h3>
            <p className="project-desc">RFM analysis with Machine Learning for customer behavior prediction</p>
            <a href="#" className="project-link">View Project</a>
          </div>
          
          <div className="project-card">
            <h3 className="project-title">Loan Prediction</h3>
            <p className="project-desc">ML model for loan approval using balanced data approaches</p>
            <a href="#" className="project-link">View Project</a>
          </div>
          
          <div className="project-card">
            <h3 className="project-title">GYM-FIT Platform</h3>
            <p className="project-desc">React + Django fitness management system</p>
            <a href="#" className="project-link">View Project</a>
          </div>
          
          <div className="project-card">
            <h3 className="project-title">Civica App</h3>
            <p className="project-desc">Cross-platform citizen management application</p>
            <a href="#" className="project-link">View Project</a>
          </div>
          
          <div className="project-card">
            <h3 className="project-title">My Projects</h3>
            <p className="project-desc">Web and Mobile Application Projects collection</p>
            <a href="#" className="project-link">View Projects</a>
          </div>
          
          <div className="project-card">
            <h3 className="project-title">3D Modeling</h3>
            <p className="project-desc">3D design and modeling projects</p>
            <a href="#" className="project-link">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProjects;
