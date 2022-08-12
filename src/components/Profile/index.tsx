import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./styles.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/fariapv.png" alt="Pedro Dias" />
      <div>
        <strong>Pedro Dias</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
