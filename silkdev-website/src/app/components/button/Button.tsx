import React from 'react'
import styles from './button.module.scss'
import Image from 'next/image'
import arrow from '@/app/public/img/arrow.svg'
const Button = () => {
  return (
    <div className={styles.btn}>
        <p>Contact Us</p>
        <Image alt='' src={arrow}></Image>
    </div>
  )
}

export default Button