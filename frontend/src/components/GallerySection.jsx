import React, {useRef} from 'react'
import ImageCard from './ImageCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger.js';

const GallerySection = () => {
  const sectionRef = useRef(null);
  useGSAP(() => {
    gsap.from('.revealing-text-gallery', {
      y: '100%',
      duration: 1,
      ease: 'expo.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.revealing-text-gallery',
        start: "top 90%"
      }
    })
  }, {scope: sectionRef})
  return (
    <div className="gallery-section" ref={sectionRef}>
      <div className="gallery-left">
        <div className='text-wrapper-gallery'>
          <h2 className='revealing-text-gallery'>
            Gallery
          </h2>
        </div>
        <div className="text-wrapper-gallery">
          <h2 className='revealing-text-gallery'>
            Section
          </h2>
        </div>
        <div className="slider-controls">
          <button className="prev-btn">←</button>
          <button className="next-btn">→</button>
        </div>
      </div>
      <div className="gallery-right">
        <div className="slider-wrapper">
          <div className="slider-track">
            <ImageCard src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e' subtitle='Beachfront/Coastal'/>
            <ImageCard src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750' subtitle='Beachfront/Coastal'/>
            <ImageCard src='https://images.unsplash.com/photo-1484154218962-a197022b5858' subtitle='Beachfront/Coastal'/>
            <ImageCard src='https://images.unsplash.com/photo-1494526585095-c41746248156' subtitle='Beachfront/Coastal'/>
            <ImageCard src='https://images.unsplash.com/photo-1449824913935-59a10b8d2000' subtitle='Beachfront/Coastal'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GallerySection