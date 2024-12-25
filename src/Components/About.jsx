import React from 'react'
import './About.css'
import about from '../assets/aboutus.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about} alt='about us img' className='about-img'/>

      </div>
      <div className="about-right">
        <h3>About E-CELL</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet. Non iure galisum rem nihil iusto et aperiam cumque qui voluptatem dolores qui cupiditate laboriosam. In nihil optio cum explicabo accusamus sed earum doloremque quo saepe amet ut omnis magnam. Aut pariatur voluptas aut perferendis nemo ut modi dicta sit culpa provident!<br/>

        Cum ipsam exercitationem sed cumque eligendi et molestiae consequuntur est harum suscipit eum fugiat laborum! A autem delectus in maxime corrupti At adipisci earum cum praesentium odit 33 autem nihil qui temporibus voluptas ut voluptatibus accusantium. Ex odit voluptatem hic iste voluptatem ut atque corporis qui inventore laudantium.<br/>

        Qui aliquam officia ut deleniti rerum aut temporibus architecto eum sunt voluptatem rem deserunt expedita? Ad culpa iure aut dolores voluptas qui asperiores internos a consectetur fuga qui dolores eaque.

        </p>

      </div>
      
    </div>
  )
}

export default About
