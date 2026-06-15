import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AboutUsImage = () => {
  useGSAP(() => {
    gsap.from('.about-us h2', {
      yPercent: 100,
      duration: 2,
      delay: 0.5,
      ease: "expo.out"
    })
  })
  return (
    <div className='about-us'>
        <div className="about-us-img-txt">
          <h2>[What you choose makes your story]</h2>
        </div>
    </div>
  )
}

export default AboutUsImage