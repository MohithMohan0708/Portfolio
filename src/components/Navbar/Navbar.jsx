import React, { useRef, useState, useEffect } from 'react'
import './Navbar.css'
import logo_gif from '../../assets/Mohith.gif'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (window.innerWidth <= 768 && menuRef.current) {
      menuRef.current.style.opacity = isOpen ? "0" : "1";
      menuRef.current.style.pointerEvents = isOpen ? "none" : "auto";
    }
  }
  const closeMenu = () => {
    if (window.innerWidth <= 768 && menuRef.current) {
      setIsOpen(false);
      menuRef.current.style.opacity = "0";
      menuRef.current.style.pointerEvents = "none";
    }
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuRef.current) {
        menuRef.current.style.opacity = "1";
        menuRef.current.style.pointerEvents = "auto";
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="navbar">
      <img src={logo_gif} alt="Mohith Logo" />
      <svg className="nav-mob-toggle" onClick={toggleMenu} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Toggle menu">
        <path d={isOpen ? "M6 18L18 6M6 6L18 18" : "M3 6H21M3 12H21M3 18H21"} stroke="url(#grad)" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#0062ff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#61efff', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      <ul ref={menuRef} className="nav-menu">
        <li className={menu === "home" ? "active-link" : ""} style={{ '--i': 0 }}><AnchorLink className="anchor-link" href="#home"><p onClick={() => { setMenu("home"); closeMenu() }}>Home</p></AnchorLink></li>
        <li className={menu === "about" ? "active-link" : ""} style={{ '--i': 1 }}><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => { setMenu("about"); closeMenu() }}>About me</p></AnchorLink></li>
        <li className={menu === "services" ? "active-link" : ""} style={{ '--i': 2 }}><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => { setMenu("services"); closeMenu() }}>Services</p></AnchorLink></li>
        <li className={menu === "work" ? "active-link" : ""} style={{ '--i': 3 }}><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => { setMenu("work"); closeMenu() }}>Portfolio</p></AnchorLink></li>
        <li className={menu === "contact" ? "active-link" : ""} style={{ '--i': 4 }}><AnchorLink className="anchor-link" href="#contact"><p onClick={() => { setMenu("contact"); closeMenu() }}>Contact</p></AnchorLink></li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact">Connect With Me</AnchorLink>
      </div>
    </div>
  )
}
export default Navbar