import { Link, useLocation } from "@remix-run/react";
import cartImage from "../../public/img/cart.png";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="nav">
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
        to="/guitars"
        className={location.pathname === "/guitars" ? "active" : ""}
      >
        Store
      </Link>
      <Link
        to="/blog"
        className={location.pathname === "/blog" ? "active" : ""}
      >
        Blog
      </Link>
      <Link to="/cart">
        <img src={cartImage} alt="shopping cart icon" />
      </Link>
    </nav>
  );
};

export default Nav;
