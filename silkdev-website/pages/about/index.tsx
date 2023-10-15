import React, { useState } from 'react'
import HeroSection from '@/app/components/hero/HeroSection'
import Company from '@/app/components/highlights/company/Company';
import SideBar from '@/app/components/sidebar/SideBar';
const About = (props:any) => {
  const [show,setShow] = useState(false);
  const [current,setCurrent] = useState('story');
  const ChangeNavbarToggle =(data:any)=>{
    setShow(!show)
  }
  console.log('here',show);
  
  return (
    <div>
      <HeroSection 
     home={false}
     title={'About Us'} 
     desc={'We are a team of experienced creatives with an entrepreneurial mindset. We are constantly rethinking the future by creating innovative products and services that solve real-world problems.'} 
     navbarToggle={ChangeNavbarToggle}/>

     <Company />
     {show && <SideBar closeBtn={ChangeNavbarToggle}/>}
    </div>
  )
}

export default About