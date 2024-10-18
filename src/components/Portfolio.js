import React, { useState } from 'react';
import './Portfolio.css'; 

const Portfolio = ({ projects }) => {
  const [filter, setFilter] = useState('all');

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="portfolio-container">
      <div className="section-line"></div> 
      
      <h1 className="portfolio-title">My Works</h1>

      <div className="filter-bar">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => handleFilter('all')}>All</button>
        <button className={filter === 'academic' ? 'active' : ''} onClick={() => handleFilter('academic')}>Academic</button>
        <button className={filter === 'webdevelopment' ? 'active' : ''} onClick={() => handleFilter('webdevelopment')}>Web Development</button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image"/>
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
