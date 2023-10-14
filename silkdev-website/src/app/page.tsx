"use client"
import Image from 'next/image'
import HeroSection from './components/hero/HeroSection'
import SideBar from './components/sidebar/SideBar'
import OurServices from './components/OurServices/OurServices'
import Portfolio from './components/projectSection/Portfolio'
import OurBlog from './components/OurBlog/OurBlog'
import Contact from './components/contactSection/Contact'
import Footer from './components/footer/Footer'
import Servicesdesc from './components/servicedesc/servicesdesc'
import styles from '../../src/app/components/Clientcomment/client.module.scss';
import { useState } from 'react'

import ClientComment from './components/Clientcomment/ClientComment'
export default function Home(props:any) {
  const [show,setShow] = useState(false)
  const ChangeNavbarToggle =(data:any)=>{
    setShow(!show)
  }
  return (
    <>
     {!show &&
     <div>
     <HeroSection navbarToggle={ChangeNavbarToggle}/>
     <OurServices />
     <Portfolio />
    
     <Contact/>
     <OurBlog/>
     <div className={styles.container}>
     <ClientComment/>
     <Footer/>
      </div>
      <Servicesdesc/>
     </div>
     
}
     {show && <SideBar closeBtn={ChangeNavbarToggle}/>}
    </>
  )
}
