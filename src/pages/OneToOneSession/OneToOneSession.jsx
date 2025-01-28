import React, { useState, useEffect } from "react";
import styles from "./OneToOneSession.module.css";

const API_URL = ""; // Leave empty for now, update when API is ready

const OneToOneSession = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (API_URL) {
      fetchTeachersFromAPI();
    } else {
      setTeachers(getMockData());
    }
  }, []);

  const fetchTeachersFromAPI = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setTeachers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getMockData = () => [
    { id: 1, name: "Shubham Paypare", language: "French", level: "B2", experience: 4, price: 500, image: "./assets/Untitled design.png" },
    { id: 2, name: "Teacher 1", language: "Spanish", level: "C1", experience: 6, price: 500, image: "./assets/Untitled design.png" },
    { id: 3, name: "Teacher 2", language: "English", level: "A1", experience: 2, price: 500, image: "./assets/Untitled design.png" },
    { id: 4, name: "Teacher 3", language: "German", level: "B1", experience: 3, price: 500, image: "./assets/Untitled design.png" },
  ];

  return (
    <div className={styles.oneOnOneContainer}>
      {/* <h2 className={styles.heading}>1 on 1 Session</h2> */}

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className={styles.cardGrid}>
        {teachers.map((teacher) => (
          <div key={teacher.id} className={styles.card}>
            <img src={teacher.image} alt={teacher.name} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardName}>{teacher.name}</h3>
              <p className={styles.cardDetail}>Language: {teacher.language}</p>
              <p className={styles.cardDetail}>Level: {teacher.level}</p>
              <p className={styles.cardDetail}>Experience: {teacher.experience} years</p>
              <button className={styles.bookButton}>
                Book Now: {teacher.price}rs
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneToOneSession;
