import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export enum CurrentPage {
    HOME = 'HOME',
    PROJECTS = 'PROJECTS',
    ABOUT = 'ABOUT',
    CONTACT = 'CONTACT'
}

type Props = {
    active: CurrentPage;
}

const NavBar: React.FC<Props> = ({ active }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
            {/* Logo Section */}
            <div className="navbar__logo">
                <Link to="/">Griffin Homan</Link>
            </div>

            {/* Links Section */}
            <div className={`navbar__links ${menuOpen ? "active" : ""}`}>
                <Link
                    to="/"
                    onClick={closeMenu}
                    className={active === CurrentPage.HOME ? "active" : ""}
                >
                    Home
                </Link>
                <Link
                    to="/projects"
                    onClick={closeMenu}
                    className={active === CurrentPage.PROJECTS ? "active" : ""}
                >
                    Projects
                </Link>
                <Link
                    to="/about"
                    onClick={closeMenu}
                    className={active === CurrentPage.ABOUT ? "active" : ""}
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    onClick={closeMenu}
                    className={active === CurrentPage.CONTACT ? "active" : ""}
                >
                    Contact
                </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="navbar__menu-icon" onClick={toggleMenu}>
                {menuOpen ? "✖" : "☰"}
            </div>
        </nav>
    );
};

export default NavBar;
