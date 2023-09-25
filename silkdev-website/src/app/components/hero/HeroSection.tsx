import React from 'react'
import styles from './heroSection.module.scss'
import Header from '../header/Header'
import Button from '../button/Button'
import SideBar from './sidenav/SideNav'
const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <Header />
      <div className={styles.inline}>
      
      <div className={styles.content}>
      <h1 className={styles.title}>The Digital Agency</h1>
      <h1 className={styles.subtitle}>That Gets Result</h1>
      <h3 className={styles.desc}>We build digital experiences that wow <br></br>
       customers and drive results.</h3>
      <div className={styles.callToAction}>
      <Button />
      </div>
       </div>
       <SideBar />
      </div>
    </div>
  )
}

export default HeroSection