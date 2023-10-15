import React, { useState } from 'react'
import styles from './heroSection.module.scss'
import Header from '../header/Header'
import Button from '../button/Button'
import SideNar from './sidenav/SideNav'
const HeroSection = (props:any) => {
  return (
      <div className={styles.heroSection}>
      <Header navbarToggle={props.navbarToggle}/> 
      <div className={styles.inline}>
      <div className={styles.content}>
      <h1 className={styles.title}>{props.title}</h1>
       {(props.home) && 
       <h1 className={styles.subtitle}>That Gets Result</h1>
       }
      <h3 className={styles.desc} style={{marginLeft : props.home ? "120px" : "0" }}>{props.desc}</h3>
      {(props.home) && 
       <div className={styles.callToAction}>
       <Button />
       </div>
       }
      
       </div>
       <SideNar />
      </div>
    </div>
  )
}

export default HeroSection