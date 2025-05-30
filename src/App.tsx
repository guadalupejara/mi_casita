import React from 'react';
import './App.css';
import Home from './Pages/home/Home'
import Login from './Pages/login/Login';
import Navbar from './components/navbar/Navbar';
import Dashboard from './Pages/dashboard/Dashboard';
import Register from './Pages/register/Register'
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