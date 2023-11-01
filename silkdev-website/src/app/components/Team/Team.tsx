import React from "react";
import styles from "./Team.module.scss";
import insta from "../../../../public/svg/blackinsta.svg";
import fb from "../../../../public/svg/blackfb.svg";
import linkedin from "../../../../public/svg/linkedin.svg";
import Image from "next/image";
const Team = (props: any) => {
  return (
    <>
      <h1 className={styles.title}>Meet Our Team</h1>
      <div className={styles.cardsrow}>
        {props.teams.map((team: any) => (
          <div className={styles.card}>
            <div className={styles.containercard}>
              <Image alt="" src={team.img} />
              <h1 className={styles.name}>{team.name}</h1>
              <p className={styles.job}>{team.job}</p>
              <div className={styles.containericons}>
                <Image className={styles.icon} src={linkedin} alt="" />
                <Image className={styles.icon} src={insta} alt="" />
                <Image className={styles.icon} src={fb} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
