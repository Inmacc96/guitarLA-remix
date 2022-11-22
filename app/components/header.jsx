import { Link } from "@remix-run/react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo"></div>

        <nav className="nav-header">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/store">Store</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
