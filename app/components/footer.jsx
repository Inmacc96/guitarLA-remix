import Nav from "./nav";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container content">
        <Nav />

        <p className="copyright">
         All rights reserved  &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
