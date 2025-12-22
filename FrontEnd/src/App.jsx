
import { Outlet } from 'react-router-dom'
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


function App() {

  return (
    <>
      {/* <Header/> */}
      {/* <Outlet/> */}
      {/* <AboutPage/> */}
      {/* <ContactPage/> */}
      {/* <TermsConditions/> */}
      {/* <Footer/> */}
      {/* <TermsPolicy/> */}
      {/* <SignIn/> */}
      {/* <SignUp /> */}
      {/* <Home/> */}
      {/* <ShopNow/> */}
      <Fashion/>
      
    </>
  )
}

export default App
