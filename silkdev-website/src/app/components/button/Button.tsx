import React, { useState } from "react";
import styles from "./button.module.scss";
import Image from "next/image";
import arrow from "@/app/public/img/arrow.svg";
import ContactPopup from "../popupcontact/ContactPopup";
const Button = (props: any) => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const openContactPopup = () => {
    setShowContactPopup(true);
  };

  const closeContactPopup = () => {
    setShowContactPopup(false);
  };
  return (
    <>
      <div className={styles.btn} onClick={openContactPopup}>
        <p>Contact Us</p>
        <Image alt="" src={arrow}></Image>
      </div>
      {showContactPopup && <ContactPopup onClose={closeContactPopup} />}
    </>
  );
};

export default Button;
