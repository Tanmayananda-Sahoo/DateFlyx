import React from 'react'
import CafeListPageHeader from '../components/CafeListPageHeader.jsx'
import CafeListSection from '../components/CafeListSection.jsx'
import Navbar from '../components/Navbar.jsx'
import FooterSection from '../components/FooterSection.jsx'

const CafeListPage = () => {
  return (
    <div className='cafe-list-page'>
      <Navbar />
      <div className="page">
        <CafeListPageHeader />
        <CafeListSection />
      </div>
      <FooterSection />
    </div>
  )
}

export default CafeListPage