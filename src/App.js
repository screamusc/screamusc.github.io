import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './routes/Home';
import Eboard from './routes/Eboard';
import Gallery from './routes/Gallery';
import Contact from './routes/Contact';
import './App.css';

const App = () => {
  return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/eboard" element={<Eboard />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
};

export default App;
