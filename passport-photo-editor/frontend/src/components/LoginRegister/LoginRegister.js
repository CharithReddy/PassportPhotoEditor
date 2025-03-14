import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import authService from '../../services/authService';
import './LoginRegister.css';

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [registerDetails, setRegisterDetails] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    setSuccessMessage('');
    try {
      await authService.login(loginDetails);
      navigate('/profile');
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    if (registerDetails.password !== registerDetails.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await authService.register(registerDetails);
      console.log(response);
      setSuccessMessage('Registration successful! Please log in.');
      setIsLogin(true);
    } catch (error) {
      setError('Registration failed');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccessMessage('');
  };

  return (
    <motion.div
      className="login-register-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isLogin ? (
        <div className="login-form">
          <h1>Login</h1>
          {error && <p className="error-text">{error}</p>}
          {successMessage && <p className="success-text">{successMessage}</p>}
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={loginDetails.email}
            onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={loginDetails.password}
            onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
          />
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          <p className="toggle-form-text">Don't have an account? <span onClick={toggleForm}>Register</span></p>
          <p className="forgot-password">Forgot Password?</p>
        </div>
      ) : (
        <div className="register-form">
          <h1>Register</h1>
          {error && <p className="error-text">{error}</p>}
          <form onSubmit={handleRegister}>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={registerDetails.name}
              onChange={(e) => setRegisterDetails({ ...registerDetails, name: e.target.value })}
              required
            />
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={registerDetails.email}
              onChange={(e) => setRegisterDetails({ ...registerDetails, email: e.target.value })}
              required
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={registerDetails.password}
              onChange={(e) => setRegisterDetails({ ...registerDetails, password: e.target.value })}
              required
            />
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={registerDetails.confirmPassword}
              onChange={(e) => setRegisterDetails({ ...registerDetails, confirmPassword: e.target.value })}
              required
            />
            <button className="btn btn-primary" type="submit">Register</button>
          </form>
          <p className="toggle-form-text">Already have an account? <span onClick={toggleForm}>Login</span></p>
        </div>
      )}
    </motion.div>
  );
}

export default LoginRegister;