import React, { useEffect, useState } from 'react'

import './Grocery.css'

import slide1 from './assets/banner1.jpeg'
import slide2 from './assets/banner2.jpeg'
import slide3 from './assets/banner3.jpeg'

import Staple from './assets/poster4.jpeg'
import Spices from './assets/poster3.jpeg'
import Breakfast from './assets/poster2.jpeg'
import Beverages from './assets/poster5.jpeg'
import HouseholdCleaning from './assets/poster6.jpeg'
import Fruits from './assets/poster1.jpeg'

const banners = [slide1, slide2, slide3];

export default function Grocery() {

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
