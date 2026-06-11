import React, { useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger.js';

const ContactInAbout = () => {
  const sectionRef = useRef(null);
  useGSAP(() => {
    gsap.from('.text-revealing-contact-section-about', {
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.text-revealing-contact-section-about',
        start: "top 80%"
      }
    })
  }, { scope: sectionRef })
  return (
    <div className='contact-section-about' ref={sectionRef}>
      <div className="contact-section-about-left">
        <div className="contact-about-left-text-wrapper">
          <p className='text-revealing-contact-section-about'>Contact Us</p>
        </div>
      </div>
      <div className="contact-section-about-right">
        <div className='contact-section-about-right-text-wrapper'><h1 className='text-revealing-contact-section-about'>Have a question, collaboration idea, or have a </h1></div>
        <div className='contact-section-about-right-text-wrapper'><h1 className='text-revealing-contact-section-about'>unique cafe you would love to see? Get in</h1></div>
        <div className='contact-section-about-right-text-wrapper'><h1 className='text-revealing-contact-section-about'>touch or submit <Link to='/all-cafes' className='about-us-link'>here</Link></h1></div>
      </div>
    </div>
  )
}

export default ContactInAbout