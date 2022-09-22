import React from 'react';
import './App.css';

import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </div>
  );
};

export default App;