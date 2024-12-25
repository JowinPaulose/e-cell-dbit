import React, { useEffect, useState } from 'react'
import logo from '../assets/Logo.png'
import './Navbar.css'

const Navbar = () => {

  const [sticky,setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 650 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <div>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt='' className='logo'/>
        {/* <span className='logo-text'>E-CELL DBIT</span> */}
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Events</li>
        <li>Core Team</li>
        <li>Gallery</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
      </nav>
      
    </div>
  )
}

export default Navbar
