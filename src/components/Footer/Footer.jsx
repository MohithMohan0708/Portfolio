import React, { useState } from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import logo_gif from '../../assets/Mohith.gif'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 2000)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer' role="contentinfo">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-logo-section">
            <img 
              src={logo_gif} 
              alt="Mohith Mohan Kumar Kancharla" 
              loading="lazy"
            />
            <div className="footer-brand">
              <h3>Mohith Mohan Kumar Kancharla</h3>
              <span>Full Stack Developer</span>
            </div>
          </div>
          
          <p>
            Passionate full stack developer crafting innovative web solutions with modern technologies. 
            Dedicated to creating exceptional user experiences through clean code and thoughtful design.
          </p>
          
          <div className="footer-social-links">
            <a 
              href="https://github.com/MohithMohan0708" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a 
              href="https://linkedin.com/in/mohithmohankumar-Kancharla" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="Twitter Profile"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a 
              href="mailto:mohithmohan0708@gmail.com" 
              className="social-link"
              aria-label="Send Email"
            >
              <i className="fas fa-envelope" aria-hidden="true"></i>
            </a>
          </div>

          <div className="footer-contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <span>Visakhapatnam, Andhra Pradesh, India</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone" aria-hidden="true"></i>
              <span>+91 12345 67890</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <span>mohithmohan0708@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div className="footer-top-right">
          <div className="newsletter-section">
            <h4 className="newsletter-title">Stay Updated</h4>
            <p className="newsletter-subtitle">
              Subscribe to get notified about new projects, blog posts, and tech insights.
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <div className="footer-email-input">
              <img 
                src={user_icon} 
                alt="" 
                aria-hidden="true"
              />
              <input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
              />
            </div>
            <button 
              type="submit" 
              className="footer-subscribe"
              disabled={isSubscribed}
              aria-label="Subscribe to newsletter"
            >
              {isSubscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
      
      <hr className="footer-divider" />
      
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © {currentYear} Mohith Mohan Kumar Kancharla. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <a 
            href="/terms" 
            className="footer-link"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>
          <a 
            href="/privacy" 
            className="footer-link"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a 
            href="#contact" 
            className="footer-link"
            onClick={(e) => {
              e.preventDefault()
              // Scroll to contact section or open contact modal
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            aria-label="Contact information"
          >
            Contact
          </a>
          <a 
            href="/sitemap.xml" 
            className="footer-link"
            aria-label="Site map"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer