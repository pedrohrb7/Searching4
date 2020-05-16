import React from 'react';

import './Header.css';
import Logo from '../../images/searching4-logo.png'

import {
    Link
} from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <header className="Header-header">
                <div className="Header-header-container">
                <img src={Logo}></img>
                    <nav className="Header-header-nav">
                        <ul>
                            <Link className="Header-link" to="/"> <li>Início</li> </Link>
                            <Link className="Header-link" to="/about"> <li>Sobre</li> </Link>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
);
}

export default Header;