import React, { useState } from 'react'
import { useEffect } from 'react';

import { assets, products } from './Health.js';
import './Health.css'

const banners = [assets.slide1, assets.slide2];

export default function Health() {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
        }, 5000);

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
                        className="slider-image-health" />

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
                <div className="parent">
                    <div className="cardSec-elem-health">
                        <h4>Men T-shirt</h4>
                        <div className="T-shirtImg">
                            <a href="">
                                <img src={products.product1}
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

                    <div className="cardSec-elem-health">
                        <h4>Men T-shirt</h4>
                        <div className="T-shirtImg">
                            <a href="">
                                <img src={products.product2}
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

                    <div className="cardSec-elem-health">
                        <h4>Men T-shirt</h4>
                        <div className="T-shirtImg">
                            <a href="">
                                <img src={products.product3}
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

                    <div className="cardSec-elem-health">
                        <h4>Men T-shirt</h4>
                        <div className="T-shirtImg">
                            <a href="">
                                <img src={products.product4}
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

                    <div className="cardSec-elem-health">
                        <h4>Men T-shirt</h4>
                        <div className="T-shirtImg">
                            <a href="">
                                <img src={products.product5}
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

                    <div className="cardSec-elem-health">
                        <h4>Men T-shirt</h4>
                        <div className="T-shirtImg">
                            <a href="">
                                <img src={products.product6}
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

                    <div className="cardSec-elem-health">
                        <h4>Men T-shirt</h4>
                        <div className="T-shirtImg">
                            <a href="">
                                <img src={products.product7}
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

                    <div className="cardSec-elem-health">
                        <h4>Men T-shirt</h4>
                        <div className="T-shirtImg">
                            <a href="">
                                <img src={products.product8}
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

                    <div className="cardSec-elem-health">
                        <h4>Men T-shirt</h4>
                        <div className="T-shirtImg">
                            <a href="">
                                <img src={products.product9}
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

                    <div className="cardSec-elem-health">
                        <h4>Men T-shirt</h4>
                        <div className="T-shirtImg">
                            <a href="">
                                <img src={products.product10}
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

                    <div className="cardSec-elem-health">
                        <h4>Men T-shirt</h4>
                        <div className="T-shirtImg">
                            <a href="">
                                <img src={products.product11}
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

                </div>
            </div>
        </>
    )
}
