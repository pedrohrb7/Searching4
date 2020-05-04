import React from 'react';

import './Header.css';

import {
    Link
} from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <header className="Header-header">
                <div className="Header-header-container">
                    <h1>Searching4</h1>
                    <nav className="Header-header-nav">
                        <ul>
                            <Link to="/"> <li>Início</li> </Link>
                            <Link to="/about"> <li>Sobre</li> </Link>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
);
}

export default Header;