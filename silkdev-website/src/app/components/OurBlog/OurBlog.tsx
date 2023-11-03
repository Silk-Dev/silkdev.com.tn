"use client";
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "./ourblog.module.scss";
import Image from 'next/image'
import Blog from './Blog';
import svg from '../../../../public/svg/mode_edit_white_24dp.svg'
import blogs from '../../public/assets/blogs'

const OurServices = () => {
return (
      <div className={styles.background}>
    <div className={styles.containerrow}>
     <div className={styles.container}>
      <h1 className={styles.containerh1}>Our Blog</h1>
      <p className={styles.containerp}>
      As a tight-knit team of experts,<br/> we create memorable and<br/> emotional websites, digital<br/> experiences, and native apps.
      </p>
      </div>
     <div id={styles.containercard}>
<div className={styles.containercardrow}>
<Carousel autoPlay={true} infiniteLoop={true} interval={2000}>
      {blogs.map((blog, index) => (
        <div key={index}>
        <Blog img={blog.img} 
              title={blog.title} 
              description={blog.description}
              avatar={blog.avatar}
              userName={blog.user_name}
              date={blog.date}
              />
              </div>
))}
</Carousel>
</div>
</div>
</div>  
</div>
      
  );
};

export default OurServices;
