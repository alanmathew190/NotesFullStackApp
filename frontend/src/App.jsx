import React from 'react'
import Register from './components/Register'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import { Toaster } from "react-hot-toast";
import Dashboard from './pages/Dashboard';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App