import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import logo_gif from '../../assets/Mohith.gif'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo_gif} alt="" />
            <p>I am an enthusiastic full stack web developer. I have done many projects in this domain.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='enter your email'/>
            </div>
            <div className="footer-subscribe">
                Subscribe
            </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Mohith Mohan Kumar Kancharla. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
