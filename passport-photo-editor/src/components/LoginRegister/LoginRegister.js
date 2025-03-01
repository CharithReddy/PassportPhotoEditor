import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LoginRegister.css';

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
  const [registerDetails, setRegisterDetails] = useState({
    fname: '', lname: '', uname: '', email: '', password: '', confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here
    navigate('/home');
  };

  const handleRegister = () => {
    // Handle register logic here
    navigate('/home');
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
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
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={loginDetails.username}
            onChange={(e) => setLoginDetails({ ...loginDetails, username: e.target.value })}
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
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={registerDetails.fname}
            onChange={(e) => setRegisterDetails({ ...registerDetails, fname: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={registerDetails.lname}
            onChange={(e) => setRegisterDetails({ ...registerDetails, lname: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={registerDetails.uname}
            onChange={(e) => setRegisterDetails({ ...registerDetails, uname: e.target.value })}
          />
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={registerDetails.email}
            onChange={(e) => setRegisterDetails({ ...registerDetails, email: e.target.value })}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={registerDetails.password}
            onChange={(e) => setRegisterDetails({ ...registerDetails, password: e.target.value })}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Re-enter Password"
            value={registerDetails.confirmPassword}
            onChange={(e) => setRegisterDetails({ ...registerDetails, confirmPassword: e.target.value })}
          />
          <button className="btn btn-primary" onClick={handleRegister}>Register</button>
          <p className="toggle-form-text">Already have an account? <span onClick={toggleForm}>Login</span></p>
        </div>
      )}
    </motion.div>
  );
}

export default LoginRegister;

