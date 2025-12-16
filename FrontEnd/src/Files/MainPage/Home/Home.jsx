import React, { useEffect, useState } from 'react'

import '../Home/Home.css'

import fashion1 from './assets/T-shirt1.png'
import fashion2 from './assets/T-shirt2.png'
import fashion3 from './assets/Dress.png'

import electronics1 from './assets/Laptop.png'
import electronics2 from './assets/phone.png'
import electronics3 from './assets/computer.png'

import living1 from './assets/Furniture.png'
import living2 from './assets/bedding-mattress.png'
import living3 from './assets/home-decor.png'

import slide1 from './assets/banner5.jpg'
import slide2 from './assets/mother-day-sale.png'
import slide3 from './assets/summer.png'

const banners = [slide1, slide2, slide3];

export default function Home() {

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

            <div className="gridSec">
                <div className="gridSecContainer">
                    {/* <!-- Body>gridSec>Man and Women Fashion sec --------------> */}
                    <h1>
                        Man and Women Fashion
                    </h1>
                    <div className="cardSec">
                        <div className="cardSecContainer">
                            <div className="cardSec-elem">
                                <h4>Men T-shirt</h4>
                                <div className="T-shirtImg">
                                    <a href="">
                                        <img src={fashion1}
                                            alt="productImg" />
                                    </a>
                                </div>
                                <p>Price $35 </p>
                                <div className="addCartBtnSec">
                                    <button className="addCarBtn"
                                        title="Add to cart"
                                        onclick="">
                                        Add to cart
                                    </button>
                                </div>
                            </div>

                            <div className="cardSec-elem">
                                <h4>Women Dress</h4>
                                <div className="T-shirtImg">
                                    <a href="">
                                        <img src={fashion2}
                                            alt="productImg" />
                                    </a>
                                </div>
                                <p>Price $60 </p>
                                <div className="addCartBtnSec">
                                    <button className="addCarBtn"
                                        title="Add to cart"
                                        onclick="">
                                        Add to cart
                                    </button>
                                </div>
                            </div>

                            <div className="cardSec-elem">
                                <h4>Men T-shirt</h4>
                                <div className="T-shirtImg">
                                    <a href="">
                                        <img src={fashion3}
                                            alt="productImg" />
                                    </a>
                                </div>
                                <p>Price $40 </p>
                                <div className="addCartBtnSec">
                                    <button className="addCarBtn"
                                        title="Add to cart"
                                        onclick="">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Body>gridSec>Electronics & Gadgets sec ------------ --> */}
                    <h1>
                        Electronics & Gadgets
                    </h1>
                    <div className="cardSec">
                        <div className="cardSecContainer">
                            <div className="cardSec-elem">
                                <h4>Phones</h4>
                                <div className="T-shirtImg">
                                    <a href="">
                                        <img src={electronics1}
                                            alt="productImg" />
                                    </a>
                                </div>
                                <p>Price $515</p>
                                <div className="addCartBtnSec">
                                    <button className="addCarBtn"
                                        title="Add to cart"
                                        onclick="">
                                        Add to cart
                                    </button>
                                </div>
                            </div>

                            <div className="cardSec-elem">
                                <h4>Laptops</h4>
                                <div className="T-shirtImg">
                                    <a href="">
                                        <img src={electronics2}
                                            alt="productImg" />
                                    </a>
                                </div>
                                <p>Price $850 </p>
                                <div className="addCartBtnSec">
                                    <button className="addCarBtn"
                                        title="Add to cart"
                                        onclick="">
                                        Add to cart
                                    </button>
                                </div>
                            </div>

                            <div className="cardSec-elem">
                                <h4>Computers</h4>
                                <div className="T-shirtImg">
                                    <a href="">
                                        <img src={electronics3}
                                            alt="productImg" />
                                    </a>
                                </div>
                                <p>Price $550 </p>
                                <div className="addCartBtnSec">
                                    <button className="addCarBtn"
                                        title="Add to cart"
                                        onclick="">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Body>gridSec>Home & Living sec ------------ --> */}
                    <h1>
                        Home & Living
                    </h1>
                    <div className="cardSec">
                        <div className="cardSecContainer">
                            <div className="cardSec-elem">
                                <h4>Furnitures</h4>
                                <div className="T-shirtImg">
                                    <a href="">
                                        <img src={living1}
                                            alt="productImg" />
                                    </a>
                                </div>
                                <p>Price $35 </p>
                                <div className="addCartBtnSec">
                                    <button className="addCarBtn"
                                        title="Add to cart"
                                        onclick="">
                                        Add to cart
                                    </button>
                                </div>
                            </div>

                            <div className="cardSec-elem">
                                <h4>Home Décor</h4>
                                <div className="T-shirtImg">
                                    <a href="">
                                        <img src={living2}
                                            alt="productImg" />
                                    </a>
                                </div>
                                <p>Price $60 </p>
                                <div className="addCartBtnSec">
                                    <button className="addCarBtn"
                                        title="Add to cart"
                                        onclick="">
                                        Add to cart
                                    </button>
                                </div>
                            </div>

                            <div className="cardSec-elem">
                                <h4>Bedding & Mattresses</h4>
                                <div className="T-shirtImg">
                                    <a href="">
                                        <img src={living3}
                                            alt="productImg" />
                                    </a>
                                </div>
                                <p>Price $40 </p>
                                <div className="addCartBtnSec">
                                    <button className="addCarBtn"
                                        title="Add to cart"
                                        onclick="">
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
