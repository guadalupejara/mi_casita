import React from 'react';
import './App.css';
import Home from './Pages/Home'
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import Dashboard from './Pages/Dashboard';
import Register from './Pages/Register'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
function AppContent(){
  const location = useLocation();
  const publicRoutes = ['/', '/login', '/register'];

  const isPublicRoute = publicRoutes.includes(location.pathname.toLowerCase());

  return(
    <React.Fragment>
      <div>
      {isPublicRoute && <Navbar />}

      <Routes>
        <Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      </div>

    </React.Fragment>
  )
}


function App() {
  return (
   <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;