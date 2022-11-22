import { Link, useLocation } from "@remix-run/react";
import logo from "../../public/img/logo.svg";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container container-header">
        <Link to="/">
          <img className="logo" src={logo} alt="app logo" />
        </Link>

        <nav className="nav-header">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/aboutus"
            className={location.pathname === "/aboutus" ? "active" : ""}
          >
            About Us
          </Link>
          <Link
            to="/store"
            className={location.pathname === "/store" ? "active" : ""}
          >
            Store
          </Link>
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "active" : ""}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
