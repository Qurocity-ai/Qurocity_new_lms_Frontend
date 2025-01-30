import React from "react";
import styles from "./Booking.module.css"; // Create a separate CSS file for styling

const Booking = ({ teacher, onClose }) => {
    return (
        <div className={styles.bookingContainer}>
            <iframe
                src={`https://cal.com/${teacher.name.toLowerCase().replace(" ", "-")}`}
                // src={`https://cal.com/yogesh-kushawah`}
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
