import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../modules/auth';

export default function Layout() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/template">Template</Link>
          <Link to="/car-tint">Car Tint</Link>
          <Link to="/car-tint-v2">Car Tint V2</Link>
          {isAuthenticated ? (
            <button type="button" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
