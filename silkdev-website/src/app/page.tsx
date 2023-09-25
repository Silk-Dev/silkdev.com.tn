import Image from 'next/image'
import HeroSection from './components/hero/HeroSection'
import SideBar from './components/sidebar/SideBar'
import OurServices from './components/OurServices/OurServices'
import Portfolio from './components/projectSection/Portfolio'
export default function Home() {
  return (
    <>
     <HeroSection />
     <OurServices />
     <Portfolio />
    </>
  )
}
