import React from 'react'
import Navbar from '../components/Navbar'
import FooterSection from '../components/FooterSection'
import ContactForm from '../components/ContactForm.jsx'

const ContactPage = () => {
  return (
    <div className='contact-page'>
        <Navbar />
        <div className="page">
          <ContactForm />
        </div>
        <FooterSection />
    </div>
  )
}

export default ContactPage