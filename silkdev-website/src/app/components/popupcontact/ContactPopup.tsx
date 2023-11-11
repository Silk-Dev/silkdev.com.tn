"use client"
import React, { useState, useEffect }  from "react";
import styles from "./contactPopup.module.scss";
import close from "../../public/img/close_FILL0_wght400_GRAD0_opsz24.svg";
import send from "../../public/img/send_FILL0_wght400_GRAD0_opsz24.svg";
import Image from "next/image";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from '@/app/config';
// import { Form, ConfigProvider, Input, Space, Steps, theme } from 'antd';

const db = getFirestore(app);

interface ContactPopupProps {
  onClose: () => void; 
}
// const { TextArea } = Input;

const ContactPopup: React.FC<ContactPopupProps> = ({ onClose }) => {

  // const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState(false);
  const [viewForm, setViewForm] = useState(true);
  const [isError, setError] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [option, setOptions] = useState(0);
  const [step, setStep] = useState('one');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    msg: '',
  });
  const [selectedButton, setSelectedButton] = useState(null);
  
  const steps = [
    {
      title: 'First',
      content: 'first-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,

    }));
  };

  const handleSubmit= async () => {
    try {
      setSubmitted(true);
      setTimeout(() => {
        setViewForm(false);
      }, 2000)
      const colRef = collection(db, "formData");
      const docRef = await addDoc(colRef, formData);
      return docRef;
      

    } catch (error) {
      throw error;
    }
    
    // if (option > 0) {
    //   setStep('three');
    //   setCurrent(current + 1);

    // } else {
    //   // add a better way to handle this
    //   // console.log('set option please', option)
    // }
  };

  const handleButtonClick = (buttonId: any, selectedOption: any) => {
    setOptions(buttonId)
    setFormData((prevData) => ({
      ...prevData,
      project: selectedOption,

    }));
    setSelectedButton(buttonId);
  };
  console.log('ffffff',formData);
  
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
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.emailcolumn}>
                <h1 className={styles.textemail}>Email</h1>
                <input
                  className={styles.inputname}
                  placeholder="John@apple.com"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
        <h1 className={styles.textetitle}>I'm interested in...</h1>
        <div className={styles.inputsrow}>
          <input
          value={formData.project}
          id='1'
          name="project"
          placeholder="Showcase Website"
          className={selectedButton === 1 ? styles.inputsubmit : styles.inputsubmit}
          onChange={handleChange}
          onClick={() => handleButtonClick(1, "showcase")}
            type="submit"
          />
          <input
            value="commerce"
            name="project"
            placeholder="E-commerce Website"
            onChange={handleChange}
            className={selectedButton === 2 ? styles.inputsubmit : styles.inputsubmit}
            onClick={() => handleButtonClick(2, "commerce")}
            
          />E-commerce website
          <input
            value="branding"
            name="project"
            onChange={handleChange}
            className={selectedButton === 3 ? styles.inputsubmit : styles.inputsubmit}
            onClick={() => handleButtonClick(2, "branding")}
          />Brand consultation service
        </div>
        <h1 className={styles.h3}>Tell us more about your project</h1>
        <textarea
            className={styles.textarea}
            rows={6} 
            placeholder="Something about your great idea"
            maxLength={255}
            name="msg"
            value={formData.msg}
            onChange={handleChange}
        />
        {!isSubmitted &&
        <button className={styles.inputsend} 
        type="submit"        
        value={formData.project}
        onChange={handleChange}
        onClick={handleSubmit}
        disabled={!submittable}
        style={{
          cursor: submittable ? 'pointer' : 'not-allowed', fontSize: "18px", fontWeight: "500",marginTop:"15px"

        }}
        >
          <div className={styles.buttondivrow}>
            <Image className={styles.iconsend} src={send} alt="" />
            <span className={styles.textsend}>send</span>
          </div>
        </button>
 }
        {isSubmitted && 
          <button  type="button" className={styles.submit} style={{marginBottom:"50px"}}>
          <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
          </svg>
          Loading...
      </button>
          }
      </div>
    </div>
  );
};

export default ContactPopup;
