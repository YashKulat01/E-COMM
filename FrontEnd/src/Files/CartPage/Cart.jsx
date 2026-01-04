import React, { useState } from 'react'
import './Cart.css'

import { products } from "../MainPage/ShopNow/BabyKids/Baby.js";

export default function Cart() {
    // const [cartItems, setCartItems] = useState([
    //     {
    //         id: 1,
    //         name: "Wireless Headphones",
    //         price: 2999,
    //         quantity: 1,
    //         image: "https://via.placeholder.com/80",
    //     },
    //     {
    //         id: 2,
    //         name: "Smart Watch",
    //         price: 4999,
    //         quantity: 2,
    //         image: "https://via.placeholder.com/80",
    //     },
    // ]);


    // const increaseQty = (id) => {
    //     setCartItems((items) =>
    //         items.map((item) =>
    //             item.id === id
    //                 ? { ...item, quantity: item.quantity + 1 }
    //                 : item
    //         )
    //     );
    // };


    // const decreaseQty = (id) => {
    //     setCartItems((items) =>
    //         items.map((item) =>
    //             item.id === id && item.quantity > 1
    //                 ? { ...item, quantity: item.quantity - 1 }
    //                 : item
    //         )
    //     );
    // };


    // const removeItem = (id) => {
    //     setCartItems((items) => items.filter((item) => item.id !== id));
    // };


    // const totalPrice = cartItems.reduce(
    //     (total, item) => total + item.price * item.quantity,
    //     0
    // );
    return (
        <>
            <div className="cart-container">
                
                <div className="left">

                    <h1>Shopping Cart</h1>
                    <hr />
                    <div className="infoSection">
                        <div className="productImg">
                            <img src={products.product4}
                                alt="productImg" />
                        </div>
                        <div className="productInfo">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, magnam!</h3>
                            <h5>In stock</h5>
                            <h3>Price</h3>
                            <div className="quantitCcontrols">
                                <button>-</button>
                                <span></span>
                                <button>+</button>
                            </div>
                            <div className="removeBtn">
                                <button>Remove</button>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="infoSection">
                        <div className="productImg">
                            <img src={products.product4}
                                alt="productImg" />
                        </div>
                        <div className="productInfo">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, magnam!</h3>
                            <h5>In stock</h5>
                            <h3>Price</h3>
                            <div className="quantitCcontrols">
                                <button>-</button>
                                <span></span>
                                <button>+</button>
                            </div>
                            <div className="removeBtn">
                                <button>Remove</button>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="infoSection">
                        <div className="productImg">
                            <img src={products.product4}
                                alt="productImg" />
                        </div>
                        <div className="productInfo">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, magnam!</h3>
                            <h5>In stock</h5>
                            <h3>Price</h3>
                            <div className="quantitCcontrols">
                                <button>-</button>
                                <span></span>
                                <button>+</button>
                            </div>
                            <div className="removeBtn">
                                <button>Remove</button>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="infoSection">
                        <div className="productImg">
                            <img src={products.product4}
                                alt="productImg" />
                        </div>
                        <div className="productInfo">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, magnam!</h3>
                            <h5>In stock</h5>
                            <h3>Price</h3>
                            <div className="quantitCcontrols">
                                <button>-</button>
                                <span></span>
                                <button>+</button>
                            </div>
                            <div className="removeBtn">
                                <button>Remove</button>
                            </div>
                        </div>
                    </div>
                    <hr />

                </div>
                <div className="right">
                    <div className="right-top">
                        <h2>Payment Section</h2>
                        <hr />
                        <h3>Subtotal 5 items</h3>
                        <button className='chekoutBtn'>Proceed to checkout</button>
                    </div>
                    <div className="right-bottom">
                        <h2>Related Products</h2>
                        <hr />
                        <div className="infoSection">
                            <div className="productImg">
                                <img src={products.product4}
                                    alt="productImg" />
                            </div>
                            <div className="productInfo">
                                <h3>Lorem ipsum dolor sit amet consectetur </h3>
                                <h3>Price</h3>
                            </div>
                        </div>
                        <div className="infoSection">
                            <div className="productImg">
                                <img src={products.product4}
                                    alt="productImg" />
                            </div>
                            <div className="productInfo">
                                <h3>Lorem ipsum dolor sit amet consectetur </h3>
                                <h3>Price</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
