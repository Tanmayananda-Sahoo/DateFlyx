import React from 'react'

const ComponentCard = (props) => {
  return (
    <div className='component-card'>
      <div className='component-card-image'>
        <img src={props.image} alt='Component' />
      </div>
      <div className='component-card-content'>
        <div className='component-card-location'><h4>{props.location}</h4></div>
        <div className='component-card-title'><p>{props.title}</p></div>
      </div>
    </div>
  )
}

export default ComponentCard