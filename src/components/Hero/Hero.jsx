import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Mohith Mohan Kumar Kancharla,</span> a passionate full stack developer based in India</h1>
      <p> I am passionate about solving problems, proficient in web development, and eager to expand my knowledge in machine learning.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
