import React from 'react';

import './Header.css';

function Header() {
    return (
        <div className="Header">
            <header className="Header-header">
                <div className="Header-header-container">
                    <h1>Searching4</h1>
                    <nav className="Header-header-nav">
                        <ul>
                            <li><a href="home" className="Header-link">Início</a></li>
                            <li><a href="sobre" className="Header-link">Sobre</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
);
}

export default Header;