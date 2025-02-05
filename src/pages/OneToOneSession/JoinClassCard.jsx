import React from "react";
import styles from "./JoinClassCard.module.css";

const JoinClassCard = ({ teacherName, meetLink }) => {
    return (
        <div className={styles.joinClassContainer}>
            <h2 className={styles.title}>Your Scheduled Session</h2>
            <p className={styles.teacherName}>Instructor: {teacherName}</p>
            <button
                className={styles.joinButton}
                onClick={() => window.open(meetLink, "_blank")}
            >
                Join Class
            </button>
        </div>
    );
};

export default JoinClassCard;
