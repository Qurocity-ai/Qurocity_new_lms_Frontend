import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Language.module.css";

const Language = () => {
  const navigate = useNavigate();

  const handleLanguageClick = (language) => {
    // Navigate to the next page with the selected language
    navigate("/lessons", { state: { language } });
  };

  return (
    <div className={styles.languagePage}>
      <div className={styles.cardsContainer}>
        <div className={styles.card} onClick={() => handleLanguageClick("english")}>
          <div className={styles.flag}>
            <img src="./assets/England.jpg" alt="English" />
          </div>
          <span className={styles.name}>English</span>
        </div>
        <div className={styles.card} onClick={() => handleLanguageClick("spanish")}>
          <div className={styles.flag}>
            <img src="./assets/Spain.jpg" alt="Spanish" />
          </div>
          <span className={styles.name}>Spanish</span>
        </div>
        <div className={styles.card} onClick={() => handleLanguageClick("mandarin")}>
          <div className={styles.flag}>
            <img src="./assets/China.jpg" alt="Mandarin" />
          </div>
          <span className={styles.name}>Mandarin</span>
        </div>
        <div className={styles.card} onClick={() => handleLanguageClick("french")}>
          <div className={styles.flag}>
            <img src="./assets/French.jpg" alt="French" />
          </div>
          <span className={styles.name}>French</span>
        </div>
        <div className={styles.card} onClick={() => handleLanguageClick("japanese")}>
          <div className={styles.flag}>
            <img src="./assets/Japan.jpg" alt="Japanese" />
          </div>
          <span className={styles.name}>Japanese</span>
        </div>
        <div className={styles.card} onClick={() => handleLanguageClick("korean")}>
          <div className={styles.flag}>
            <img src="./assets/Korea.jpg" alt="Korean" />
          </div>
          <span className={styles.name}>Korean</span>
        </div>
        <div className={styles.card} onClick={() => handleLanguageClick("german")}>
          <div className={styles.flag}>
            <img src="./assets/German.jpg" alt="German" />
          </div>
          <span className={styles.name}>German</span>
        </div>
      </div>
    </div>
  );
};

export default Language;
