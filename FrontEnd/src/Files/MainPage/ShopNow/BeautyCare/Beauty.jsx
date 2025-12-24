import React, { useState } from 'react'
import { useEffect } from 'react';

import { assets } from './Beauty.js';
import './Beauty.css'
      
const banners = [assets.slide1, assets.slide2, assets.slide3];

export default function Beauty() {

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
