import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container container-header">
        <Link to="/">
          <img className="logo" src={logo} alt="app logo" />
        </Link>

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
