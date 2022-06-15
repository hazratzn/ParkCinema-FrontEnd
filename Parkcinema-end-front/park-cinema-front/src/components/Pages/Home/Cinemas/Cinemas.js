import React from "react";
import { Col, Row } from "react-bootstrap";
import "./index.scss";
import CinemaSlider from "./CinemaSlider";
import Cinema from "./Cinema";
import Advertisement from "../../../layout/Advertisement/Advertisment";

const Cinemas = () => {
  return (
    <div>
      <CinemaSlider />
      <h1>Kinoteatrlar</h1>
      <Row>
        <Col md={8}>
          <Cinema />
        </Col>
        <Col md={4}>
          <Advertisement />
        </Col>
      </Row>
    </div>
  );
};

export default Cinemas;
