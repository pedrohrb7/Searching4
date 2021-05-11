import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import Logo from "../../images/searching4-logo.png";

const Header = () => {
  return (
    <div className="header-style">
      <header className="container">
        <div className="content">
          <img alt="searching logo" src={Logo} className="header-logo" />
          <ul className="menu">
            <li className="menu-item">
              <Link to="/">Inicio</Link>
            </li>
            <li className="menu-item">
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
