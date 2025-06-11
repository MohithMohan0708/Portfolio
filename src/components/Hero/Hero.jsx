import React from 'react'
import './Hero.css'
import mohith_img from '../../assets/mohith_img2.jpg'
import myResume from '../../assets/KancharlaMohithMohanKumarResume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className="image-container">
        <img src={mohith_img} alt="Mohith" />
      </div>
      <h1><span>I'm Mohith Mohan Kumar Kancharla,</span> a passionate full stack developer based in India</h1>
      <p>I am passionate about solving problems, proficient in web development, and eager to expand my knowledge in machine learning.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink>
        </div>
        <a href={myResume} download className="hero-resume">My Resume</a>
      </div>
    </div>
  )
}

export default Hero