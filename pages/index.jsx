import Image from 'next/image'
import Brands from '../components/Brands'
import FeaturedProduct from '../components/FeaturedProduct'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroWithSlider from '../components/HeroWithSlider'

export default function Home() {
  return (

    <main>
      <Header/>
      <HeroWithSlider/>
      <FeaturedProduct/>
      <Brands/>
      <Footer/>
    </main>

  )
}
