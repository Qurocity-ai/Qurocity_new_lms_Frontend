import React from "react";
import styles from "./Language.module.css";

const Language = () => {
  return (
    <div className={styles.languagePage}>
      {/* <h1 className={styles.title}>Languages</h1> */}
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.flag}>
            <img src="./assets/England.jpg"></img>
          </div>
          <span className={styles.name}>English</span>
        </div>
        <div className={styles.card}>
        <div className={styles.flag}>
            <img src="./assets/Spain.jpg"></img>
          </div>
          <span className={styles.name}>Spanish</span>
        </div>
        <div className={styles.card}>
        <div className={styles.flag}>
            <img src="./assets/China.jpg"></img>
          </div>
          <span className={styles.name}>Mandarin</span>
        </div>
        <div className={styles.card}>
        <div className={styles.flag}>
            <img src="./assets/French.jpg"></img>
          </div>
          <span className={styles.name}>French</span>
        </div>
        <div className={styles.card}>
        <div className={styles.flag}>
            <img src="./assets/Japan.jpg"></img>
          </div>
          <span className={styles.name}>Japanese</span>
        </div>
        <div className={styles.card}>
        <div className={styles.flag}>
            <img src="./assets/Korea.jpg"></img>
          </div>
          <span className={styles.name}>Korean</span>
        </div>
        <div className={styles.card}>
        <div className={styles.flag}>
            <img src="./assets/German.jpg"></img>
          </div>
          <span className={styles.name}>German</span>
        </div>
      </div>
    </div>
  );
};

export default Language;
