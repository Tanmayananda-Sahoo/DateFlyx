import React, { useRef, useState } from 'react';
import ImageCard from './ImageCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const GallerySection = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      subtitle: "Beachfront/Coastal"
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      subtitle: "Beachfront/Coastal"
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      subtitle: "Beachfront/Coastal"
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      subtitle: "Beachfront/Coastal"
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      subtitle: "Beachfront/Coastal"
    }
  ];

  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Assuming roughly 2 cards visible on desktop
  const maxIndex = Math.max(0, images.length - 2);

  const moveSlider = (direction) => {
    const cards = trackRef.current.children;

    if (!cards.length) return;

    const gap =
      parseFloat(getComputedStyle(trackRef.current).gap) || 0;

    const cardWidth = cards[0].offsetWidth + gap;

    if (direction === "next" && currentIndex >= maxIndex) return;
    if (direction === "prev" && currentIndex <= 0) return;

    let newIndex = currentIndex;

    if (direction === "next") {
      newIndex = Math.min(currentIndex + 1, maxIndex);
    } else {
      newIndex = Math.max(currentIndex - 1, 0);
    }

    setCurrentIndex(newIndex);

    gsap.to(trackRef.current, {
      x: -(newIndex * cardWidth),
      duration: 0.8,
      ease: "expo.out"
    });
  };

  useGSAP(() => {
    gsap.from('.revealing-text-gallery', {
      y: '100%',
      duration: 1,
      ease: 'expo.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.revealing-text-gallery',
        start: "top 90%"
      }
    });
  }, { scope: sectionRef });

  return (
    <div className="gallery-section" ref={sectionRef}>
      <div className="gallery-left">
        <div className='text-wrapper-gallery'>
          <h2 className='revealing-text-gallery'>
            Gallery
          </h2>
        </div>

        <div className="text-wrapper-gallery">
          <h2 className='revealing-text-gallery'>
            Section
          </h2>
        </div>

        <div className="slider-controls">
          <button
            className={`prev-btn ${currentIndex === 0 ? "disabled" : ""}`}
            onClick={() => moveSlider("prev")}
            disabled={currentIndex === 0}
          >
            ←
          </button>

          <button
            className={`next-btn ${currentIndex >= maxIndex ? "disabled" : ""}`}
            onClick={() => moveSlider("next")}
            disabled={currentIndex >= maxIndex}
          >
            →
          </button>
        </div>
      </div>

      <div className="gallery-right">
        <div className="slider-wrapper" ref={wrapperRef}>
          <div className="slider-track" ref={trackRef}>
            {images.map((image, idx) => (
              <ImageCard
                key={idx}
                src={image.src}
                subtitle={image.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;