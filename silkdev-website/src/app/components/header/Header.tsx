"use client";
import React, { useState } from "react";
import styles from "./header.module.scss";
import { useRouter } from 'next/router'
import Image from "next/image";
import logo from "@/app/public/img/Image.svg";
import navIcon from "@/app/public/img/Vector.svg";
import SideBar from "../sidebar/SideBar";
import ContactPopup from "../popupcontact/ContactPopup";
import Link from "next/link";

const Header = (props: any) => {
  // const router = useRouter();
  const [show, setShow] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const openContactPopup = () => {
    setShowContactPopup(true);
  };

  const closeContactPopup = () => {
    setShowContactPopup(false);
  };
  const toggleSidebar = async () => {
    setShow(!show);
    props.navbarToggle(show);
    console.log("show", show);
  };

  return (
    <div className={styles.header}>
      <Link href="/">
        <div>
        <Image alt="" src={logo} className={styles.logo}></Image>
        </div>
      </Link>
      <div className={styles.nav}>
        <h3 className={styles.link}>About Us</h3>
        <h3 className={styles.link}>Services</h3>
        <h3 className={styles.link}>Projects</h3>
        <h3 className={styles.link}>Blog</h3>
        <h3 className={styles.link} onClick={openContactPopup}>
          Contact
        </h3>
      </div>
      {showContactPopup && <ContactPopup onClose={closeContactPopup} />}
      <div
        onClick={() => {
          toggleSidebar();
        }}
      >
        <Image alt="" src={navIcon} className={styles.icon}></Image>
      </div>
      {show && <SideBar />}
    </div>
  );
};

export default Header;
