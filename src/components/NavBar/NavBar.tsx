import { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/NavBar/GlobalEX Logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/home">
          <img src={logo} alt="GlobalEX Logo" className="navbar-logo" />
        </Link>
        <button className="navbar-toggle" onClick={handleMenuToggle}>
          ☰
        </button>
      </div>

      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <Link to="/home" className="navbar-link">
          Home
        </Link>
        <a href="#servicios" className="navbar-link">
          Servicios
        </a>
        <Link to="/nosotros" className="navbar-link">
          Nosotros
        </Link>
        {/* <Link to="#" className="navbar-link">
          Contacto
        </Link> */}
      </div>
    </nav>
  );
};
