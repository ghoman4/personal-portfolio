import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components/NavBar.scss";
import { ChevronLeft } from "@mui/icons-material";

export enum CurrentPage {
    HOME = 'HOME',
    PROJECTS = 'PROJECTS',
    ABOUT = 'ABOUT',
    CONTACT = 'CONTACT'
}

type Props = {
    active?: CurrentPage;
    backButton?: boolean;
}

const NavBar: React.FC<Props> = ({ active, backButton }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

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
            <div className="container">
                <div className="navbar__logo">
                    <Link to="/">Griffin Homan</Link>
                </div>
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
                <div className="navbar__menu-icon" onClick={toggleMenu}>
                    {menuOpen ? "✖" : "☰"}
                </div>
            </div>
            {(backButton && (window.history.length > 1)) && (
                <ChevronLeft className="back-button" onClick={() => navigate(-1)}/>
            )}
        </nav>
    );
};

export default NavBar;
