import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MultiStepQuiz from '../componants/Login/MultiStepQuiz';
import Dashboard from '../componants/Dashboard/Dashboard';

function AllRoute() {
  return (
    <Routes>
      {/* Redirect the root path "/" to "/login" */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<MultiStepQuiz />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
}

export default AllRoute;
