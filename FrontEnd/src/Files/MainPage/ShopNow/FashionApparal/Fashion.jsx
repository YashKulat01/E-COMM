import React, { useEffect, useState } from 'react'

import './Fashion.css'

import slide1 from './assets/banner1.png'
import slide2 from './assets/banner2.jpeg'
import slide3 from './assets/banner3.jpg'

import gridImg1 from './assets/men-fashion.jpeg'
import gridImg2 from './assets/new-collection.jpeg'
import gridImg3 from './assets/woman-fashion.jpeg'

const banners = [slide1, slide2, slide3];

export default function Fashion() {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    // const prevSlide = () => {
    //     setCurrent(current === 0 ? banners.length - 1 : current - 1);
    // };


    // const nextSlide = () => {
    //     setCurrent(current === banners.length - 1 ? 0 : current + 1);
    // };

    return (
        <>
            <div className="slider-container">
                <div className="slider">
                    <img src={banners[current]}
                        alt="slide"
                        className="slider-image" />

                    {/* <button 
                    className="nav prev" 
                    onClick={prevSlide}>
                        ❮
                    </button>
                    <button 
                    className="nav next" 
                    onClick={nextSlide}>
                        ❯
                    </button> */}
                </div>


                {/* <div className="dots">
                    {banners.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === current ? "active" : ""}`}
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div> */}
            </div>
        </>
    )
}
