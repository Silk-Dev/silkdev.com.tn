import React from 'react'
import services from '../../public/assets/servicedesc'
import Servicedesc from './Servicedesc'
import styles from './servicedesc.module.scss'
const servicesdesc = () => {
  
  return (
    <div className={styles.background}>
      <Servicedesc services={services} />  
    </div>
  )
}

export default servicesdesc
