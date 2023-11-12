"use client";
import React from 'react';
import styles from "./OurServices.module.scss";
import Image from 'next/image'
import img1 from '../../../../public/img/program.jpg'
import img2 from '../../../../public/img/marketing.png'
import img3 from '../../../../public/img/commerce.png'

const serviceData = [
  {
    title: 'Web development',
    image: img1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere unde iure numquam praesentium nemo laudantium cum sunt molestias',
  },
  {
    title: 'E-commerce Website',
    image: img3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere unde iure numquam praesentium nemo laudantium cum sunt molestias',
  },
  {
    title: 'Brand Consultation',
    image: img2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere unde iure numquam praesentium nemo laudantium cum sunt molestias',
  },
];

const OurServices = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.containerh1}>Our Services</h1>
      <p className={styles.containerp}>
        As a tight-knit team of experts, we create<br/>
        memorable and emotional websites, digital<br/>
        experiences, and native apps.
      </p>

      <div className={styles.cardscontainer}>
        {serviceData.map((service, index) => (
          <div className={styles.card} key={index}>
            <Image
              className={`${styles.cardimg} ${styles['black-overlay']}`}
              src={service.image}
              alt=""
            />
            <div className={styles['card-content']}>
              <h2 className={styles.servTitle} >{service.title}</h2>
              <p className={styles.hoverText} style={{ position: "absolute", bottom: "0px" }}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;