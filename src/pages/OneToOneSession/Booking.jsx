import React from "react";
import styles from "./Booking.module.css"; 

const Booking = ({ teacher, onClose }) => {
    return (
        <div className={styles.bookingContainer}>
            <iframe
                src={"https://yogeshkushawah.dayschedule.com/"}
                className={styles.bookingIframe}
                title={`Booking with ${teacher.name}`}
            />
            <button className={styles.closeButton} onClick={onClose}>
                Close
            </button>
        </div>
    );
};

export default Booking;
