import React, { useState } from "react";
import Image from "next/image";
import linkedIn from "@/app/public/img/linkedIn.svg";
import facebook from "@/app/public/img/facebook.svg";
import instagram from "@/app/public/img/instagram.svg";
import styles from "./sidenav.module.scss";
import ContactPopup from "../../popupcontact/ContactPopup";
const SideBar = (props: any) => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const openContactPopup = () => {
    setShowContactPopup(true);
  };

  const closeContactPopup = () => {
    setShowContactPopup(false);
  };
  return (
    <div className={styles.navList}>
      <h3 className={styles.cliqued}>Home</h3>
      <h3 className={styles.link}>About Us</h3>
      <h3 className={styles.link}>Services</h3>
      <h3 className={styles.link}>Projects</h3>
      <h3 className={styles.link}>Blog</h3>
      <h3 className={styles.link} onClick={openContactPopup}>
        Contact
      </h3>
      <div className={styles.contact}>
        <Image alt="" src={linkedIn}></Image>
        <Image alt="" src={facebook}></Image>
        <Image alt="" src={instagram}></Image>
      </div>
      {showContactPopup && <ContactPopup onClose={closeContactPopup} />}
    </div>
  );
};

export default SideBar;
