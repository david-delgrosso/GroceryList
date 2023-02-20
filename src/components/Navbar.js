import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-left">
                    <AiOutlineShoppingCart size={24} />
                </div>
                <div className="navbar-middle">
                    <h1 className="navbar-title">Grocery List</h1>
                </div>
                <div className="navbar-right">
                    <div className="navbar-dropdown">
                        <button className="navbar-dropdown-button" onClick={toggleMenu}>
                            Stores
                        </button>
                        {isOpen && (
                            <ul className="navbar-dropdown-menu">
                                <li>Menu Item 1</li>
                                <li>Menu Item 2</li>
                                <li>Menu Item 3</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
