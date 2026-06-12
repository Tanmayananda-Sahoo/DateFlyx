import React from 'react'
import { HiOutlineArrowLeft } from "react-icons/hi";
import {useNavigate} from 'react-router'

const CafeDetailNavSection = () => {
  const navigate = useNavigate();
  const handleArrowClick = () => {
      navigate('/all-cafes')
  }
  return (
    <div className='cafe-detail-nav'>
        <div className="cafe-arrow-wrapper" onClick={handleArrowClick}>
            <HiOutlineArrowLeft className='arrow' />
        </div>
    </div>
  )
}

export default CafeDetailNavSection