import React, { useEffect, useState } from 'react'
import logo from '../assets/Logo.png'
import menu_icon from '../assets/menu-icon.png'
import './Navbar.css'
import { Link } from 'react-scroll';


const Navbar = () => {

  const [sticky,setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 650 ? setSticky(true) : setSticky(false);
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false)  : setMobileMenu(true)
  }

  return (
    <div>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt='' className='logo'/>
        {/* <span className='logo-text'>E-CELL DBIT</span> */}
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-210} duration={500}>About Us</Link></li>
        <li><Link to='events' smooth={true} offset={-210} duration={500}>Events</Link></li>
        <li><Link to='chameli' smooth={true} offset={-69} duration={500}>Core Team</Link></li>
        <li><Link to='gallery' smooth={true} offset={-250} duration={500}>Gallery</Link></li>
        <li><Link to='contact' smooth={true} offset={-169} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
      </nav>
      
    </div>
  )
}

export default Navbar
