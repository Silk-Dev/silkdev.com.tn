import React, { useState } from 'react';

import { AnimatePresence, motion } from "framer-motion";
import svg from '../../../../public/img/avatar.png'
import Image from 'next/image'
import styles from'./client.module.scss'
import comments from '../../public/assets/comments'
import img from '@/app/public/img/Ellipse.svg'
type PositionType = "left" | "center" | "right";
const ClientComment = (props:any) => {
  const [activeIndex, setActiveIndex] = useState([0, 0]);
  

  const indexInArrayScope: number =
    ((activeIndex[0] % comments.length) + comments.length) % comments.length;

    const visibleProjects = [...comments, ...comments].slice(
      indexInArrayScope,
      indexInArrayScope + 3
    );

  const handleClick = (newDirection: number) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  const variants = {
    enter: ({ direction }: { direction: number }) => {
      return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
    },
    center: ({
      position,
      direction,
    }: {
      position: () => PositionType;
      direction: number;
    }) => {
      return {
        scale: position() === "center" ? 1 : 0.7,
        x: 0,
        zIndex: getZIndex({ position, direction }),
        opacity: 1,
      };
    },
    exit: ({ direction }: { direction: number }) => {
      return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
    },
  };

  function getZIndex({
    position,
    direction,
  }: {
    position: () => PositionType;
    direction: number;
  }) {
    const indexes: { [key in PositionType]: number } = {
      left: direction > 0 ? 2 : 1,
      center: 3,
      right: direction > 0 ? 1 : 2,
    };
    return indexes[position()];
  }

  return (
    <div className={styles.main} >
    <div className={styles.mainwrapper}>
      <h1 className={styles.containerh1}>What Our Client Said </h1>
      <div className={styles.wrapper}>
        <AnimatePresence mode="popLayout" initial={false}>
        {visibleProjects.map((project, index) => (
  <motion.div
    className={styles.card}
    key={project.id}
    layout
    custom={{
      direction: activeIndex[1],
      position: () => {
        if (project === visibleProjects[0]) {
          return "left";
        } else if (project === visibleProjects[1]) {
          return "center";
        } else {
          return "right";
        }
      },
    }}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 1 }}
  >
   <div className={styles.cardcontent}>
   <div className={styles.divrow}>
    <Image className={styles.avatar} 
          src={project.img}
          alt=""
        />
         <div className={styles.divcolumn}>
    <h1 className={styles.h}>{project.title}</h1>
    <p className={styles.p}>{project.job}</p>
    
    
    <p className={styles.p2}>{project.description}</p>
   </div></div></div>
   
  </motion.div>
))}

        </AnimatePresence>
      </div>
      <div className={styles.containerbutton}>
        <motion.button className={styles.button}
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(-1)}
        >
          ◀︎
        </motion.button>
        <motion.button className={styles.button} whileTap={{ scale: 0.8 }} onClick={() => handleClick(1)}>
          ▶︎
        </motion.button>
      </div>
      
    </div></div>
      );
    }


export default ClientComment
