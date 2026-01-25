import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div  id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Kriti Kumari,</span>Full Stack Developer</h1>
        <p> Full Stack Developer | Building responsive, scalable, and user-friendly web applications with modern technologies.
            </p>
            <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
            </div>


    </div>
  )
}

export default Hero