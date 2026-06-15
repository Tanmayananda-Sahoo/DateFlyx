import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import FooterSection from '../components/FooterSection'
import AboutUsImage from '../components/AboutUsImage.jsx'
import AboutUsSection from '../components/AboutUsSection.jsx'
import ContactInAbout from '../components/ContactInAbout.jsx'
import AboutUsSecondaryImage from '../components/AboutUsSecondaryImage.jsx'
const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <div className='about-us-page'>
        <Navbar />
        <div className="page">
            <AboutUsImage />
            <AboutUsSection />
            <AboutUsSecondaryImage />
            <ContactInAbout />
        </div>
        <FooterSection />
    </div>
  )
}

export default AboutUsPage