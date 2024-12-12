import React, { useState, useEffect } from "react";

const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Close the menu when clicking off of navbar (mobile only)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const navbar = document.querySelector(".navbar__links");
            const menuIcon = document.querySelector(".navbar__menu-icon");
            if (
                menuOpen &&
                navbar &&
                !navbar.contains(event.target as Node) &&
                !menuIcon?.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    return (
        <nav className="navbar">
            {/* Left Section: Logo */}
            <div className="navbar__logo">
                <a href="#home">My Brand</a>
            </div>

            {/* Right Section: Links */}
            <div className={`navbar__links ${menuOpen ? "active" : ""}`}>
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#contact" className="active" onClick={closeMenu}>Contact</a>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="navbar__menu-icon" onClick={toggleMenu}>
                {menuOpen ? "✖" : "☰"}
            </div>
        </nav>
    );
};

export default NavBar;
