// src/pages/Login.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { email, password });
      const { access_token } = response.data;

      // If token is available, save to localStorage
      if (access_token) {
        localStorage.setItem('authToken', access_token);
        console.log('Token saved:', access_token); // Debugging

        // Navigate to invoices page
        navigate('/invoices');
      } else {
        setError('Failed to authenticate');
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Email:</label>
          <input 
            type="email" 
            className="w-full p-2 border border-gray-300 rounded" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Password:</label>
          <input 
            type="password" 
            className="w-full p-2 border border-gray-300 rounded" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
