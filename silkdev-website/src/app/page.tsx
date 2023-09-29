"use client"
import Image from 'next/image'
import HeroSection from './components/hero/HeroSection'
import SideBar from './components/sidebar/SideBar'
import OurServices from './components/OurServices/OurServices'
import Portfolio from './components/projectSection/Portfolio'
import OurBlog from './components/OurBlog/OurBlog'
import { useState } from 'react'
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
     <OurBlog/>
     </div>
     
}
     {show && <SideBar closeBtn={ChangeNavbarToggle}/>}
    </>
  )
}
