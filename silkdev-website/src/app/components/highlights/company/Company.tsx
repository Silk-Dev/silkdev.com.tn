import React, { useState } from 'react'
import styles from './company.module.scss'
const Company = () => {
    
  const [current,setCurrent] = useState('story');
  return (
    <div className={styles.highlights}>
        <div className={styles.options}>
            <button className={styles.btn} onClick={()=>{setCurrent('story')}}>Story</button>
            <button className={styles.btn} onClick={()=>{setCurrent('vision')}}>Vision</button>
            <button className={styles.btn} onClick={()=>{setCurrent('process')}}>Process</button>
        </div>
        <div >
            {current == 'story' && 
            <p className={styles.content}>
            <span className={styles.text}><span className={styles.year}>2021</span> - We are a team of experienced creatives with an entrepreneurial mindset. We are constantly rethinking the future by creating innovative products .</span> <br></br>
            <span className={styles.text}><span className={styles.year}>2021</span> - We are a team of experienced creatives with an entrepreneurial mindset. We are constantly rethinking the future by creating innovative products .</span> <br></br>
            <span className={styles.text}><span className={styles.year}>2021</span> - We are a team of experienced creatives with an entrepreneurial mindset. We are constantly rethinking the future by creating innovative products .</span> <br></br>
            

            </p>}
            {current == 'vision' &&
            <p className={styles.content}>
            We are a team of experienced creatives with an entrepreneurial mindset. We are constantly rethinking the future by creating innovative products and services that solve real-world problems.e results.
            </p>
             }
            {current == 'process' &&
            <p className={styles.content}>
             Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! 
            </p>
}
        </div>
    </div>
  )
}

export default Company