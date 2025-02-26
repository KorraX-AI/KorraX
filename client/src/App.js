import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './components/Portfolio';
import Product from './pages/Product';
import MyAccount from './pages/MyAccount';
import Subscription from './components/Subscription';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;