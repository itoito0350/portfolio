import React from 'react';

const NewProjects = () => {
  return (
    <section className="projects">
      <div className="chess-board">
        {/* Proyecto 1 */}
        <div className="chess-square">
          <h3 className="project-title">My Projects</h3>
          <p className="project-desc">Web and Mobile Application Projects.</p>
          <a href="https://github.com/itoito0350/Proyectos.git" className="project-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        
        {/* Proyecto 2 */}
        <div className="chess-square">
          <h3 className="project-title">Civica.React-Native</h3>
          <p className="project-desc">Cross-platform app for citizen management.</p>
          <a href="https://github.com/itoito0350/proyecto-civica.git" className="project-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        
        {/* Proyecto 3 */}
        <div className="chess-square">
          <h3 className="project-title">GYM-FIT</h3>
          <p className="project-desc">Web platform for gyms. React + Django.</p>
          <a href="https://github.com/itoito0350/Django-react_project.git" className="project-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        
        {/* Proyecto 4 */}
        <div className="chess-square">
          <h3 className="project-title">Customer Segmentation RFM</h3>
          <p className="project-desc">Machine Learning project for customer segmentation.</p>
          <a href="https://github.com/itoito0350/rfm-analysis.git" className="project-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        
        {/* Proyecto 5 */}
        <div className="chess-square">
          <h3 className="project-title">Loan Approval Prediction</h3>
          <p className="project-desc">Machine Learning model for loan approval predictions.</p>
          <a href="https://github.com/itoito0350/Loan-Approval-Prediction-A-Balanced-Data-Approach.git" className="project-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        
        {/* Proyecto 6 */}
        <div className="chess-square">
          <h3 className="project-title">3D Modeling Projects</h3>
          <p className="project-desc">3D design and modeling portfolio projects.</p>
          <a href="#" className="project-link">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewProjects;
