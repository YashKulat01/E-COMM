import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className="footerContainer">
                <footer>
                    <div className="footerSec">
                        {/* <!-- Body > footer sec >social sec ----------- --> */}
                        <div className="socialSec">
                            <h1>
                                E-COMM
                            </h1>
                            <p>
                                Online shopping
                            </p>
                            <p>
                                Connect us
                            </p>
                            <p>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-twitter-x"></i>
                                <i className="bi bi-google-play"></i>
                                <i className="bi bi-apple"></i>
                            </p>
                            <p>
                                Copyright &copy; 2025 E-COMM
                            </p>
                            <p>
                                <a href="/Codes/Front-end/T&P-page/T&P-page.html">
                                    Privacy policy
                                </a>
                            </p>
                        </div>
                        <div className="companySec">
                            <h1>
                                Company
                            </h1>
                            <p>
                                <a href="/Codes/Front-end/About-page/About-page.html">
                                    About us
                                </a>
                            </p>
                            <p>
                                <a href="/Codes/Front-end/Contact-page/Contact-page.html">
                                    Contact
                                </a>
                            </p>
                            <p>
                                <a href="/Codes/Front-end/T&C-page/T&C-page.html">
                                    Terms & Conditions
                                </a>
                            </p>
                        </div>
                        <div className="officeAddSec">
                            <h1>
                                Address:
                            </h1>
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
                    </div>
                </footer>
            </div>
        </>
    )
}
