import React from 'react'
import './About.css'
import about from '../assets/aboutus.png'

const About = () => {
  return (
    <div className='bgg'>
    <div className='about'>
      <div className="about-left">
        <img src={about} alt='about us img' className='about-img'/>

      </div>
      <div className="about-right">
        <h3>About E-CELL</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
        Entrepreneurship Cell of Don Bosco Institute of Technology, founded in 2017, bridges the gap between Engineering, Entrepreneurship, Management, and Finance. Through Talks, Workshops, Competitions, and events like Internship Expos and Brand Building, we help students develop essential entrepreneurial skills. <br/>

Believing that “Ideas are Bulletproof,” we provide a platform for aspiring entrepreneurs to brainstorm, craft business plans, and connect with Mentors, Incubators, and Investors. In a world fixated on the 9-5 norm, we stand as a hub for those who dare to defy it—supporting individuals with the passion, flair, and determination to shape their own path.
        </p>

      </div>
      
    </div>
    </div>
  )
}

export default About
