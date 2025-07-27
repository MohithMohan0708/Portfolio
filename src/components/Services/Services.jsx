import React from 'react'
import './Services.css'
import services_data from '../../assets/services_data'

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      
      <div className="services-container">
        {services_data.map((service, index) => {
          return (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-number">{service.s_no}</div>
                <div className="service-icon">
                  {index === 0 && <i className="fas fa-code"></i>}
                  {index === 1 && <i className="fas fa-mobile-alt"></i>}
                  {index === 2 && <i className="fas fa-paint-brush"></i>}
                  {index === 3 && <i className="fas fa-server"></i>}
                  {index === 4 && <i className="fas fa-chart-line"></i>}
                  {index === 5 && <i className="fas fa-cogs"></i>}
                </div>
              </div>
              
              <div className="service-content">
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
              </div>
              
              <div className="service-footer">
                <div className="service-readmore">
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="service-overlay"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services