import React,{useState} from 'react'
import HeroSection from '../../src/app/components/hero/HeroSection'
import SideBar from '../../src/app/components/sidebar/SideBar'
import Servicesdesc from '@/app/components/servicedesc/servicesdesc'
import Portfolio from '../../src/app/components/projectSection/Portfolio'
import styles from './services.module.scss'
import Contact from '../../src/app/components/contactSection/Contact'
import Footer from '../../src/app/components/footer/Footer'
const Services = () => {
  // const [show,setShow] = useState(false)
  // const ChangeNavbarToggle =(data:any)=>{
  //   setShow(!show)
  // }
  return (
    <div>
    {/* {!show && */}
      <HeroSection 
        home={false}
        title={'Our Services'} 
        desc={'We build digital experiences that wow customers and drive results'} 
        />
    {/* } */}
      <Servicesdesc/>
      <div className={styles.container}>  
      <Portfolio />
      </div>
      <Contact/>
      <Footer/>
    {/* {show && <SideBar closeBtn={ChangeNavbarToggle}/>} */}
    </div>
  )
}

export default Services