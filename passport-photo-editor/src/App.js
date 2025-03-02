import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LoginRegister from './components/LoginRegister/LoginRegister';
import Account from './components/Account/Account';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
