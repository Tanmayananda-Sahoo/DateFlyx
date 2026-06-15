import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import FooterSection from '../components/FooterSection'
import ContactForm from '../components/ContactForm.jsx'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
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