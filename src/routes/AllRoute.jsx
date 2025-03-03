import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MultiStepQuiz from '../componants/Login/MultiStepQuiz';
import Dashboard from '../componants/Dashboard/Dashboard';
import UserLogin from '../componants/UserLogin/UserLogin';

function AllRoute() {
  return (
    <Routes>
      {/* Redirect the root path "/" to "/login" */}
      <Route path="/" element={<Navigate to="/userlogin" replace />} />
      <Route path="/login" element={<MultiStepQuiz />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/userlogin" element={<UserLogin/>} />
    </Routes>
  );
}

export default AllRoute;
// Hello change 