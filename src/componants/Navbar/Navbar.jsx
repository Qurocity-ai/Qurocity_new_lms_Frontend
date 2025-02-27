import React from 'react';
import styles from './Navbar.module.css';


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.userProfile}>
        <span>Shubham Paypare </span>
        <img
          src="/assets/profile.jpg" // Placeholder for profile picture
          alt="User Profile"
          className={styles.profileImage}
        />
      </div>
    </div>
  );
};

export default Navbar;