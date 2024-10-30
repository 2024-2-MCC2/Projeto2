import Banner from '../ComplementPages/Banner'
import Importance from '../ComplementPages/Importance'
import ParallaxImage from '../ComplementPages/parallax-image2'
import AboutUS from '../ComplementPages/AboutUS'

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