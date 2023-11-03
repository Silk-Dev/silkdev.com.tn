import React, { useState } from "react";
import Image from "next/image";
import styles from "./contact.module.scss";
import flech from "../../../../public/svg/flech.svg";
const Contact = (props: any) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Let’s Create Something Amazing</h1>
        <button className={styles.button}>
          <div className={styles.contentbtn}>
            <span className={styles.spanp}>CONTACT US</span>
            <span className={styles.spanicon}>
              <Image className={styles.spanicon} src={flech} alt=""></Image>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Contact;
