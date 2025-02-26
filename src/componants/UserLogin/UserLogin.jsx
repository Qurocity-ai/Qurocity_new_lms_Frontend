import React, { useState } from "react";
import styles from './UserLogin.module.css';

const UserLogin = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() && password) {
      localStorage.setItem("user", username);
      setUser(username);
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src="./assets/logo.png"
          alt="Logo"
          className={styles.logo}
        />
        <h2>Welcome To Qurocity Learning Platform</h2>
        <p>Please enter your details</p>
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        {/* <p className={styles.forgot}>Forgot Password?</p> */}
      </div>
    </div>
  );
};

export default UserLogin;
