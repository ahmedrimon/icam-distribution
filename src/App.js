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
import ErrorPage from './component/ErrorPage/ErrorPage.js';
import RequireAuth from './component/RequireAuth/RequireAuth.js';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Private Route Use */}
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;