import React from 'react';

import styles from './Dashboard.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Language from '../../pages/Language/Language';
import AllRoute from '../../routes/AllRoute';
 
const Dashboard = () => {
  return (
<div className={styles.dashboard}>
<Sidebar />
<div className={styles.mainContent}>
<Navbar />
<div className={styles.content}>

<AllRoute/>


</div>
</div>
</div>
  );
};
 
export default Dashboard;