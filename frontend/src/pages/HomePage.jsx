import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import SubHeroSection from '../components/SubHeroSection.jsx'
import ExploreByLocation from '../components/ExploreByLocation.jsx'
import ReviewSection from '../components/ReviewsSections.jsx'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SubHeroSection />
      <ExploreByLocation />
      <ReviewSection />
    </div>
  )
}

export default HomePage