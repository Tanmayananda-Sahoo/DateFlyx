import React, {useState} from 'react'

const ExploreByLocation = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const locations = [
        {
            title: 'Location01',
            images: ['https://images.unsplash.com/photo-1567880905822-56f8e06fe630?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
        },
        {
            title: 'Location02',
            images: ['https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
        },
        {
            title: 'Location03',
            images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
        },
        {
            title: 'Location04',
            images: ['https://images.unsplash.com/photo-1542372147193-a7aca54189cd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
        },
        {
            title: 'Location05',
            images: ['https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
        },
    ]
    return (
        <div className="explore-by-location">

            <div className="left">
                {locations[activeIndex]?.images[0] && <img key={activeIndex} src={locations[activeIndex]?.images[0]} alt={locations[activeIndex]?.title} className={`location-image image-${activeIndex}`} />}
            </div>
            <div className="center">
                <ul>
                    {locations.map((location, index) => (
                        <li
                            key={index}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            {location.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right">
               {locations[activeIndex]?.images[1] && <img key={activeIndex} src={locations[activeIndex]?.images[1]} alt={locations[activeIndex]?.title} className={`location-image image-${activeIndex}`} />}
            </div>
        </div>
    )
}

export default ExploreByLocation