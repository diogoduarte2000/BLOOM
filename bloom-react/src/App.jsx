import Hero from './components/Hero'
import Intro from './components/Intro'
import FullPhoto from './components/FullPhoto'
import NotFinished from './components/NotFinished'
import Gallery from './components/Gallery'
import Connected from './components/Connected'
import Discover from './components/Discover'
import AvailableHomes from './components/AvailableHomes'
import Offers from './components/Offers'
import PlotsForSale from './components/PlotsForSale'
import Efficiency from './components/Efficiency'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Hero />
      <Intro />
      <FullPhoto />
      <NotFinished />
      <Gallery />
      <Connected />
      <Discover />
      <AvailableHomes />
      <Offers />
      <PlotsForSale />
      <div className="section-divider-orig" />
      <Efficiency />
      <div className="section-divider-orig" />
      <Contact />
      <Footer />
    </>
  )
}
