import React from 'react';
import './App.css';
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <div>
      <Routes>
        <Route>
        <Route path="/" element={<Home />} />
        </Route>

      </Routes>
      </div>
    </div>
   </BrowserRouter>
  );
}

export default App;
