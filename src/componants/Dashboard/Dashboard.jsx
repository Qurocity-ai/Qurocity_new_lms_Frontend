import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Language from '../../pages/Language/Language';
import IELTS from '../../pages/IELTS/IELTS';
import Blog from '../../pages/Blog/Blog';
import Audio from '../../pages/Audio/Audio';
import OneToOneSession from '../../pages/OneToOneSession/OneToOneSession';
import Quiz from '../../pages/Quiz/Quiz';
import Speaking from '../../pages/Speaking/Speaking';
import SupportTickets from '../../pages/SupportTickets/SupportTickets';
import TOEFL from '../../pages/TOEFL/TOEFL';
import Writing from '../../pages/Writing/Writing';
import Lessons from '../../pages/Language/Lessons';
import JoinClassCard from '../../pages/OneToOneSession/JoinClassCard';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.content}>
          <Routes>
            {/* Redirect /dashboard to /dashboard/language */}
            <Route path="/" element={<Navigate to="language" replace />} />
            <Route path="language" element={<Language />} />
            <Route path="ielts" element={<IELTS />} />
            <Route path="blog" element={<Blog />} />
            <Route path="audio" element={<Audio />} />
            <Route path="onetoone" element={<OneToOneSession />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="speaking" element={<Speaking />} />
            <Route path="supportticket" element={<SupportTickets />} />
            <Route path="toefl" element={<TOEFL />} />
            <Route path="writing" element={<Writing />} />
            <Route path="lessons" element={<Lessons />} />
            <Route path="join-class" element={<JoinClassCard />} />
          </Routes>
        </div>
      </div>
    {/* ket fdsfsdf */}
    </div>
  );
};

export default Dashboard;
