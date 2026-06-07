import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router';

const Navbar = () => {
    const navMenu = ['Home', 'All Cafes', 'About Us', 'Contact'];
    useGSAP(() => {
        gsap.from('.revealing-text-nav',{
            y: 100,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.1
        })
    })
    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <h3 className='revealing-text-nav'>DateFlyx</h3>
            </div>
            <div className="nav-menu-section">
                {
                    navMenu.map((elem, key) => {
                        return(
                            <div key={key} className='nav-menu'>
                                <div className='revealing-text-nav'><Link className='links' to={`/${elem == 'Home' ? '' : elem.toLowerCase().replace(" ", "-")}`}>{elem}</Link></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar