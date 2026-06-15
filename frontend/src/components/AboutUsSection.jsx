import React, {useRef, useLayoutEffect} from 'react'
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import {useGSAP} from '@gsap/react';
import {useNavigate} from 'react-router';

const AboutUsSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const handleAboutClick = () => {
    navigate('/all-cafes');
  }
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const headings = sectionRef.current.querySelectorAll(".about-right h2");
    const allChars = [];
    const splitInstances = [];

    headings.forEach((heading) => {
      const split = new SplitType(heading, {
        types: "chars",
      });

      splitInstances.push(split);
      allChars.push(...split.chars);
    });

    gsap.fromTo(
      allChars,
      { color: "#C3C2C1" },
      {
        color: "#111111",
        stagger: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 84%",
          end: "top 0%",
          scrub: true
        },
      }
    );

    gsap.from('.text-revealing-about-left', {
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: '.text-revealing-about-left',
        start: "top 60%"
      }
    })
  }, []);

  // useGSAP(() => {
  // }, {scope: sectionRef})

  return (
    <div className='about-us-section' ref={sectionRef}>
      <div className="about-left">
        <div className="about-left-text">
          <p className='text-revealing-about-left'>Experience extraordinary</p>
        </div>
      </div>
      <div className="about-right">
        <h2>
          Dateflyx is your trusted companion for discovering the perfect café for every date.Dateflyx brings together carefully selected cafés known for their ambiance, comfort, and memorable experiences. Explore cozy corners, aesthetic interiors, delicious menus, and welcoming spaces.
        </h2>
        <p>
          Whether you're planning a first meeting, a casual coffee outing, or a special celebration with someone you love, finding the right place can make all the difference.Instead of spending hours searching through countless options, you can quickly find venues that match your style and mood. From quiet and intimate cafés to vibrant and trendy hotspots, Dateflyx helps you discover places where meaningful connections can flourish. Start exploring today and turn every date into a beautiful memory worth remembering.
        </p>
        <button onClick={handleAboutClick}>Explore Cafes</button>
      </div>
    </div>
  )
}

export default AboutUsSection