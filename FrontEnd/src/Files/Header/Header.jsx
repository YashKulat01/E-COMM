import React from 'react'
import { useState } from "react";

import '../Header/Header.css'

import {
  openSidebar, closeSidebar,
  openCategory, closeCategory,
  openUserSec, closeUserSec
} from "./Header.js";

import hamburgerLogo from './HeaderAssets/hamburger-icon.png'
import webLogo from './HeaderAssets/E-comm_logo6.png'
import userLogo from './HeaderAssets/user-logo1.png'
import cartLogo from './HeaderAssets/Shopping-cart-2.png'
import userLogo1 from './HeaderAssets/user-logo.png'

export default function Header() {

  const [showSidebar, setShowSidebar] = useState(false);
  const [showCategory, setCategory] = useState(false);
  const [showUser, setUser] = useState(false);

  return (
    <>
      <div className="headerContainer">
        <header>
          {/* <!-- Header Container ---------------------------- --> */}
          <div className="headerSec">
            {/* <!-- Header Container>left sec --------------------- --> */}
            <div className="leftSec">
              <div className="hamburgerSec">
                <img src={hamburgerLogo}
                  alt="hamburger-icon"
                  onClick={() => openSidebar(setShowSidebar)}
                  height="40"
                  title="Main menu" />
              </div>

              <div className='sidebarCont'
                style={{ display: showSidebar ? "block" : "none" }}>
                <ul>
                  <h3 className="sidebarContHead">
                    Welcome
                    <span>USER</span> !!!
                    <div className="closebtn"
                      onClick={() => closeSidebar(setShowSidebar)}>
                      ❌
                    </div>
                  </h3>
                  <hr className="bodyHr" />
                  <h3>
                    Trending
                  </h3>
                  <li>
                    <a href="">Best Sellers</a>
                  </li>
                  <li>
                    <a href="">Gift Ideas</a>
                  </li>
                  <li>
                    <a href="">New Realeases</a>
                  </li>
                  <li>
                    <a href="">Today's Deals</a>
                  </li>
                  <hr className="bodyHr" />
                  <h3>
                    Shop by Category
                  </h3>
                  <li>
                    <a href="/Codes/Front-end/Main-page/Shop-now-page/Fashion-page/Fashion-page.html">
                      Fashion & Apparel
                    </a>
                  </li>
                  <li>
                    <a href="">Electronics & Gadgets</a>
                  </li>
                  <li>
                    <a href="">Home & Living</a>
                  </li>
                  <li>
                    <a href="">Grocery & Essentials</a>
                  </li>
                  <li>
                    <a href="">Beauty & Personal Care</a>
                  </li>
                  <li>
                    <a href="">Entertainment & Hobbies</a>
                  </li>
                  <li>
                    <a href="">Baby & Kids</a>
                  </li>
                  <li>
                    <a href="">Automotive</a>
                  </li>
                  <li>
                    <a href="">Office & Stationery</a>
                  </li>
                  <li>
                    <a href="">Pet Supplies</a>
                  </li>
                  <li>
                    <a href="">Digital Services</a>
                  </li>
                  <hr className="bodyHr" />
                  <h3>
                    Shop by Category
                  </h3>
                  <li>
                    <a href="">Your Account</a>
                  </li>
                  <li>
                    <a href="">Customer Service </a>
                  </li>
                  <li>
                    <a href="/Codes/Front-end/Sign-in-page/Sign-in-page.html">
                      Sign in
                    </a>
                  </li>
                </ul>
              </div>

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

              <div className="allCategorySec">
                <button
                  className="allCategoryBtn"
                  title="All Category"
                  onClick={() => openCategory(setCategory)}>
                  All Category
                </button>
                <div className="allCategorySecDropdown"
                  style={{ display: showCategory ? "block" : "none" }}>
                  <h3>All Categories</h3>
                  <div className="closeSec"
                    onClick={() => closeCategory(setCategory)}>
                    X
                  </div>
                  <hr className="bodyHr" />
                  <ul>
                    <li>
                      <a href="/Codes/Front-end/Main-page/Shop-now-page/Fashion-page/Fashion-page.html">
                        👗 Fashion & Apparel
                      </a>
                    </li>
                    <li>
                      <a href="">
                        📱 Electronics & Gadgets
                      </a>
                    </li>
                    <li>
                      <a href="">
                        🏠 Home & Living
                      </a>
                    </li>
                    <li>
                      <a href="">
                        🍎 Grocery & Essentials
                      </a>
                    </li>
                    <li>
                      <a href="">
                        💄 Beauty & Personal Care
                      </a>
                    </li>
                    <li>
                      <a href="">
                        🏋️ Health & Wellness
                      </a>
                    </li>
                    <li>
                      <a href="">
                        🎮 Sports & Outdoor
                      </a>
                    </li>
                    <li>
                      <a href="">
                        🎧 Entertainment & Hobbies
                      </a>
                    </li>
                    <li>
                      <a href="">
                        👶 Baby & Kids
                      </a>
                    </li>
                    <li>
                      <a href="">
                        🚗 Automotive
                      </a>
                    </li>
                    <li>
                      <a href="">
                        💼 Office & Stationery
                      </a>
                    </li>
                    <li>
                      <a href="">
                        🐾 Pet Supplies
                      </a>
                    </li>
                    <li>
                      <a href="">
                        🌐 Digital Services
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

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
              {/* <!-- Header Container>right sec>User sec ------------------- --> */}
              <div className="UserSec">
                <img src={userLogo}
                  alt="UserLogo"
                  height="35px"
                  title="Your Account"
                  onClick={() => openUserSec(setUser)} />

              </div>
              <div className="userSecDropDown"
                style={{ display: showUser ? "block" : "none" }}>
                <h3>
                  Your Account
                </h3>
                <div className="closeBtnSec"
                  onClick={() => closeUserSec(setUser)}>
                  ❌
                </div>
                <ul>
                  <li>
                    <img src={userLogo1} alt="" height="64px" />
                  </li>
                  <li>
                    Hii <span>User !</span>
                  </li>
                  <li>
                    <button className="myaBtn" title="Manage Your Account">
                      Manage Your Account
                    </button>
                  </li>

                  <li>
                    <a href="">
                      Add another account
                    </a>
                  </li>
                  <li>
                    <button className="signOutBtn" title="Sign out">
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
              {/* <!-- Header Container>right sec>Cart sec ------------------- --> */}
              <div className="cartSec">
                <img src={cartLogo} alt="" onclick="" height="35px"
                  title="Cart" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
