import React, { useEffect, useState } from 'react'

import './Electronics.css'

import slide1 from './assets/banner1.jpeg'
import slide2 from './assets/banner2.jpeg'

import gridImg1 from './assets/'
import gridImg2 from './assets/'
import gridImg3 from './assets/'

import Tshirt1 from './assets/T-shirt1.png'
import Tshirt2 from './assets/T-shirt2.png'
import Dress from './assets/Dress.png'

const banners = [slide1, slide2];

export default function Electronics() {

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

            {/* This week collection Container ----------------------------------- */}
            <div className="thisWeekCollSection">
                <div className="collectionContainer">
                    <h1>This Week Collection</h1>
                    <div className="cardSec">
                        <div className="cardSecContainer">
                            <div className="cardSec-elem">
                                <h4>Men T-shirt</h4>
                                <div className="T-shirtImg">
                                    <a href="">
                                        <img
                                            src={Tshirt1}
                                            alt="productImg"
                                        />
                                    </a>
                                </div>
                                <p>Price $35 </p>
                                <div className="addCartBtnSec">
                                    <button className="addCarBtn" title="Add to cart" onclick="">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                            <div className="cardSec-elem">
                                <h4>Women Dress</h4>
                                <div className="T-shirtImg">
                                    <a href="">
                                        <img
                                            src={Dress}
                                            alt="productImg"
                                        />
                                    </a>
                                </div>
                                <p>Price $60 </p>
                                <div className="addCartBtnSec">
                                    <button className="addCarBtn" title="Add to cart" onclick="">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                            <div className="cardSec-elem">
                                <h4>Men T-shirt</h4>
                                <div className="T-shirtImg">
                                    <a href="">
                                        <img
                                            src={Tshirt2}
                                            alt="productImg"
                                        />
                                    </a>
                                </div>
                                <p>Price $40 </p>
                                <div className="addCartBtnSec">
                                    <button className="addCarBtn" title="Add to cart" onclick="">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
