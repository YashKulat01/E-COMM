
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Footer from './Files/Footer/Footer.jsx'
import Header from './Files/Header/Header.jsx'
import AboutPage from './Files/AboutPage/AboutPage.jsx'
import ContactPage from './Files/Contact/ContactPage.jsx'
import TermsConditions from './Files/Terms&Conditions/TermsConditions.jsx'
import TermsPolicy from './Files/Terms&Policy/TermsPolicy.jsx'
import SignIn from './Files/SignIn/SignIn.jsx'
import SignUp from './Files/SignUp/SignUp.jsx'
import Home from './Files/MainPage/Home/Home.jsx'
import ShopNow from './Files/MainPage/ShopNow/ShopNow.jsx'
import Fashion from './Files/MainPage/ShopNow/FashionApparal/Fashion.jsx'
import Electronics from './Files/MainPage/ShopNow/ElectronicsGadgets/Electronics.jsx'
import HomeLiving from './Files/MainPage/ShopNow/HomeLiving/HomeLiving.jsx'
import Grocery from './Files/MainPage/ShopNow/GroceryEssentials/Grocery.jsx'
import Beauty from './Files/MainPage/ShopNow/BeautyCare/Beauty.jsx'
import Health from './Files/MainPage/ShopNow/HealthWellness/Health.jsx'
import Sport from './Files/MainPage/ShopNow/SportOutdoor/Sport.jsx'
import Baby from './Files/MainPage/ShopNow/BabyKids/Baby.jsx'
import Stationery from './Files/MainPage/ShopNow/OfficeStationary/Stationery.jsx'
import Cart from './Files/CartPage/Cart.jsx'
import Layout from './Files/Layout/Layout.jsx'

function App() {

  return (
    <>
      {/* <Header/> */}
      {/* <Outlet/> */}
      {/* <AboutPage/> */}
      {/* <ContactPage/> */}
      {/* <TermsConditions/> */}
      {/* <TermsPolicy/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}

      {/* <Home/> */}
      {/* <ShopNow/> */}
      {/* <Fashion/> */}
      {/* <Electronics /> */}
      {/* <HomeLiving/> */}
      {/* <Grocery/> */}
      {/* <Beauty/> */}
      {/* <Health/> */}
      <Sport/>
      {/* <Baby/> */}
      {/* <Stationery/> */}
      {/* <Cart/> */}
    </>
  )
}

export default App
