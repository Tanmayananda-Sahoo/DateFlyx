import React, {useEffect} from 'react'
import HeroSection from '../components/HeroSection.jsx'
import SubHeroSection from '../components/SubHeroSection.jsx'
import ExploreByLocation from '../components/ExploreByLocation.jsx'
import ReviewSection from '../components/ReviewsSections.jsx'
import FooterSection from '../components/FooterSection.jsx'
import Navbar from '../components/Navbar.jsx'
import GetStarted from '../components/GetStarted.jsx'
import GallerySection from '../components/GallerySection.jsx'
// import HeroSectionDesc from '../components/HeroSectionDesc.jsx'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='home-page-wrapper'>
      <HeroSection />
      <div className='page'>
        <SubHeroSection />
        <ExploreByLocation />
      </div>
      <GallerySection />
      <ReviewSection />
      <div className="page">
        <GetStarted />
      </div>
      <FooterSection />
    </div>
  )
}

export default HomePage