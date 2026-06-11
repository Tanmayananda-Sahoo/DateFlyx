import React from 'react'
import {FaStar} from 'react-icons/fa'
const ReviewCard = () => {
  return (
    <div className='review-card-component'>
        <div className="review-header">
            <div className="review-user-name">
                Name
            </div>
            <div className='review-ratings'>
                <FaStar color='#F8B51E'/><p>5</p>
            </div>
        </div>
        <div className='review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequuntur deleniti dolores a ex animi nemo quos corrupti autem totam, assumenda eaque expedita vel eum quibusdam porro earum odio. Dicta.
        </div>
        <div className="review-bottom">
            DateFlyx
        </div>
    </div>
  )
}

export default ReviewCard