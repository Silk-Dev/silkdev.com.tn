import React from "react";
import styles from "./Team.module.scss";
import Team from "./Team";
import teams from "../../public/assets/teams";
const Teams = () => {
  return (
    <div className={styles.background}>
      <Team teams={teams} />
    </div>
  );
};

export default Teams;
