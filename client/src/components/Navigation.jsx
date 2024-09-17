import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Auth from '../utils/auth';

function Navigation() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const closeModalOnOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") {
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="navbar-index navbar navbar-bar navbar-expand-md">
        <div className="container-fluid">
          <div className="navbar-header row-md-6">
            <ul className="nav navbar-nav">
              <li className="nav-item me-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "link-light no-text-dec navigation-links active-link"
                      : "link-light no-text-dec navigation-links"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-4">
                <NavLink
                  to="/donate"
                  className={({ isActive }) =>
                    isActive
                      ? "link-light no-text-dec navigation-links active-link"
                      : "link-light no-text-dec navigation-links"
                  }
                >
                  Donate
                </NavLink>
              </li>
              <li className="nav-item me-4">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "link-light no-text-dec navigation-links active-link"
                      : "link-light no-text-dec navigation-links"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
              {Auth.loggedIn() ? (
                <>
                  <NavLink onClick={Auth.logout}>Logout</NavLink>
                </>
              ) : (
                <NavLink onClick={() => setShowModal(true)}>Login/Sign Up</NavLink>
              )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={closeModalOnOutsideClick}
        >
          <div className="modal-container">
            <div className="modal-header">
              <button className="close-button" onClick={() => setShowModal(false)}>X</button>
              <nav className="modal-nav">
                <button onClick={() => setActiveTab("login")}>Login</button>
                <button onClick={() => setActiveTab("signup")}>Sign Up</button>
              </nav>
            </div>
            <div className="modal-body">
              {activeTab === "login" ? (
                <LoginForm handleModalClose={() => setShowModal(false)} />
              ) : (
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
