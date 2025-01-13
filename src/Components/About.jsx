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
        Entrepreneurship Cell of Don Bosco Institute of Technology is a student body founded in 2017 to spread awareness about Entrepreneurship, Management, Finance, hence bridging the gap between Engineering and these fields. We aim to build a medium for students and help them foster and hone skills that are essential to every entrepreneur by conducting various Talks, Workshops, Competitions and other such events ranging from Internship Expos to Brand Building and Social Entrepreneurship. <br/>

We at E-Cell firmly believe that “Ideas are Bulletproof” and strive to continuously build a platform that assists aspiring entrepreneurs in the student community be helping them brainstorm their ideas, create a business plan and helping them connect to Mentors, Incubators, and Investors who are associated with E-Cell. <br/>

We currently live in a society which believes the security of the 9-5 job is the way to live life and anyone who does so otherwise, are termed ‘Idiots’. Keeping that in mind, we the E-Cell of DBIT are the destination for those individuals who reject this notion, and have the passion, flair and determination to pursue their idea and live life defining their own rules. We are an organization that strives to support and help society’s so called ‘Idiots’.

        </p>

      </div>
      
    </div>
    </div>
  )
}

export default About
