import { Link } from "@remix-run/react";
import Nav from "./nav";
import logo from "../../public/img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container container-header">
        <Link to="/">
          <img className="logo" src={logo} alt="app logo" />
        </Link>

        <Nav />
      </div>
    </header>
  );
};

export default Header;
