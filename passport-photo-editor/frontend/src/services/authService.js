import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData);
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData);
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};


// Get user profile
const getProfile = async (token) => {
  const response = await axios.get(API_URL + 'profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};


const authService = {
  register,
  login,
  getProfile
};

export default authService;