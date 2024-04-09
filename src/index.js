// ** import core packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// ** import components
import Header from './components/Header'
import Footer from './components/Footer'

// ** import pages
import Home from './pages/Home'
import About from './pages/About'
import Lodging from './pages/Lodging'
import Error from './pages/Error'

// ** import styles
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:idLodging" element={<Lodging />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>

  </React.StrictMode>
);

