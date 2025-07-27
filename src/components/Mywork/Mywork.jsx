import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div className='mywork' id='work'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="project-card">
            <div className="card-image-container">
              <img 
                src={work.w_img} 
                alt={work.w_name} 
                className="project-image"
                loading="lazy"
              />
              <div className="card-overlay">
                <a 
                  href={work.w_link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-project-btn"
                  aria-label={`View ${work.w_name} project`}
                >
                  View Project
                </a>
              </div>
            </div>
            
            <div className="card-content">
              <h3 className="project-title">{work.w_name}</h3>
              
              {work.technologies && work.technologies.length > 0 && (
                <div className="tech-stack">
                  {work.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
              
              <p className="project-description">
                {work.description || "An innovative project showcasing modern web development techniques and user-centered design principles."}
              </p>
              
              <div className="card-footer">
                <div className="project-status">Live</div>
                <a 
                  href={work.w_link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                  aria-label={`View source code for ${work.w_name}`}
                >
                  <span>View Code</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path 
                      d="M7 17L17 7M17 7H7M17 7V17" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="mywork-showmore"
        onClick={() => {
          // Add functionality to load more projects
          console.log('Loading more projects...');
        }}
        aria-label="Show more projects"
      >
        <p>Show More Projects</p>
        <img src={arrow_icon} alt="" aria-hidden="true" />
      </button>
    </div>
  )
}

export default Mywork