import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Language from '../pages/Language/Language'
import IELTS from '../pages/IELTS/IELTS'
import Blog from '../pages/Blog/Blog'
import Audio from '../pages/Audio/Audio'
import OneToOneSession from '../pages/OneToOneSession/OneToOneSession'
import Quiz from '../pages/Quiz/Quiz'
import Speaking from '../pages/Speaking/Speaking'
import SupportTickets from '../pages/SupportTickets/SupportTickets'
import TOEFL from '../pages/TOEFL/TOEFL'
import Writing from '../pages/Writing/Writing'
import Lessons from '../pages/Language/Lessons'

function AllRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Language/>}/> 
        <Route path='/ielts' element={<IELTS/>}/> 
        <Route path='/blog' element={<Blog/>}/> 
        <Route path='/audio' element={<Audio/>}/> 
        <Route path='/onetoone' element={<OneToOneSession/>}/> 
        <Route path='/quiz' element={<Quiz/>}/> 
        <Route path='/speaking' element={<Speaking/>}/> 
        <Route path='/supportticket' element={<SupportTickets/>}/> 
        <Route path='/toefl' element={<TOEFL/>}/> 
        <Route path='/writing' element={<Writing/>}/> 
        <Route path="/lessons" element={<Lessons/>} />
      </Routes>
    </div>
  )
}

export default AllRoute