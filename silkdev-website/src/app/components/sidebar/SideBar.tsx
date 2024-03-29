"use client";
import React, { useState } from 'react';
import styles from "./sidebar.module.scss";
import Image from 'next/image'
import Link from "next/link"
import svg from '../../../../public/svg/close_FILL0_wght400_GRAD0_opsz24.svg'
import logo from "../../../../public/img/logo.png"
import { motion } from "framer-motion"
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}
const SideBar = (props:any) => {
  const [show,setShow] = useState(true)
  return (
    <div
    className={styles.backgroundSidebar}>
      <div className={styles.header}>
     
      <Image src={logo} alt="logo" className={styles.logo} />

       <div className={styles.closeIcon} onClick={()=>{setShow(false);props.closeBtn(show);}}>
          <Image src={svg} alt="svg" />
        </div>
      </div>
      <div className={styles.centeredContainer}>
        <div className={styles.sidenav}>
          <a href="#">About Us</a>
          <Link href={'/services'}>Services</Link>
          <a href="#">Projects</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </div>
      </div>
  );
};

export default SideBar;