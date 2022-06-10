import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link> |
        <Link to="signup">Sign Up</Link> |{' '}
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
