import React from 'react'
import CafeListPageHeader from '../components/CafeListPageHeader.jsx'
import CafeListSection from '../components/CafeListSection.jsx'

const CafeListPage = () => {
  return (
    <div className='cafe-list-page'>
        <CafeListPageHeader />
        <CafeListSection />
    </div>
  )
}

export default CafeListPage