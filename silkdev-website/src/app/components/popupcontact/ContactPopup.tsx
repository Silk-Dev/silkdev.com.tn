import React from "react";
import styles from "./contactPopup.module.scss";
import close from "../../public/img/close_FILL0_wght400_GRAD0_opsz24.svg";
import send from "../../public/img/send_FILL0_wght400_GRAD0_opsz24.svg";
import Image from "next/image";
interface ContactPopupProps {
  onClose: () => void; // Define the type for the onClose prop
}
const ContactPopup: React.FC<ContactPopupProps> = ({ onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <div className={styles.headercontainer}>
          <h2 className={styles.h2}>Let's Talk About Your Needs</h2>
          <button className={styles.close} onClick={onClose}>
            <Image src={close} alt="" />
          </button>
        </div>
        <div className={styles.formcontainer}>
          <form>
            <div className={styles.containerrow}>
              <div className={styles.namecolumn}>
                <h1 className={styles.textname}>Name & company</h1>
                <input
                  className={styles.inputname}
                  placeholder="John from Apple"
                  value=""
                />
              </div>
              <div className={styles.emailcolumn}>
                <h1 className={styles.textemail}>Email</h1>
                <input
                  className={styles.inputname}
                  placeholder="John@apple.com"
                  value=""
                />
              </div>
            </div>
          </form>
        </div>
        <h1 className={styles.textetitle}>I'm interested in...</h1>
        <div className={styles.inputsrow}>
          <input
            className={styles.inputsubmit}
            type="submit"
            value="Showcase Website"
          />
          <input
            className={styles.inputsubmit}
            type="submit"
            value="E-commerce website"
          />
          <input
            className={styles.inputsubmit}
            type="submit"
            value="Brand consultation service"
          />
        </div>
        <h1 className={styles.h3}>Tell us more about your project</h1>
        <textarea
          className={styles.textarea}
          placeholder="Something about your great idea"
        />
        <button className={styles.inputsend} type="submit">
          <div className={styles.buttondivrow}>
            <Image className={styles.iconsend} src={send} alt="" />
            <span className={styles.textsend}>send</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;
