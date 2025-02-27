import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MultiStepQuiz from '../componants/Login/MultiStepQuiz';
import Dashboard from '../componants/Dashboard/Dashboard';

function AllRoute() {
  return (
    <Routes>
      <Route path="/login" element={<MultiStepQuiz />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
}

export default AllRoute;
