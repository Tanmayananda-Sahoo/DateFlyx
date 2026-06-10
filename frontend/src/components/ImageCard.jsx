import React from 'react'

const ImageCard = (props) => {
    return (
        <div className="image-card">
            <img
                src={props.src}
                alt=""
            />
            <div className="text-wrapper-gallery">
                <h4 className='revealing-text-gallery'>{props.subtitle}</h4>
            </div>
        </div>
    )
}

export default ImageCard