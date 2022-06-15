import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./index.scss";

const Navbar = () => {
  return (
    <nav>
      <Container>
        <Row>
          <Col md={2}>
            <div className="nav-logo">
              <a href="/" className="nav-logo-link" />
            </div>
          </Col>
          <Col md={8} className="main-list">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/Cinemas" className="nav-link">
                  Kinoteatrlar
                </Link>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  İMAX
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  LaseR
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  VIP
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Askiyalar
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Haqqımızda
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2} className="submain-list">
            <div className="language-list">
              <ul className="language-links">
                <li>
                  <a>AZ</a>
                </li>
                <li>
                  <span className="language-slash">/</span>
                </li>
                <li>
                  <a>RU</a>
                </li>
                <li>
                  <span className="language-slash">/</span>
                </li>
                <li>
                  <a>EN</a>
                </li>
              </ul>
              <ul className="social-list">
                <li className="social-item">
                  <a
                    href="https://apps.apple.com/us/app/park-cinema/id1119977600?ls=1"
                    className="ios-icon"
                  ></a>
                </li>
                <li className="social-item">
                  <a
                    href="https://play.google.com/store/apps/details?id=az.parkcinema.app&hl=ru"
                    className="android-icon"
                  ></a>
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
