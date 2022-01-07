import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home';
import Reports from './pages/orders';
import Products from './pages/orders';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<Reports />}/>
      <Route path="/reports" element={<Reports />}/>
    </Routes>
  </BrowserRouter>
     
    </>
  );
}

export default App;