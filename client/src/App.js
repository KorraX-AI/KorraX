import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/product" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
