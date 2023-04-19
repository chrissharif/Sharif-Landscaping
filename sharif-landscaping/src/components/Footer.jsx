import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-logo-title'>
        <img src='https://i.imgur.com/niX3p6u.png' alt='Sharif Landscaping Logo' className='footer-logo' />
        <div className='footer-title'>Sharif Landscaping</div>
      </div>
      <div className='footer-credit'>
        <div>Website created by Christopher Sharif</div>
        <a href='https://www.linkedin.com/in/christopher-sharif-754598211/' target='_blank' rel='noreferrer'>
          <img src='https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png' alt='Christopher Sharif LinkedIn' className='footer-linkedin' />
        </a>
      </div>
    </div>
  )
}
