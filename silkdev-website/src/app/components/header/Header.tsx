import React from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import logo from '@/app/public/img/Image.svg'
import navIcon from '@/app/public/img/Vector.svg'
const Header = () => {
  return (
    <div className={styles.header}>
        <div>
            <Image alt='' src={logo} className={styles.logo}></Image>
        </div>
        <div className={styles.nav}>
            <h3 className={styles.link}>About Us</h3>
            <h3 className={styles.link}>Services</h3>
            <h3 className={styles.link}>Projects</h3>
            <h3 className={styles.link}>Blog</h3>
            <h3 className={styles.link}>Contact</h3>
        </div>
        <div>
        <Image alt='' src={navIcon} className={styles.icon}></Image>
            </div>
    </div>
  )
}

export default Header