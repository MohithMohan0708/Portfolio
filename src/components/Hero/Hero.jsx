import React from 'react'
import './Hero.css'
import mohith_img from '../../assets/mohith_img2.jpg'
import myResume from '../../assets/KancharlaMohithMohanKumarResume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className="hero-background-effects">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>
      
      <div className="image-container">
        <img src={mohith_img} alt="Mohith" />
        <div className="image-glow"></div>
      </div>
      
      <div className="hero-content">
        <h1>
          <span className="greeting">Hello, I'm</span>
          <div className="name-role-container">
            <span className="name">Mohith Mohan Kumar Kancharla</span>
            <span className="role">Full Stack Developer</span>
          </div>
        </h1>
        <p className="hero-description">
          Passionate about crafting exceptional digital experiences with cutting-edge technologies. 
          Specialized in web development and eager to explore the frontiers of machine learning.
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">250+</span>
            <span className="stat-label">Problems in LeetCode</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Dedication</span>
          </div>
        </div>
      </div>
      
      <div className="hero-action">
        <AnchorLink className='hero-connect' offset={50} href='#contact'>
          <span>Connect With Me</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </AnchorLink>
        <a href={myResume} download className="hero-resume">
          <span>Download Resume</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M21 15V19A2 2 0 0119 21H5A2 2 0 013 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </div>
  )
}

export default Hero