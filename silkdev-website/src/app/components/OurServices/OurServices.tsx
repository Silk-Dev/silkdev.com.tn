"use client";
import React from 'react';
import styles from "./OurServices.module.scss";
import Image from 'next/image'
import img1 from '../../../../public/img/programmation.png'
import img2 from '../../../../public/img/marketing.png'
import img3 from '../../../../public/img/commerce.png'
const OurServices = () => {

  return (
    <div>
<div className={styles.container}>
      <h1 className={styles.containerh1}>Our Services</h1>
      <p className={styles.containerp}>
        As a tight-knit team of experts, we create<br/>
        memorable and emotional websites, digital<br/>
        experiences, and native apps.
      </p>
    
        <div className={styles.cardscontainer}>
      <div className={styles.card}>
        
        <Image className={`${styles.cardimg} ${styles['black-overlay']}`}
          src={img1}
          alt=""
        />
        <div className={styles['card-content']}>
          <h2>Web developement</h2>
          <p>dfghj</p>
        </div>
      </div>
      <div className={styles.card}>
        
      <Image className={`${styles.cardimg} ${styles['black-overlay']}`}
          src={img3}
          alt=""
        />
        <div className={styles['card-content']}>
          <h2>E-commerce Website</h2>
          {/* <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo
            laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut
            hic.
          </p> */}
          {/* <a href="#" className={styles.button}>
            Find out more
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a> */}
        </div>
      </div>
      <div className={styles.card}>
        
      <Image className={`${styles.cardimg} ${styles['black-overlay']}`}
          src={img2}
          alt=""
        />
        <div className={styles['card-content']}>
          <h2>Brand Consultation</h2>
          {/* <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo
            laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut
            hic.
          </p> */}
          {/* <a href="#" className={styles.button}>
            Find out more
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a> */}
        </div>
      </div>
  
    </div>



      </div>
      
      </div>
  );
};

export default OurServices;
