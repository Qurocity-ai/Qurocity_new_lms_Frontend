import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.userProfile}>
        <span>{username ? username : "Guest"}</span> {/* Show username dynamically */}
        <img
          src="/assets/profile.jpg"
          alt="User Profile"
          className={styles.profileImage}
        />
      </div>
    </div>
  );
};

export default Navbar;
