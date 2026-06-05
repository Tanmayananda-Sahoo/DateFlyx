import React, {useRef, useLayoutEffect} from 'react'
import gsap from 'gsap';

const CafeListPageHeader = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      '.cafe-list-headers',
      { y: '100%' },
      {
        y: 0,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.6
      },
    );
  }, []);
    return (
        <div className='cafe-list-page-header'>
            <div className='cafe-h1-container'>
                <h1 className='cafe-list-headers'>Location you pick, decides your fate</h1>
            </div>
            <div className='cafe-h3-container'>
                <h3 className='cafe-list-headers'>Explore cafes nearby your location.</h3>
            </div>
        </div>
    )
}

export default CafeListPageHeader