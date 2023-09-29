import React, { useState } from 'react'
import Image from 'next/image'
import styles from './portfolio.module.scss'
import projectImg from '@/app/public/img/project.svg'
const Project = (props:any) => {
  const [show,setShow] = useState(false)
  return (
    <div>
      
      <div className={styles.projectContainer} style={{backgroundColor:show? "rgba(217, 217, 217, 0.05)" :"none",marginTop:show? "30px" :"0"}}>
      {!show &&
        <div>
        <Image className={styles.img} alt='' src={projectImg} onClick={()=>{setShow(true)}}></Image>
        <h3 className={styles.projTitle}>{props.title}</h3>
        </div>
      }
      
      {show && 
      <div>
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
      </div>}
      </div>
    </div>
  )
}

export default Project