// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './pages/Login';
import Invoices from './pages/Invoices';

const App = () => {
  const token = localStorage.getItem('authToken');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/invoices" 
          element={token ? <Invoices /> : <Navigate to="/login" />} 
        />
        <Route path="/" element={token ? <Navigate to="/invoices" /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
