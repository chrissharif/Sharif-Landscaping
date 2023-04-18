import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_8m4m11o', 'template_pyszqua', form.current, 'h32hmB8tPU-nBHM5k')
      .then((result) => {
        alert('Successfully sent! We will get back to you as soon as possible.')
      }, (error) => {
    });
  };
  
  
  return (
    <div className='contact-container'>
      <div className='contact-info'>
        For any questions, concerns, or if you're looking
        to use our services, fill out the form below to
        contact us!
      </div>
      <div className='contact-form-container'>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <label for="name">Full Name:</label>
          <input type="text" name='user_name' className='contact-input'/>
          <label for="phone">Phone:</label>
          <input type="text" name='user_phone' className='contact-input'/>
          <label for="email">Email:</label>
          <input type="text" name='user_email' className='contact-input'/>
          <label for="message">Message:</label>
          <textarea name='message' cols="30" rows="7" className='contact-input'></textarea>
          <button type="submit" value='Send' className='submit-button'>Send Message</button>
        </form>
      </div>         
    </div>
  )
}
