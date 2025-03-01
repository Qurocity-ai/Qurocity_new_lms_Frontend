import React, { useState } from "react";
import styles from "./UserLogin.module.css";

const UserLogin = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter valid credentials");
      return;
    }

    try {
      const response = await fetch("https://qurocity-lms-backend.onrender.com/api/quiz/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user)); // Storing user details
        localStorage.setItem("token", data.token); // Assuming API returns a token
        setUser(data.user.email); // Updating UI
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/assets/logo.png" alt="Logo" className={styles.logo} />
        <h2>Welcome To Qurocity Learning Platform</h2>
        <p>Please enter your details</p>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleLogin} className={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
