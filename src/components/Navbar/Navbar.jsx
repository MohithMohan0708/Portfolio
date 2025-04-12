import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import logo_gif from '../../assets/Mohith.gif'
const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      <img src={logo_gif} alt="" />
      <ul className='nav-menu'>
        <li><p>Home</p></li>
        <li><p>About me</p></li>
        <li><p>Services</p></li>
        <li><p>Portfolio</p></li>
        <li>pContact</li>
      </ul>
      <div className="nav-connect">
        Connect With Me
      </div>
    </div>
  )
}

export default Navbar
