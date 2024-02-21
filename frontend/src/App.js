import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import DonateBlood from './pages/DonateBlood';
import FundRaiser from './pages/FundRaiser';
import DonationDrive from './pages/DonationDrive';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here
    setIsLoggedIn(true); // For demo purposes, always set isLoggedIn to true
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Restricted routes */}
        <Route
          path="/donate-blood"
          element={isLoggedIn ? <DonateBlood /> : <Navigate to="/login" />}
        />
        <Route
          path="/fund-raiser"
          element={isLoggedIn ? <FundRaiser /> : <Navigate to="/login" />}
        />
        <Route
          path="/donation-drive"
          element={isLoggedIn ? <DonationDrive /> : <Navigate to="/login" />}
        />
        
        {/* Redirect to home page if user tries to access unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
