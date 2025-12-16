
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
      <SignUp />
    </>
  )
}

export default App
