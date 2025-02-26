import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/product/:id" component={Product} />
        <Route path="/my-account" component={MyAccount} />
        <Route path="/subscription" component={Subscription} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
    </Router>
  );
};

export default App;