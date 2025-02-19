import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./JoinClassCard.module.css";

const JoinClassCard = ({ teacherName, meetLink }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.joinClassContainer}>
            <h2 className={styles.title}>Your Scheduled Session</h2>
            <p className={styles.teacherName}>Instructor: {teacherName}</p>
            <div className={styles.buttonContainer}>
                <button
                    className={styles.joinButton}
                    onClick={() => window.open(meetLink, "_blank")}
                >
                    Join Class
                </button>
                <button
                    className={styles.backButton}
                    onClick={() => navigate(-1)} // Navigate to the previous page
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default JoinClassCard;
