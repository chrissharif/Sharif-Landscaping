import React from 'react'
import './Navigation.css'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className='navbar'>
      <div className='nav-links'>
        <Link to='/about-us' className='nav-link'>About Us</Link>
        <Link to='/contact-us' className='nav-link'>Contact Us</Link>
      </div>
      <img src='https://i.imgur.com/niX3p6u.png' alt='Sharif Landscaping Logo' className='nav-logo' />
      <div className='nav-title-container'>
        <Link to='/' className='nav-title'>Sharif Landscaping</Link>
      </div>
    </nav>
  )
}
