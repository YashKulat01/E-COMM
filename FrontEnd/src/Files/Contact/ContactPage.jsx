import React from 'react'

import './ContactPage.css'

import webLogo from '../Header/HeaderAssets/E-comm_logo6.png'

export default function ContactPage() {
    return (
        <>
            {/* <!-- Header Container --------------------------------- --> */}
            <div className="headerContainer">
                <header>
                    {/* <!-- Header Container ---------------------------- --> */}
                    <div className="headerSec">
                        {/* <!-- Header Container>left sec --------------------- --> */}
                        <div className="leftSec">
                            <a href="/Codes/Front-end/Main-page/Main-page.html">
                                <img className="webLogo"
                                    title="E-COMM"
                                    src={webLogo}
                                    alt="E-COMM logo"
                                    height="40px"
                                    width="110px" />
                            </a>
                        </div>
                        {/* <!-- Header Container>right sec ----------------------- --> */}
                        <div className="rightSec">
                            {/* <!-- Header Container>right sec>Links ------------------- --> */}
                            <nav className="links">
                                <div className="linkSec">
                                    <a href="/Codes/Front-end/Main-page/Main-page.html" title="Home">
                                        Home
                                    </a>
                                    <a href="/Codes/Front-end/About-page/About-page.html" title="About Us">
                                        About Us
                                    </a>
                                    <a href="/Codes/Front-end/Contact-page/Contact-page.html" title="Contact">
                                        Contact
                                    </a>
                                    <a href="/Codes/Front-end/T&C-page/T&C-page.html" title="Terms & Conditions">
                                        Terms & Conditions
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
            {/* <!-- Body Container ----------------------------------- --> */}
            <div className="bodyContainer">
                <div className="container">
                    {/* <!-- BodyContainer> Contact heading sec -------------- --> */}
                    <div className="contactHeading">
                        <p>
                            Contact Us.
                        </p>
                    </div>
                    {/* <!-- BodyContainer> Contact text sec -------------- --> */}
                    <div className="contactText">
                        <p>
                            If you have any questions or suggestions, don't hesitate to get in touch with us. Our team
                            speaks
                            English and Spanish and is always happy to help!
                        </p>
                    </div>
                    <hr className="bodyHr" />
                    {/* <!-- BodyContainer> Info sec -------------- --> */}
                    <div className="infoSec">
                        <div className="storeAddSec">
                            <h3>
                                Store Address:
                            </h3>
                            <p>
                                Street Name
                            </p>
                            <p>
                                Suite No
                            </p>
                            <p>
                                City
                            </p>
                            <p>
                                Country
                            </p>
                        </div>
                        <div className="officeAddSec">
                            <h3>
                                Office Address:
                            </h3>
                            <p>
                                Street Name
                            </p>
                            <p>
                                Suite No
                            </p>
                            <p>
                                City
                            </p>
                            <p>
                                Country
                            </p>
                        </div>
                        <div className="contactSec">
                            <p>
                                Email: info@E-COMM.com
                            </p>
                            <p>
                                Phone: 123-456-7890
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!-- BodyContainer> Map sec -------------- --> */}
                <div className="mapSec">
                    <iframe className="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7530.333360906203!2d11.578738609089884!3d48.14157729717254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sMunich%2C%20Germany!5e0!3m2!1sen!2sin!4v1756969409791!5m2!1sen!2sin"
                        style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </>
    )
}
