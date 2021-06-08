import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
//import Logo from "../../images/searching4-logo.svg";

const Header = () => {
  return (
    <header>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/" className="menu-link">
            Inicio
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/about" className="menu-link">
            Sobre
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
