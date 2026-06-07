import React from 'react'
import ReviewCard from './ReviewCard.jsx'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const ReviewsSections = () => {
    useGSAP(() => {

        const reviewSection = document.querySelector(".review-section");

        const totalWidth = reviewSection.scrollWidth / 2;

        gsap.to(reviewSection, {
            x: -totalWidth,
            duration: 25,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x =>
                    parseFloat(x) % totalWidth
                )
            }
        });

    });
    return (
        <div className="review-section-wrapper">
            <div className="review-section-header">
                <h1>What our users say?</h1>
            </div>
            <div className='review-section'>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />

                {/* Duplicate */}

                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
    )
}

export default ReviewsSections