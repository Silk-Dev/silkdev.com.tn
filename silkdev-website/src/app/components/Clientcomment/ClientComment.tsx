import React, { useState } from 'react';

import { AnimatePresence, motion } from "framer-motion";
import svg from '../../../../public/img/avatar.png'
import Image from 'next/image'
import styles from'./client.module.scss'
type PositionType = "left" | "center" | "right";
const ClientComment = (props:any) => {
  const [activeIndex, setActiveIndex] = useState([0, 0]);
  const projects = [
    {
      id: 1,
      title: "Agnes Remi",
      job:"Back-end developer at MyDodow",
      img: "../../public/img/Ellipse.svg",
      width:10,
      height:3,
      description:
        "<< Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! >>"
    },
    {
        id: 2,
        title: "Agnes Remi",
        job:"Back-end developer at MyDodow",
        img: "../../public/img/Ellipse.svg",
        width:10,
        height:3,
        description:
          "<< Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! >>"
      },
      {
        id: 3,
        title: "Agnes Remi",
        job:"Back-end developer at MyDodow",
        img: "../../public/img/Ellipse.svg",
        width:10,
        height:3,
        description:
          "<< Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! >>"
      },{
        id: 4,
        title: "Agnes Remi",
        job:"Back-end developer at MyDodow",
        img: "../../public/img/Ellipse.svg",
        width:10, height:3,
        description:
          "<< Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! >>"
      },
      {
          id: 5,
          title: "Agnes Remi",
          job:"Back-end developer at MyDodow",
          img: "../../public/img/Ellipse.svg",
          width:10, height:3,
          description:
            "<< Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! >>"
        },
        {
          id:6,
          title: "Agnes Remi",
          job:"Back-end developer at MyDodow",
          img: "../../public/img/Ellipse.svg",
          width:10, height:3,
          description:
            "<< Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising! >>"
        }
    
  ];

  const indexInArrayScope: number =
    ((activeIndex[0] % projects.length) + projects.length) % projects.length;

    const visibleProjects = [...projects, ...projects].slice(
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

    <h1 className={styles.h}>{project.title}</h1>
    <p className={styles.p}>{project.job}</p>
    <p className={styles.p2}>{project.description}</p>
   </div>
    {/* <p>{project.description}</p> */}
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
