import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

function Navigation() {
    return (
        <div className="navbar navbar-bar navbar-expand-md">
            <div className="container-fluid">
                <div className="navbar-header row-md-6">
                    <ul className="nav navbar-nav">
                        <li className="nav-item me-4">
                            <NavLink 
                                exact 
                                to="/" 
                                className={({ isActive }) => isActive ? "link-light no-text-dec navigation-links active-link" : "link-light no-text-dec navigation-links"}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink 
                                to="/portfolio" 
                                className={({ isActive }) => isActive ? "link-light no-text-dec navigation-links active-link" : "link-light no-text-dec navigation-links"} 
                            >
                                Donate
                            </NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => isActive ? "link-light no-text-dec navigation-links active-link" : "link-light no-text-dec navigation-links"} 
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation;