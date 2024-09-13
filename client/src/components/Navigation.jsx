import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { Nav, Modal, Tab } from "react-bootstrap";

import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Auth from '../utils/auth';

function Navigation() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="navbar-index navbar navbar-bar navbar-expand-md">
        <div className="container-fluid">
          <div className="navbar-header row-md-6">
            <ul className="nav navbar-nav">
              <li className="nav-item me-4">
                <NavLink
                  // exact
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
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
}

export default Navigation;
