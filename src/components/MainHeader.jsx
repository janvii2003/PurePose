import { Link } from "react-router-dom"
import image from '../images/logo2.png'
import '../pages/home/home.css'

const MainHeader = () => {
  return (
    <header className='main-header'>
      <div className="container main-header-container">
        <div className="main-header-left">
          <h4>#100DaysOfWorkout</h4>
          <h2>Unlock the secrets of yoga and achieve your highest potential
          </h2>
          <p>You do not have to live with chronic pain and stress. Discover how good you can feel in your own body. At PurePose we use a system of therapeutic postures and heat that bring the body and mind back into balance so you live stress free and confidently in a pain free and strong body!</p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>

        <div className="main-header-right">
        <div className="main-header-circle"></div>
        <div className="main-header-img">
          <img src={image} alt="main header img"></img>
        </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
