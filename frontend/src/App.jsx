import React from 'react'
import Register from './components/Register'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <Router>
      <Toaster position='top-right'/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App