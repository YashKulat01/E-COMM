import React from 'react'
import '../Header/Header.css'

import { showSidebar } from "./Header.js";


import hamburgerLogo from './HeaderAssets/hamburger-icon.png'
import webLogo from './HeaderAssets/E-comm_logo6.png'
import userLogo from './HeaderAssets/user-logo1.png'
import cartLogo from './HeaderAssets/Shopping-cart-2.png'    

export default function Header() {
  return (
   <>
     <div class="headerContainer">
        <header>
          {/* <!-- Header Container ---------------------------- --> */}
          <div class="headerSec">
            {/* <!-- Header Container>left sec --------------------- --> */}
            <div class="leftSec">
              <div class="hamburgerSec">
                <img src={hamburgerLogo} id="hamburgerIcon"
                  alt="hamburger-icon" onClick={showSidebar} height="40px" title="Main menu" />
              </div>
              <div class="sidebarCont" id="sidebar">
                <ul>
                  <h3 class="sidebarContHead">
                    Welcome <span id="username">USER</span> !!!
                    <div id="closeSideBar" class="closebtn" onclick="closeSideBar()">
                      X
                    </div>
                  </h3>
                  <hr class="bodyHr" />
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
                  <hr class="bodyHr" />
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
                  <hr class="bodyHr" />
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
              <div class="logoSec">
                <a href="/Codes/Front-end/Main-page/Main-page.html">
                  <img class="webLogo" title="E-COMM" src={webLogo}
                    alt="E-COMM logo" height="40px" width="110px" />
                </a>
              </div>
              <div class="allCategorySec">
                <button id="categoryBtn" class="allCategoryBtn" title="All Category"
                  onclick="openCategory()">
                  All Category
                </button>
                <div id="CategoriesDD" class="allCategorySecDropdown">
                  <h3>All Categories</h3>
                  <div id="closeCategory" class="closeSec" onclick="closeCategory()">
                    X
                  </div>
                  <hr class="bodyHr" />
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
            <div class="rightSec">
              {/* <!-- Header Container>right sec>Links ------------------- --> */}
              <nav class="links">
                <div class="linkSec">
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
              <div class="UserSec">
                <img id="userImg" src={userLogo} alt="" height="35px"
                  title="Your Account" onclick="openUserSec()" />

              </div>
              <div id="userDD" class="userSecDropDown">
                <h3>
                  Your Account
                </h3>
                <div id="closeBtn" class="closeBtnSec" onclick="closeUserSec()">
                  X
                </div>
                <ul>
                  <li>
                    <img src="/Codes/Front-end/assets/user-logo.png" alt="" height="64px" />
                  </li>
                  <li>
                    Hii <span>User !</span>
                  </li>
                  <li>
                    <button class="myaBtn" title="Manage Your Account">
                      Manage Your Account
                    </button>
                  </li>

                  <li>
                    <a href="">
                      Add another account
                    </a>
                  </li>
                  <li>
                    <button class="signOutBtn" title="Sign out">
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
              {/* <!-- Header Container>right sec>Cart sec ------------------- --> */}
              <div class="cartSec">
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
