import React from 'react'

import './ShopNow.css'

import Fashion from '../ShopNow/assets/Fashion & Appearal.jpeg'
import Electronics from '../ShopNow/assets/Electronics & Gadgets.jpg'
import Home from '../ShopNow/assets/Home & Living.jpg'
import Grocery from '../ShopNow/assets/Grocery & Essentials.jpeg'
import Beauty from '../ShopNow/assets/Beauty & Personal Care.png'
import Health from '../ShopNow/assets/health and wellness.jpg'
import Sports from '../ShopNow/assets/Sports & Outdoor.jpeg'
import Entertainment from '../ShopNow/assets/Entertainment & Hobbies.jpg'
import Baby from '../ShopNow/assets/Baby & Kids.jpeg'
import Automotive from '../ShopNow/assets/Automotive.jpeg'
import Office from '../ShopNow/assets/Office & Stationery.jpg'
import Pet from '../ShopNow/assets/Pet Supplies.jpeg'


export default function ShopNow() {
  return (
    <>
      <div className="gridSec">
        <h1>All Categories</h1>
        {/* body>grid sec >category sec--------------------------------- */}
        <div className="categorySec">
          <div className="categoryContainer">
            <div className="categoryContainerRow">
              {/* body>grid sec >category sec> Fashion and Apperal sec--------------------------------- */}
              <div
                className="cardSec-elem"
                onClick="window.location.href = '/Codes/Front-end/Main-page/Shop-now-page/Fashion-page/Fashion-page.html';"
              >
                <h2>Fashion &amp; Apparel</h2>
                <div className="imgSec">
                  <a href="/Codes/Front-end/Main-page/Shop-now-page/Fashion-page/Fashion-page.html">
                    <img
                      src={Fashion}
                      alt="productImg"
                    />
                  </a>
                </div>
                <div className="shopNowBtnSec">
                  <button className="shopNowBtn" title="Add to cart" onClick="">
                    Shop now
                  </button>
                </div>
              </div>
              {/* body>grid sec >category sec> Electronics & Gadgets sec--------------------------------- */}
              <div className="cardSec-elem">
                <h2>Electronics &amp; Gadgets</h2>
                <div className="imgSec">
                  <a href="">
                    <img
                      src={Electronics}
                      alt="productImg"
                    />
                  </a>
                </div>
                <div className="shopNowBtnSec">
                  <button className="shopNowBtn" title="Add to cart" onClick="">
                    Shop now
                  </button>
                </div>
              </div>
              {/* body>grid sec >category sec> Home & Living sec--------------------------------- */}
              <div className="cardSec-elem">
                <h2>Home &amp; Living</h2>
                <div className="imgSec">
                  <a href="">
                    <img
                      src={Home}
                      alt="productImg"
                    />
                  </a>
                </div>
                <div className="shopNowBtnSec">
                  <button className="shopNowBtn" title="Add to cart" onClick="">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
            <div className="categoryContainerRow">
              {/* body>grid sec >category sec> Grocery & Essentials sec--------------------------------- */}
              <div className="cardSec-elem">
                <h2>Grocery &amp; Essentials</h2>
                <div className="imgSec">
                  <a href="">
                    <img
                      src={Grocery}
                      alt="productImg"
                    />
                  </a>
                </div>
                <div className="shopNowBtnSec">
                  <button className="shopNowBtn" title="Add to cart" onClick="">
                    Shop now
                  </button>
                </div>
              </div>
              {/* body>grid sec >category sec> Beauty & Personal Care sec--------------------------------- */}
              <div className="cardSec-elem">
                <h2>Beauty &amp; Personal Care</h2>
                <div className="imgSec">
                  <a href="">
                    <img
                      src={Beauty}
                      alt="productImg"
                    />
                  </a>
                </div>
                <div className="shopNowBtnSec">
                  <button className="shopNowBtn" title="Add to cart" onClick="">
                    Shop now
                  </button>
                </div>
              </div>
              {/* body>grid sec >category sec> Health & Wellness sec--------------------------------- */}
              <div className="cardSec-elem">
                <h2>Health &amp; Wellness</h2>
                <div className="imgSec">
                  <a href="">
                    <img
                      src={Health}
                      alt="productImg"
                    />
                  </a>
                </div>
                <div className="shopNowBtnSec">
                  <button className="shopNowBtn" title="Add to cart" onClick="">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
            <div className="categoryContainerRow">
              {/* body>grid sec >category sec> Sports & Outdoor sec--------------------------------- */}
              <div className="cardSec-elem">
                <h2>Sports &amp; Outdoor</h2>
                <div className="imgSec">
                  <a href="">
                    <img
                      src={Sports}
                      alt="productImg"
                    />
                  </a>
                </div>
                <div className="shopNowBtnSec">
                  <button className="shopNowBtn" title="Add to cart" onClick="">
                    Shop now
                  </button>
                </div>
              </div>
              {/* body>grid sec >category sec> Entertainment & Hobbies sec--------------------------------- */}
              <div className="cardSec-elem">
                <h2>Entertainment/Hobbies</h2>
                <div className="imgSec">
                  <a href="">
                    <img
                      src={Entertainment}
                      alt="productImg"
                    />
                  </a>
                </div>
                <div className="shopNowBtnSec">
                  <button className="shopNowBtn" title="Add to cart" onClick="">
                    Shop now
                  </button>
                </div>
              </div>
              {/* body>grid sec >category sec> Baby & Kids sec--------------------------------- */}
              <div className="cardSec-elem">
                <h2>Baby &amp; Kids</h2>
                <div className="imgSec">
                  <a href="">
                    <img
                      src={Baby}
                      alt="productImg"
                    />
                  </a>
                </div>
                <div className="shopNowBtnSec">
                  <button className="shopNowBtn" title="Add to cart" onClick="">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
            <div className="categoryContainerRow">
              {/* body>grid sec >category sec> Automotive sec--------------------------------- */}
              <div className="cardSec-elem">
                <h2>Automotive</h2>
                <div className="imgSec">
                  <a href="">
                    <img
                      src={Automotive}
                      alt="productImg"
                    />
                  </a>
                </div>
                <div className="shopNowBtnSec">
                  <button className="shopNowBtn" title="Add to cart" onClick="">
                    Shop now
                  </button>
                </div>
              </div>
              {/* body>grid sec >category sec> Office & Stationery sec--------------------------------- */}
              <div className="cardSec-elem">
                <h2>Office &amp; Stationery</h2>
                <div className="imgSec">
                  <a href="">
                    <img
                      src={Office}
                      alt="productImg"
                    />
                  </a>
                </div>
                <div className="shopNowBtnSec">
                  <button className="shopNowBtn" title="Add to cart" onClick="">
                    Shop now
                  </button>
                </div>
              </div>
              {/* body>grid sec >category sec> Pet Supplies sec--------------------------------- */}
              <div className="cardSec-elem">
                <h2>Pet Supplies</h2>
                <div className="imgSec">
                  <a href="">
                    <img
                      src={Pet}
                      alt="productImg"
                    />
                  </a>
                </div>
                <div className="shopNowBtnSec">
                  <button className="shopNowBtn" title="Add to cart" onClick="">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
