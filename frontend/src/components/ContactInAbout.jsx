import React from 'react'
import { Link } from 'react-router'

const ContactInAbout = () => {
  return (
    <div className='contact-section-about'>
        <div className="contact-section-about-left">
            <p>Contact Us</p>
        </div>
        <div className="contact-section-about-right">
            <h1>Have a question, collaboration idea, or have a unique cafe you would love to see? Get in touch or submit <Link to='/all-cafes' className='about-us-link'>here</Link>.</h1> 
        </div>
    </div>
  )
}

export default ContactInAbout