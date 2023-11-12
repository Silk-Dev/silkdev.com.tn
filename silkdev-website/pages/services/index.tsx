import React,{useState} from 'react'
import HeroSection from '../../src/app/components/hero/HeroSection'
import SideBar from '../../src/app/components/sidebar/SideBar'
import Servicesdesc from '@/app/components/servicedesc/servicesdesc'
import Portfolio from '../../src/app/components/projectSection/Portfolio'
import styles from './services.module.scss'
import Contact from '../../src/app/components/contactSection/Contact'
import Footer from '../../src/app/components/footer/Footer'

const Services = (props:any) => {
  const [show,setShow] = useState(false);
  const ChangeNavbarToggle =(data:any)=>{
    setShow(!show)
  }
  console.log('here',show);
  
  return (
    <div  style={{margin:"0px"}}>
    {!show &&
    <div className={styles.content}>
      
      <HeroSection 
        home={false}
        title={'Our Services'} 
        desc={'We build digital experiences that wow customers and drive results'} 
        navbarToggle={ChangeNavbarToggle}
        />
      <Servicesdesc/>
      <div className={styles.container}>  
      <Portfolio />
      </div>
      <Contact/>
      <Footer/>
      </div>
    }
      {show && <SideBar closeBtn={ChangeNavbarToggle}/>}
    
    </div>
  )
}

export default Services