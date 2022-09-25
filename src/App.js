import React from 'react';
import './App.css';

import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Checkout from './component/Checkout/Checkout';
import Footer from './component/Footer/Footer';
import Blogs from './component/Blogs/Blogs';
import Login from './component/Login/Login';
import Register from './component/Register/Register.js';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;