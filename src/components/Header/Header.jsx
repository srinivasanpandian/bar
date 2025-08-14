import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import Elysium_Logo from '../../assests/images/logo/elysiumLogo.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top py-0">
            <div className="container-fluid px-3 py-1 px-md-4">
                <Link className="navbar-brand" to="/">
                    <img src={Elysium_Logo} alt="Elysium Logo" />
                </Link>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) => `nav-link me-0 me-lg-3 py-3 p-2${isActive ? ' active' : ''}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) => `nav-link me-0 me-lg-3 py-3 p-2${isActive ? ' active' : ''}`}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/events"
                                className={({ isActive }) => `nav-link me-0 me-lg-3 py-3 p-2${isActive ? ' active' : ''}`}
                            >
                                Events
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/menu"
                                className={({ isActive }) => `nav-link me-0 me-lg-3 py-3 p-2${isActive ? ' active' : ''}`}
                            >
                                Menu
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/gallery"
                                className={({ isActive }) => `nav-link me-0 me-lg-3 py-3 p-2${isActive ? ' active' : ''}`}
                            >
                                Gallery
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => `nav-link me-0 me-lg-3 py-3 p-2${isActive ? ' active' : ''}`}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <a className="nav-link btn-prime p-3 mb-2 mb-lg-0" href="#">
                                Reserve Table
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
