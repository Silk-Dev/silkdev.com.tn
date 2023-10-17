"use client";
import React, { useState } from 'react';
import styles from "./ourblog.module.scss";
import Image from 'next/image'
import svg from '../../../../public/svg/mode_edit_white_24dp.svg'

const Blog = (props:any) => {
  return (
    <div className={styles.card}>
  <Image className={styles.img} src={props.img} alt="Lago di Braies"/>
   <div className={styles.carddetails}>
   <div className={styles.name}>{props.title}</div>
    <p className={styles.p}>
    {props.description}</p>
<div className={styles.containeravatar}>
    <div className={styles.spaceBetween} >
        <div className={styles.imgCont}>
        <Image src={props.avatar} alt="Avatar" className={styles.avatar}/>
        </div>
    <div className={styles.containeravatarclm}>
    <h1 className={styles.avatarh1}>{props.userName}</h1>
    <p className={styles.avatarp}>{props.date}</p>
    </div>
    </div> 
    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 19.9996C10 19.6681 10.1317 19.3502 10.3661 19.1157C10.6005 18.8813 10.9185 18.7496 11.25 18.7496H25.7325L20.365 13.3846C20.1303 13.1499 19.9984 12.8316 19.9984 12.4996C19.9984 12.1677 20.1303 11.8493 20.365 11.6146C20.5997 11.3799 20.9181 11.248 21.25 11.248C21.5819 11.248 21.9003 11.3799 22.135 11.6146L29.635 19.1146C29.7514 19.2307 29.8438 19.3687 29.9068 19.5205C29.9698 19.6724 30.0022 19.8352 30.0022 19.9996C30.0022 20.164 29.9698 20.3268 29.9068 20.4787C29.8438 20.6306 29.7514 20.7685 29.635 20.8846L22.135 28.3846C21.9003 28.6193 21.5819 28.7512 21.25 28.7512C20.9181 28.7512 20.5997 28.6193 20.365 28.3846C20.1303 28.1499 19.9984 27.8316 19.9984 27.4996C19.9984 27.1677 20.1303 26.8493 20.365 26.6146L25.7325 21.2496H11.25C10.9185 21.2496 10.6005 21.1179 10.3661 20.8835C10.1317 20.6491 10 20.3311 10 19.9996Z" fill="#8A99B5"/>
</svg>
    </div>
   
  </div>


</div>
  )
}

export default Blog