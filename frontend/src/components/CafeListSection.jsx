import React, { useLayoutEffect, useRef } from 'react'
import ComponentCard from './ComponentCard.jsx'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger.js'
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
const CafeListSection = () => {
  const data = [
    {
      location: "Location 1",
      title: "Title 1",
      image: "https://images.unsplash.com/photo-1556742517-fde6c2abbe11?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      location: "Location 2",
      title: "Title 2",
      image: "https://plus.unsplash.com/premium_photo-1663932464589-8c771de4844f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      location: "Location 3",
      title: "Title 3",
      image: "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?q=80&w=363&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      location: "Location 3",
      title: "Title 3",
      image: "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?q=80&w=363&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      location: "Location 3",
      title: "Title 3",
      image: "https://images.unsplash.com/photo-1556742517-fde6c2abbe11?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      location: "Location 3",
      title: "Title 3",
      image: "https://plus.unsplash.com/premium_photo-1663932464589-8c771de4844f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      location: "Location 3",
      title: "Title 3",
      image: "https://plus.unsplash.com/premium_photo-1663932464589-8c771de4844f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      location: "Location 3",
      title: "Title 3",
      image: "https://plus.unsplash.com/premium_photo-1663932464589-8c771de4844f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]
  const sectionRef = useRef(null);

useGSAP(() => {
  const cards = gsap.utils.toArray(".component-card");

  gsap.from(cards.slice(0, 3), {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: "expo.out"
  });

  cards.slice(3).forEach((card) => {
    gsap.from(card, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });
}, { scope: sectionRef });

  return (
    <div className='cafe-list-section' ref={sectionRef}>
      {data.map((item, index) => (
        <ComponentCard
          key={index}
          location={item.location}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  )
}

export default CafeListSection