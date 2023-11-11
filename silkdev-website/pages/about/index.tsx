import React, { useState } from 'react'
import HeroSection from '@/app/components/hero/HeroSection'
import Company from '@/app/components/highlights/company/Company';
import SideBar from '@/app/components/sidebar/SideBar';
import Teams from '@/app/components/Team/Teams';
import ClientComment from '@/app/components/Clientcomment/ClientComment';
import Footer from '@/app/components/footer/Footer';
import './about.module.scss'
const About = (props:any) => {
  const [show,setShow] = useState(false);
  const [current,setCurrent] = useState('story');
  const ChangeNavbarToggle =(data:any)=>{
    setShow(!show)
  }
  console.log('here',show);
  
  return (
    <div className="box" style={{margin:0}}>
    {!show &&
    <div style={{margin:0}} className="box">
      <HeroSection 
     home={false}
     title={'About Us'} 
     desc={'We are a team of experienced creatives with an entrepreneurial mindset. We are constantly rethinking the future by creating innovative products and services that solve real-world problems.'} 
     navbarToggle={ChangeNavbarToggle}/>
     <Company />
     <Teams />
     <div className="container" >
            <ClientComment />
            <Footer />
          </div>
     </div>
    }
     {show && <SideBar closeBtn={ChangeNavbarToggle}/>}
   
    </div>
  )
}

export default About