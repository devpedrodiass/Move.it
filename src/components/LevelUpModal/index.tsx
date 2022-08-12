import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./styles.module.css";

interface LevelUpModalProps {
  closeLevelUpModal: () => void;
}

export function LevelUpModal({ closeLevelUpModal }: LevelUpModalProps) {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Congratulations!</strong>
        <p>Level up</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close Modal Button" />
        </button>
      </div>
    </div>
  );
}
