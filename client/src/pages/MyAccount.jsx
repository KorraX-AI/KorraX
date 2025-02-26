import { useAuth } from '../context/AuthContext';
import './MyAccount.css';

function MyAccount() {
  const { user, login } = useAuth();

  if (!user) {
    return (
      <div className="my-account">
        <h1>Login</h1>
        <button onClick={() => login({ id: 1, name: 'Test User' })}>
          Login (Demo)
        </button>
      </div>
    );
  }

  return (
    <div className="my-account">
      <h1>My Account</h1>
      <p>Welcome, {user.name}!</p>
    </div>
  );
}

export default MyAccount;