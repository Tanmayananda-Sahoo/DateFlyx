import React, {useEffect} from 'react'
import CafeDetailNavSection from '../components/CafeDetailNavSection.jsx'
import CafeDescSection from '../components/CafeDescSection.jsx'
import CafeDetailImage from '../components/CafeDetailImage.jsx'
import CafeDetailHeaderSection from '../components/CafeDetailHeaderSection.jsx'
import CafeDetailLocation from '../components/CafeDetailLocation.jsx'
import FooterSection from '../components/FooterSection.jsx'

const CafeDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='cafe-list-page'>
      <CafeDetailNavSection />
      <div className="page">
        <CafeDetailHeaderSection />
        <CafeDescSection />
        <CafeDetailImage />
        <CafeDetailLocation />
      </div>
      <FooterSection />
    </div>
  )
}

export default CafeDetailsPage