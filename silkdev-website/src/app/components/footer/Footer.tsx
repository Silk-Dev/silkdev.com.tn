import React from 'react'
import styles from'./footer.module.scss'
import Image from 'next/image'
import logo from '../../../../public/img/logo.png'
import facebook from '../../../../public/svg/facebook.svg'
import insta from '../../../../public/svg/insta.svg'
import tweeter from '../../../../public/svg/tweeter.svg'
import youtube from  '../../../../public/svg/youtube.svg'
const Footer = () => {
  return (
    <div className={styles.body}>
      <div className={styles.main}>
      <div>
       <Image src={logo}alt=""/>
        
      </div>
      <div className={styles.linkscolumn}>
      <h1 className={styles.h1}>Links</h1>
        
      <a href="#"className={styles.a}>About Us</a>
      <a href="#" className={styles.a}>Services</a>
      <a href="#" className={styles.a}>Projects</a>
      <a href="#" className={styles.a}>Blog</a>
      <a href="#" className={styles.a}>Contact Us</a>
        
      </div>
      <div className={styles.contactcolumn}>
      <h1 className={styles.h1}>Contact Us</h1>
      <div className={styles.contactcolumna}>
      
      <div className={styles.contactrow1}>
      <a href="#" className={styles.a}  >
      <span >Phone :</span>
      <span >123-456-7890</span>
      </a>
      </div> 
      
      <div className={styles.contactrow2}>
      <a className={styles.a} href="#"  >
      <span >Email :</span>
      <span >silkdev.dev@gmail.com</span>
      </a>
      </div>
        </div>
      </div>
      <div className={styles.socialcolumn}>
      <h1 className={styles.h1} >Social</h1>  
      <div className={styles.icons}>
      <Image src={facebook}alt=""/>
      <Image src={insta}alt=""/>
      <Image src={tweeter}alt=""/>
      <Image src={youtube}alt=""/>
      </div>
        
      </div>

      </div>
    </div>
  )
}

export default Footer
