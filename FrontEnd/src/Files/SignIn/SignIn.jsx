import React from 'react'

import './SignIn.css'

import cartLogo from '../SignIn/Shopping-cart-2.png'

export default function SignIn() {
    return (
        <>
            <div className="bodyContainer">
                <div className="container">
                    <form action="" id="signInForm">
                        <div className="formIcon">
                            <a href="/Codes/Front-end/Home-page/index.html">
                                <img src={cartLogo}
                                    title="click here to go homepage"
                                    alt="" />
                            </a>
                        </div>
                        <div className="signInSec">
                            <h1>
                                Sign In
                            </h1>
                            <p>
                                Welcome Back!! Please Enter your details
                            </p>
                            <p className="errorMsg"></p>
                            <hr className="bodyHr" />

                            <div>
                                <label>
                                    <b>
                                        Email:
                                    </b>
                                </label><br />
                                <input type="email"
                                    placeholder="Enter email"
                                    name="email" /><br />
                            </div>

                            <div>
                                <label>
                                    <b>
                                        Password:
                                    </b>
                                </label><br />

                                <input type="password"
                                    placeholder="Enter password"
                                    name="password" />
                            </div>
                            <p>
                                New Here ?
                                <a href="/Codes/Front-end/Sign-up-page/Sign-up-page.html" style={{ color: "rgb(245, 245, 245)" }}>
                                    Create an Account
                                </a>.
                            </p>
                            <div className="signBtnSec">
                                <button className="signInBtn"
                                    title="Sign In">
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
