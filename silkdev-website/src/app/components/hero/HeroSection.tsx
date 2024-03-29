import React, { useState } from 'react'
import styles from './heroSection.module.scss'
import Header from '../header/Header'
import Button from '../button/Button'
import SideBar from './sidenav/SideNav'
const HeroSection = (props:any) => {
  const [show,setShow] = useState(false)
  const ChangeNavbarToggle =(data:any)=>{
    setShow(!show);
  }
  return (
      <div className={styles.heroSection}>
      <Header navbarToggle={props.navbarToggle}/> 
      <div className={styles.inline}>
      <div className={styles.content}>
      <h1 className={styles.title}>{props.title}</h1>
       {(props.home) && 
       <h1 className={styles.subtitle}>That Gets Result</h1>
       }
      <h3 className={styles.desc}>{props.desc}</h3>
      {(props.home) && 
       <div className={styles.callToAction}>
       <Button />
       </div>
       }
      
       </div>
       <SideBar />
      </div>
    </div>
  )
}

export default HeroSection