import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import styles from './portfolio.module.scss'
import projectImg from '@/app/public/img/project.svg'
const Project = (props:any) => {
  const [show,setShow] = useState(false);
  console.log(props.img);
  
  return (
    <div className={styles.projectWrapper} style={{marginTop:(props.id%2==0)? "100px" :"0"}}>
      
      {!show &&
      <div className={styles.projectContainer} >
        <div>
        <Image className={styles.img} alt='#' src={props.img} width={100} height={100} onClick={()=>{setShow(true)}}></Image>
        <h3 className={styles.projTitle}>{props.title}</h3>
        </div>
      </div>
      }
      
      {show && 
      <motion.div
      initial={{ rotateY: 180,opacity:1 }} 
  animate={{ rotateY: 360 }} 
  transition={{ duration: 1 }}
      className={styles.projectContainer} style={{backgroundColor: "rgba(217, 217, 217, 0.05)",marginTop:"30px",height:"450px"}}
    >
        <h3 className={styles.projTitle} style={{textAlign:"start"}}>Shopify</h3>
        <div className={styles.tags}>
          <p className={styles.tag}>E-commerce</p>
          <p className={styles.tag}>React Js</p>
        </div>
        <p className={styles.desc}>As a tight-knit team of experts,
            we create memorable and
            emotional websites, digital
            experiences, and native apps.
            we create memorable and
            emotional websites, digital
            experiences, and native apps.we create memorable and
            emotional websites, digital
            experiences, and native apps.</p>
      </motion.div>}
      </div>
  )
}

export default Project