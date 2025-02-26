import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Portfolio from './components/Portfolio.jsx';
import Product from './pages/Product.jsx';
import MyAccount from './pages/MyAccount.jsx';
import Subscription from './components/Subscription.jsx';
import ContactForm from './components/ContactForm.jsx';
import NotFound from './pages/NotFound.jsx';

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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;