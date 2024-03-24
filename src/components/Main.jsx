import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
// import Dashboard from './pages/dashboard/Dashboard';

const Main = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}

    </Routes>
  )
}

export default Main
