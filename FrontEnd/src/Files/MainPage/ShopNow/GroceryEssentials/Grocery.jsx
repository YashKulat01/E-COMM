import React, { useEffect, useState } from 'react'

import './Grocery.css'

import slide1 from './assets/banner1.jpeg'
import slide2 from './assets/banner2.jpeg'
import slide3 from './assets/banner3.jpeg'

import Staple from './assets/poster4.jpeg'
import Spices from './assets/poster3.PNG'
import Breakfast from './assets/poster2.jpeg'
import Beverages from './assets/poster5.jpeg'
import HouseholdCleaning from './assets/poster6.jpeg'
import Fruits from './assets/poster1.PNG'

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

            <div className="gridContainer">
                <h1>Top Categories</h1>
                <div class="parent">
                    <div>
                        <a href="">
                            <img
                                src={Spices}
                                alt=""
                            />
                        </a>
                        <h1>Spices</h1>
                    </div>

                    <div>
                        <a href="">
                            <img
                                src={Fruits}
                                alt=""
                            />
                        </a>
                        <h1>Fruits</h1>
                    </div>

                    <div>
                        <a href="">
                            <img
                                src={Beverages}
                                alt=""
                            />
                        </a>
                        <h1>Beverages</h1>
                    </div>

                    <div>
                        <a href="">
                            <img
                                src={Breakfast}
                                alt=""
                            />
                        </a>
                        <h1>Breakfast</h1>
                    </div>

                    <div>
                        <a href="">
                            <img
                                src={Staple}
                                alt=""
                            />
                        </a>
                        <h1>Staples</h1>
                    </div>
                    <div>
                        <a href="">
                            <img
                                src={HouseholdCleaning}
                                alt=""
                            />
                        </a>
                        <h1>Household & Cleaning</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
