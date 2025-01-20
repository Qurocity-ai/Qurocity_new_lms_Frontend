import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RiMenuFold2Fill } from "react-icons/ri";
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
<div className={styles.logoSection}>
<h1 className={styles.logo}>{!isCollapsed && <img src='./assets/logo.png'></img>}</h1>
<button className={styles.toggleButton} onClick={toggleSidebar}>
          {isCollapsed ? <RiMenuFold2Fill  /> :<RiMenuUnfold2Fill /> }
</button>
</div>
<div className={styles.menu}>
<Link to="/">
<div
          className={`${styles.menuItem} ${
            activeItem === 'language' ? styles.active : ''
          }`}
          onClick={() => handleItemClick('language')}
>
<img className={styles.icon} src='./assets/language.png'></img>Language
        
</div>
</Link>
<Link to="/ielts">
<div
          className={`${styles.menuItem} ${
            activeItem === 'ielts' ? styles.active : ''
          }`}
          onClick={() => handleItemClick('ielts')}
>
          
<img className={styles.icon} src='./assets/eng.png'></img>IELTS
</div>
</Link>
<Link to="/toefl">
<div
          className={`${styles.menuItem} ${
            activeItem === 'toefl' ? styles.active : ''
          }`}
          onClick={() => handleItemClick('toefl')}
>
<img className={styles.icon} src='./assets/exam.png'></img>TOEFL
</div>
</Link>
<Link to="/onetoone">
<div
          className={`${styles.menuItem} ${
            activeItem === 'session' ? styles.active : ''
          }`}
          onClick={() => handleItemClick('session')}
>
          
<img className={styles.icon} src='./assets/webinar.png'></img> 1 on 1 Session
</div>
</Link>
<hr/>
<div className ={styles.lets} >
<div className={styles.divider}>Let’s Practice</div>
<Link to="/blog">
<div
          className={`${styles.menuItem} ${
            activeItem === 'blog' ? styles.active : ''
          }`}
          onClick={() => handleItemClick('blog')}
>
<img className={styles.icon} src='./assets/blogger.png'></img>Blog
</div>
</Link>
<Link to="/quiz">
<div
          className={`${styles.menuItem} ${
            activeItem === 'quiz' ? styles.active : ''
          }`}
          onClick={() => handleItemClick('quiz')}
>
<img className={styles.icon} src='./assets/choose.png'></img>Quiz
</div>
</Link>
<Link to="/audio">
<div
          className={`${styles.menuItem} ${
            activeItem === 'audio' ? styles.active : ''
          }`}
          onClick={() => handleItemClick('audio')}
>
<img className={styles.icon} src='./assets/volume.png'></img>Audio
</div>
</Link>
<Link to="/speaking">
<div
          className={`${styles.menuItem} ${
            activeItem === 'speaking' ? styles.active : ''
          }`}
          onClick={() => handleItemClick('speaking')}
>
<img className={styles.icon} src='./assets/speaking.png'></img>Speaking
</div>
</Link>
<Link to="/writing">
<div
          className={`${styles.menuItem} ${
            activeItem === 'writing' ? styles.active : ''
          }`}
          onClick={() => handleItemClick('writing')}
>
<img className={styles.icon} src='./assets/writing.png'></img>Writing
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

<img className={styles.icon} src='./assets/customer-service 1.png'></img> Support Ticket
</div>
</Link>
</div>
</div>
  );
};
 
export default Sidebar;