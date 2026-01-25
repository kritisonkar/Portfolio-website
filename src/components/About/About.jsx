import React from 'react'
import'./About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div className='about'>
     <div id='about' className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
     </div>
       <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a passionate Full Stack Developer with experience in building responsive web applications using modern technologies. 
                  I enjoy solving problems, learning new tools, and creating user-friendly digital solutions. I am always eager to grow my skills and work on real-world projects that make an impact.</p>
                <p>I enjoy learning new technologies, improving my skills, and working on real-world projects.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React Js</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Next Js</p><hr style={{width:"50%"}} /></div>
                </div>
        </div>
       </div>
       
        

       
    </div>
  )
}

export default About