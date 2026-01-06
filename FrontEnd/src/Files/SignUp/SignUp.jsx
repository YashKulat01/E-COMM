import React from 'react'

import '../SignUp/SignUp.css'

import cartLogo from '../SignIn/Shopping-cart-2.png'

export default function SignUp() {
    return (
        <>
            <div className="bodyContainerSignUp">
                <div className="containerSignUp">
                    <form action="">
                        <div className="formIcon">
                            <a href="/Codes/Front-end/Main-page/Main-page.html" >
                                <img src={cartLogo}
                                    title="click here to go homepage"
                                    alt="" />
                            </a>
                        </div>
                        <div className="signUpSec">
                            <h1>
                                Sign Up
                            </h1>
                            <p>
                                Please fill in this form to create an account.
                            </p>
                            <p></p>
                            <hr className="bodyHrSignUp" />
                            <div>
                                <label>
                                    <b>
                                        Username
                                    </b>
                                </label><br />
                                <input type="text"
                                    placeholder="Enter username"
                                    name="uName" /><br />
                            </div>

                            <div>
                                <label>
                                    <b>
                                        Email
                                    </b>
                                </label><br />
                                <input type="email"
                                    placeholder="Enter email"
                                    name="email" /><br />
                            </div>

                            <div>
                                <label>
                                    <b>
                                        Password
                                    </b>
                                </label><br />

                                <input type="password"
                                    placeholder="Enter password"
                                    name="password" />
                            </div>

                            <div>
                                <label>
                                    <b>
                                        Confirm Password
                                    </b>
                                </label><br />
                                <input type="password"
                                    placeholder="Confirm password"
                                    name="password" />
                            </div>

                            <p>
                                Already have an Account ?
                                <a href="/Codes/Front-end/Sign-in-page/Sign-in-page.html"
                                    style={{ color: "rgb(245, 245, 245)" }}>
                                    Sign in
                                </a>.
                            </p>

                            <p style={{height: "auto"}}>
                                <input type="checkbox"
                                    name="checkbox"
                                    style={{ height: "auto", width: "auto", margin: 0 }} />
                                <label >
                                    By creating an account you agree to our
                                </label>
                                <a href="/Codes/Front-end/T&P-page/T&P-page.html"
                                    style={{ color: "rgb(245, 245, 245)" }}>
                                    Terms & Policy
                                </a>.
                            </p>

                            <div className="signBtnSec">
                                <button className="signUpBtn"
                                    title="Sign Up">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
