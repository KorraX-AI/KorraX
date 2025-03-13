import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">KorraX</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        {user ? (
          <>
            <Link to="/account">My Account</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/account">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;