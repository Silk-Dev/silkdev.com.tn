"use client";
import React from "react";
import styles from "./OurServices.module.scss";
import Image from "next/image";
import img1 from "../../../../public/img/programmation.png";
import img2 from "../../../../public/img/marketing.png";
import img3 from "../../../../public/img/commerce.png";
const OurServices = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.containerh1}>Our Services</h1>
        <p className={styles.containerp}>
          As a tight-knit team of experts, we create
          <br />
          memorable and emotional websites, digital
          <br />
          experiences, and native apps.
        </p>
        <div className={styles.desktop}>
          <div className={styles.cardscontainer}>
            <div className={styles.card}>
              <Image
                className={`${styles.cardimg} ${styles["black-overlay"]}`}
                src={img1}
                alt=""
              />
              <div className={styles["card-content"]}>
                <h2 className={styles.servTitle}>Web developement</h2>
                <p
                  className={styles.hoverText}
                  style={{ position: "absolute", bottom: "0px" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere unde iure numquam praesentium nemo laudantium cum sunt
                  molestias aliquid ipsa ad autem ducimus illum nesciunt
                  voluptatibus, dolor odit quos veritatis?
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                className={`${styles.cardimg} ${styles["black-overlay"]}`}
                src={img3}
                alt=""
              />
              <div className={styles["card-content"]}>
                <h2 className={styles.servTitle}>E-commerce Website</h2>
                <p
                  className={styles.hoverText}
                  style={{ position: "absolute", bottom: "0px" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere unde iure numquam praesentium nemo laudantium cum sunt
                  molestias aliquid ipsa ad autem ducimus illum nesciunt
                  voluptatibus, dolor odit quos veritatis?
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                className={`${styles.cardimg} ${styles["black-overlay"]}`}
                src={img2}
                alt=""
              />
              <div className={styles["card-content"]}>
                <h2 className={styles.servTitle}>Brand Consultation</h2>
                <p
                  className={styles.hoverText}
                  style={{ position: "absolute", bottom: "0px" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere unde iure numquam praesentium nemo laudantium cum sunt
                  molestias aliquid ipsa ad autem ducimus illum nesciunt
                  voluptatibus, dolor odit quos veritatis?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobile}>
          <div className={styles.cardscontainer}>
            <div className={styles.card}>
              <Image
                className={`${styles.cardimg} ${styles["black-overlay"]}`}
                src={img1}
                alt=""
              />
              <div className={styles["card-content"]}>
                <h2 className={styles.servTitle}>Web developement</h2>
                <p
                  className={styles.hoverText}
                  style={{ position: "absolute", bottom: "0px" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere unde iure numquam praesentium nemo laudantium cum sunt
                  molestias aliquid ipsa ad autem ducimus illum nesciunt
                  voluptatibus, dolor odit quos veritatis?
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                className={`${styles.cardimg} ${styles["black-overlay"]}`}
                src={img3}
                alt=""
              />
              <div className={styles["card-content"]}>
                <h2 className={styles.servTitle}>E-commerce Website</h2>
                <p
                  className={styles.hoverText}
                  style={{ position: "absolute", bottom: "0px" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere unde iure numquam praesentium nemo laudantium cum sunt
                  molestias aliquid ipsa ad autem ducimus illum nesciunt
                  voluptatibus, dolor odit quos veritatis?
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                className={`${styles.cardimg} ${styles["black-overlay"]}`}
                src={img2}
                alt=""
              />
              <div className={styles["card-content"]}>
                <h2 className={styles.servTitle}>Brand Consultation</h2>
                <p
                  className={styles.hoverText}
                  style={{ position: "absolute", bottom: "0px" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere unde iure numquam praesentium nemo laudantium cum sunt
                  molestias aliquid ipsa ad autem ducimus illum nesciunt
                  voluptatibus, dolor odit quos veritatis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
