import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { RiMenuUnfold4Fill , RiMenuFold4Fill} from "react-icons/ri";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(''); // To track active menu item
  const [isCollapsed, setIsCollapsed] = useState(false); // Sidebar collapse state

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        {!isCollapsed && (
          <h1 className={styles.logo}>
            <img src='./assets/logo.png' alt="Logo" />
          </h1>
        )}
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          {isCollapsed ? <RiMenuFold4Fill /> : <RiMenuUnfold4Fill />}
        </button>
      </div>

      {/* Menu Items */}
      <div className={styles.menu}>
        <Link to="/">
          <div
            className={`${styles.menuItem} ${
              activeItem === 'language' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('language')}
          >
            <img
              className={styles.icon}
              src='./assets/language.png'
              alt="Language"
            />
            {!isCollapsed && <span>Language</span>}
          </div>
        </Link>
        <Link to="/ielts">
          <div
            className={`${styles.menuItem} ${
              activeItem === 'ielts' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('ielts')}
          >
            <img
              className={styles.icon}
              src='./assets/eng.png'
              alt="IELTS"
            />
            {!isCollapsed && <span>IELTS</span>}
          </div>
        </Link>
        <Link to="/toefl">
          <div
            className={`${styles.menuItem} ${
              activeItem === 'toefl' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('toefl')}
          >
            <img
              className={styles.icon}
              src='./assets/exam.png'
              alt="TOEFL"
            />
            {!isCollapsed && <span>TOEFL</span>}
          </div>
        </Link>
        <Link to="/onetoone">
          <div
            className={`${styles.menuItem} ${
              activeItem === 'session' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('session')}
          >
            <img
              className={styles.icon}
              src='./assets/webinar.png'
              alt="1 on 1 Session"
            />
            {!isCollapsed && <span>1 on 1 Session</span>}
          </div>
        </Link>

        <hr />
        <div className={styles.lets}>
        {!isCollapsed && <div className={styles.divider}>Let’s Practice</div>}

        <Link to="/blog">
          <div
            className={`${styles.menuItem} ${
              activeItem === 'blog' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('blog')}
          >
            <img
              className={styles.icon}
              src='./assets/blogger.png'
              alt="Blog"
            />
            {!isCollapsed && <span>Blog</span>}
          </div>
        </Link>
        <Link to="/quiz">
          <div
            className={`${styles.menuItem} ${
              activeItem === 'quiz' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('quiz')}
          >
            <img
              className={styles.icon}
              src='./assets/choose.png'
              alt="Quiz"
            />
            {!isCollapsed && <span>Quiz</span>}
          </div>
        </Link>
        <Link to="/audio">
          <div
            className={`${styles.menuItem} ${
              activeItem === 'audio' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('audio')}
          >
            <img
              className={styles.icon}
              src='./assets/volume.png'
              alt="Audio"
            />
            {!isCollapsed && <span>Audio</span>}
          </div>
        </Link>
        <Link to="/speaking">
          <div
            className={`${styles.menuItem} ${
              activeItem === 'speaking' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('speaking')}
          >
            <img
              className={styles.icon}
              src='./assets/speaking.png'
              alt="Speaking"
            />
            {!isCollapsed && <span>Speaking</span>}
          </div>
        </Link>
        <Link to="/writing">
          <div
            className={`${styles.menuItem} ${
              activeItem === 'writing' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('writing')}
          >
            <img
              className={styles.icon}
              src='./assets/writing.png'
              alt="Writing"
            />
            {!isCollapsed && <span>Writing</span>}
          </div>
        </Link>
        </div>

        <Link to="/supportticket">
          <div
            className={`${styles.menuItem} ${
              activeItem === 'support' ? styles.active : ''
            }`}
            onClick={() => handleItemClick('support')}
          >
            <img
              className={styles.icon}
              src='./assets/customer-service 1.png'
              alt="Support Ticket"
            />
            {!isCollapsed && <span>Support Ticket</span>}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
