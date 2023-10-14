import React from 'react'
import styles from "./servicedesc.module.scss";

const Servicedesc = (props:any) => {
    
      
  return (
    <>
       {props.services.map((service:any) => (
       <div className={styles.divrow}>
       <h1  className={styles.h1}>{service.title}</h1>
       <p   className={styles.p}>{service.description}</p>
       </div>))}
    </>
  )
}

export default Servicedesc
