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


            <>
                {/* banner Container ----------------------------------- */}
                <div className="bannerGridContainer">
                    <div className="gridSec">
                        <div className="banner">
                            <a href="">
                                <img className='box1'
                                    src={gridImg2}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="banner">
                            <a href="">
                                <img className='box2'
                                    src={gridImg1}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="banner">
                            <a href="">
                                <img className='box3'
                                    src={gridImg3}
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
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
                                                src="/Codes/Front-end/Main-page/assets/T-shirt1.png"
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
                                                src="/Codes/Front-end/Main-page/assets/Dress.png"
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
                                                src="/Codes/Front-end/Main-page/assets/T-shirt2.png"
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

        </>
    )
}
