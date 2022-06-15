import React from "react";
import { Row, Col, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./index.scss";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <nav>
      <Container>
        <Row>
          <Col md={2}>
            <div className="nav-logo">
              <a href="/" className="nav-logo-link">
                {" "}
              </a>
            </div>
          </Col>
          <Col md={8} className="main-list">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/cinemas" className="nav-link">
                  Kinoteatrlar
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/imax" className="nav-link">
                  İMAX
                </Link>
              </li>
              <li className="nav-item">
                <a href="/laser" className="nav-link">
                  LaseR
                </a>
              </li>
              <li className="nav-item">
                <a href="/vip" className="nav-link">
                  VIP
                </a>
              </li>
              <li className="nav-item">
                <a href="/campaigns" className="nav-link">
                  Askiyalar
                </a>
              </li>
              <li>
                <NavDropdown
                  title="Haqqımızda"
                  id="collasible-nav-dropdown"
                  show={show}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                  className="nav-item"
                  value={"Sss"}
                >
                  <NavDropdown.Item href="/aboutus">
                    Park Cinema haqqında
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/rules">
                    Qaydalar və şərtlər
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/advertisingoffer">
                    Reklam təklifləri
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/contact">Əlaqə</NavDropdown.Item>
                </NavDropdown>
              </li>
            </ul>
          </Col>
          <Col md={2} className="submain-list">
            <div className="language-list">
              <ul className="language-links">
                <li>
                  <a href="./">AZ</a>
                </li>
                <li>
                  <span className="language-slash">/</span>
                </li>
                <li>
                  <a href="./">RU</a>
                </li>
                <li>
                  <span className="language-slash">/</span>
                </li>
                <li>
                  <a href="./">EN</a>
                </li>
              </ul>
              <ul className="social-list">
                <li className="social-item">
                  <a
                    href="https://apps.apple.com/us/app/park-cinema/id1119977600?ls=1"
                    className="ios-icon"
                  >
                    {" "}
                  </a>
                </li>
                <li className="social-item">
                  <a
                    href="https://play.google.com/store/apps/details?id=az.parkcinema.app&hl=ru"
                    className="android-icon"
                  >
                    {" "}
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Navbar;
