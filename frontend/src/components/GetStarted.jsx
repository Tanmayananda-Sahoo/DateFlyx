import React, { useRef } from 'react'
import { redirect, useNavigate } from 'react-router'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger);
const GetStarted = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    useGSAP(() => {
        gsap.from('.revealing-text-get-started', {
            y: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.revealing-text-get-started',
                start: "top 85%",
                // toggleActions: "play none none reverse",
            }
        });
    })
    const joinHandler = () => {
        navigate('/contact');
    }
    return (
        <div className='get-started-section' ref={sectionRef}>
            <div className="get-started-header">
                <h1 className='revealing-text-get-started'>Get Started Now</h1>
            </div>
            <div className="get-started-para">
                <p className='revealing-text-get-started'>
                    Browse the best cafés for every kind of date—from first meetings to special celebrations. Find the ideal spot in just a few clicks.
                </p>
            </div>
            <button onClick={joinHandler}>
                <div className='button-get-started'><p className='revealing-text-get-started'>Join Now it's free</p></div>
            </button>
        </div>
    )
}

export default GetStarted