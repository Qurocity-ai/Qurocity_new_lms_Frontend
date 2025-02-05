import React, { useState, useEffect } from "react";
import styles from "./OneToOneSession.module.css";
import JoinClassCard from "./JoinClassCard";

const API_URL = ""; // Update when API is ready

const OneToOneSession = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [meetingDetails, setMeetingDetails] = useState(null);


  useEffect(() => {
    if (API_URL) {
      fetchTeachersFromAPI();
    } else {
      setTeachers(getMockData());
    }

    // Load Razorpay script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);
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
    { id: 1, name: "Yogesh Kushawah", language: "French", level: "B2", experience: 4, price: 500, image: "./assets/Untitled design.png" },
    { id: 2, name: "Harhal", language: "Spanish", level: "C1", experience: 6, price: 500, image: "./assets/Untitled design.png" },
    { id: 3, name: "Shubham", language: "English", level: "A1", experience: 2, price: 500, image: "./assets/Untitled design.png" },
    { id: 4, name: "Sunil", language: "German", level: "B1", experience: 3, price: 500, image: "./assets/Untitled design.png" },
  ];

  // const handlePayment = async (teacher) => {
  //   if (!razorpayLoaded) {
  //     alert("Payment system is still loading. Please try again in a few seconds.");
  //     return;
  //   }

  //   const response = await fetch("http://localhost:5000/create-order", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ amount: teacher.price, teacherId: teacher.id }),
  //   });

  //   const { order } = await response.json();

  //   const options = {
  //     key: "rzp_test_YqGxBBZgaCX9qe",
  //     amount: order.amount,
  //     currency: "INR",
  //     order_id: order.id,
  //     name: "One-to-One Session",
  //     description: `Session with ${teacher.name}`,
  //     handler: async (response) => {
  //       const verifyResponse = await fetch("http://localhost:5000/verify-payment", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ ...response, teacherId: teacher.id }),
  //       });

  //       const { success, meetLink } = await verifyResponse.json();
  //       console.log(success);
  //       console.log(meetLink);
  //       if (success) {
  //         alert(`Payment Successful! Join your session: ${meetLink}`);
  //       } else {
  //         alert("Payment verification failed. Contact support.");
  //       }
  //     },
  //     prefill: { name: "Student", email: "student@example.com", contact: "9876543210" },
  //     theme: { color: "#3399cc" },
  //   };

  //   const razorpayInstance = new window.Razorpay(options);
  //   razorpayInstance.open();
  // };

  const handlePayment = async (teacher) => {
    if (!razorpayLoaded) {
      alert("Payment system is still loading. Please try again in a few seconds.");
      return;
    }

    const response = await fetch("https://razorpaysystem-2.onrender.com/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: teacher.price, teacherId: teacher.id }),
    });

    const { order } = await response.json();

    const options = {
      key: "rzp_test_YqGxBBZgaCX9qe",
      amount: order.amount,
      currency: "INR",
      order_id: order.id,
      name: "One-to-One Session",
      description: `Session with ${teacher.name}`,
      handler: async (response) => {
        const verifyResponse = await fetch("https://razorpaysystem-2.onrender.com/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...response, teacherId: teacher.id }),
        });

        const { success, meetLink } = await verifyResponse.json();

        if (success) {
          setMeetingDetails({ teacherName: teacher.name, meetLink });
        } else {
          alert("Payment verification failed. Contact support.");
        }
      },
      prefill: { name: "Student", email: "student@example.com", contact: "9876543210" },
      theme: { color: "#3399cc" },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };


  return (
    <div className={styles.oneOnOneContainer}>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {meetingDetails ? (
        <JoinClassCard teacherName={meetingDetails.teacherName} meetLink={meetingDetails.meetLink} />
      ) : (
        <div className={styles.cardGrid}>
          {teachers.map((teacher) => (
            <div key={teacher.id} className={styles.card}>
              <img src={teacher.image} alt={teacher.name} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{teacher.name}</h3>
                <p className={styles.cardDetail}>Language: {teacher.language}</p>
                <p className={styles.cardDetail}>Level: {teacher.level}</p>
                <p className={styles.cardDetail}>Experience: {teacher.experience} years</p>
                <button
                  className={styles.bookButton}
                  onClick={() => handlePayment(teacher)}
                >
                  Book Now: {teacher.price}rs
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OneToOneSession;
