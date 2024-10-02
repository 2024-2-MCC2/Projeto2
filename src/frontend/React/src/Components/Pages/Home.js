// import './App.css'
import Banner from '../HomePages/Banner'
import Importance from '../HomePages/Importance'
import ParallaxImage from '../HomePages/parallax-image2'
import AboutUS from '../HomePages/AboutUS'

function Home() {
  return (
    <div>
      <Banner/>
      <Importance/>
      <ParallaxImage/>
      <AboutUS/>
    </div>
  )
}

export default Home