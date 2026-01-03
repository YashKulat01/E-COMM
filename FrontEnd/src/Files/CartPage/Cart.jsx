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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti explicabo sequi iure repudiandae maxime officiis saepe minima omnis vitae, itaque velit perferendis exercitationem amet voluptates fuga molestiae ducimus repellendus? Excepturi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem aperiam, veritatis quod dicta voluptate! Doloremque excepturi voluptatem saepe esse nemo nam eos ullam impedit culpa, et eligendi animi? Alias!
                    </div>
                    <div className="right-bottom">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur modi autem eum, optio in eligendi dolore distinctio beatae esse aliquid sapiente accusamus, culpa, perferendis alias. Possimus nemo suscipit qui recusandae?
                    </div>
                </div>

            </div>
        </>
    )
}
