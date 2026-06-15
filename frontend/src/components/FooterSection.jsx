import React, {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useNavigate} from 'react-router';

gsap.registerPlugin(ScrollTrigger);
const FooterSection = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const secondPartFirstList = ['All Cafes', 'Contact', 'About'];
    const secondPartSecondList = ['Help Center', 'Safety', 'Contact'];
    const secondPartThirdList = ['Privacy', 'Terms'];
    
    const handleFooterClick = (elem) => {
        navigate(`/${elem.toLowerCase().replace(" ","-")}`);
    }

    useGSAP(() => {
        gsap.from('.revealing-text-footer', {
            y: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                once: true
            }
        })
    }, {scope: sectionRef})
  return (
    <div className='footer-section' ref={sectionRef}>
        <div className="footer-first-part">
            <div className='footer-menu-wrapper'>
                <h1 className='revealing-text-footer'>DateFlyx</h1>
            </div>
            <div className="footer-menu-wrapper footer-subtext">
                <p className='revealing-text-footer'>Create meaningful connections through curated cafe experiences.</p>
            </div>
        </div>
        <div className="footer-second-part">
            <div className='footer-second-part-first-list'>
                <h4 className='footer-headers'>Explore</h4>
                <ul className='footer-lists'>
                    {
                        secondPartFirstList.map((elem, key) => {
                            return(
                                <div key={key} className="footer-menu-wrapper">
                                    <li className='revealing-text-footer' onClick={() => handleFooterClick(elem)}>{elem}</li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="footer-second-part-second-list">
                <h4 className='footer-headers'>Support</h4>
                <ul className='footer-lists'>
                    {
                        secondPartSecondList.map((elem, key) => {
                            return(
                                <div key={key} className="footer-menu-wrapper">
                                    <li className='revealing-text-footer'>{elem}</li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="footer-second-part-third-list">
                <h4 className='footer-headers'>Legal</h4>
                <ul className='footer-lists'>
                    {
                        secondPartThirdList.map((elem, key) => {
                            return(
                                <div key={key} className="footer-menu-wrapper">
                                    <li className='revealing-text-footer'>{elem}</li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FooterSection