import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo_gif from '../../assets/Mohith.gif'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  return (
    <div className='navbar'>
      <img src={logo_gif} alt="" />
      <svg className='nav-mob-open' onClick={openMenu} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H21M3 12H21M3 18H21" stroke="url(#grad)" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#0062ff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#61efff', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      <ul ref={menuRef} className='nav-menu'>
        <svg className='nav-mob-close' onClick={closeMenu} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 18L18 6M6 6L18 18" stroke="url(#grad)" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#0062ff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#61efff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
        <li className={menu === "home" ? "active-link" : ""}><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
        <li className={menu === "about" ? "active-link" : ""}><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About me</p></AnchorLink></li>
        <li className={menu === "services" ? "active-link" : ""}><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink></li>
        <li className={menu === "work" ? "active-link" : ""}><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink></li>
        <li className={menu === "contact" ? "active-link" : ""}><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  )
}
export default Navbar