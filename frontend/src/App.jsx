import React from 'react'
import Register from './components/Register'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import { Toaster } from "react-hot-toast";
import Dashboard from './pages/Dashboard';
import PageNotFound from './components/PageNotFound';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/addNote"
          element={
            <ProtectedRoute>
              <AddNote />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/editNote/:id"
          element={
            <ProtectedRoute>
              <EditNote />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App