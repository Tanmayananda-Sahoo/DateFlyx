import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import SubHeroSection from '../components/SubHeroSection.jsx'
import ExploreByLocation from '../components/ExploreByLocation.jsx'
import ReviewSection from '../components/ReviewsSections.jsx'
import FooterSection from '../components/FooterSection.jsx'
import Navbar from '../components/Navbar.jsx'
import GetStarted from '../components/GetStarted.jsx'
import GallerySection from '../components/GallerySection.jsx'

const HomePage = () => {
  return (
    <div className='home-page-wrapper'>
      <Navbar/>
      <div className='page'>
        <HeroSection />
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