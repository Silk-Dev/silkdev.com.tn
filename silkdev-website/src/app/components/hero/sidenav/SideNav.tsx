import React from 'react'
import Image from 'next/image'
import linkedIn from '@/app/public/img/linkedIn.svg'
import facebook from '@/app/public/img/facebook.svg'
import instagram from '@/app/public/img/instagram.svg'
import styles from './sidenav.module.scss'
const SideNar = () => {
  return (
    <div className={styles.navList}>
       <h3 className={styles.cliqued}>Home</h3>
       <h3 className={styles.link}>About</h3>
            <h3 className={styles.link}>Services</h3>
            <h3 className={styles.link}>Projects</h3>
            <h3 className={styles.link}>Blog</h3>
            <h3 className={styles.link}>Contact</h3> 
            <div className={styles.contact}>
            <Image alt='' src={linkedIn}></Image>
            <Image alt='' src={facebook}></Image>
            <Image alt='' src={instagram}></Image>
            </div>
    </div>
  )
}

export default SideNar