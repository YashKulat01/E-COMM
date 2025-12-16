import React from 'react'

import './AboutPage.css'

import webLogo from '../Header/HeaderAssets/E-comm_logo6.png'

export default function AboutPage() {
    return (
        <>
            <div className="headerContainer">
                <header>
                    {/* <!-- Header Container ---------------------------- --> */}
                    <div className="headerSec">
                        {/* <!-- Header Container>left sec --------------------- --> */}
                        <div className="leftSec">
                            <div className="logoSec">
                                <a href="/Codes/Front-end/Main-page/Main-page.html">
                                    <img className="webLogo"
                                        title="E-COMM"
                                        src={webLogo}
                                        alt="E-COMM logo"
                                        height="40px"
                                        width="110px" />
                                </a>
                            </div>
                        </div>

                        {/* <!-- Header Container>right sec ----------------------- --> */}
                        <div className="rightSec">
                            {/* <!-- Header Container>right sec>Links ------------------- --> */}
                            <nav className="links">
                                <div className="linkSec">
                                    <a href="/Codes/Front-end/Main-page/Main-page.html"
                                        title="Home">
                                        Home
                                    </a>
                                    <a href="/Codes/Front-end/About-page/About-page.html"
                                        title="About Us">
                                        About Us
                                    </a>
                                    <a href="/Codes/Front-end/Contact-page/Contact-page.html"
                                        title="Contact">
                                        Contact
                                    </a>
                                    <a href="/Codes/Front-end/T&C-page/T&C-page.html"
                                        title="Terms & Conditions">
                                        Terms & Conditions
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>

            {/* <!-- Body Container --------------------------------------- --> */}
            <div className="bodyContainer">
                {/* <!-- AboutUsSec ---------------------------------------- --> */}
                <div className="aboutUsSec">
                    <div className="heading">
                        About Us :
                    </div>
                    <hr className="bodyHr" />

                    <div className="quotePara">
                        <ul>
                            <li>
                                E-COMM is guided by four principles: customer obsession rather than competitor focus,
                                passion
                                for invention, commitment to operational excellence, and long-term thinking.
                            </li>
                            <li>
                                E-COMM strives to be Earth’s most customer-centric company, Earth’s best employer, and
                                Earth’s
                                safest place to work.
                            </li>
                            <li>
                                On its Who We Are page, E-COMM makes it clear that its mission statement is all about its
                                customers.
                            </li>
                            <li>
                                In its effort to bring the best to its customers at the lowest price, it formed partnerships
                                with companies around the world.
                            </li>
                            <li>
                                This is what’s given E-COMM the competitive advantage that’s made it the global powerhouse
                                it is
                                today.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
