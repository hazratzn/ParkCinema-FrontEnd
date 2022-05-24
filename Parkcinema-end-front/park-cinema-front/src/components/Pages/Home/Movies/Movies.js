import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Movie from "../../../common/Movie";
import "./index.scss";

const Movies = () => {
  return (
    <Container>
      <Col md={9}>
        <div className="main-buttons">
          <div className="filter-button activeMovie">Bu gün</div>
          <div className="filter-button">Tezliklə</div>
          <div className="filter-button">Cədvəl</div>
        </div>
        <div className="main-movies">
          <Row>
            <Col md={4}>
              <Movie />
            </Col>
            <Col md={4}>
              <Movie />
            </Col>
            <Col md={4}>
              <Movie />
            </Col>
          </Row>
        </div>
      </Col>
      <Col md={3}></Col>
    </Container>
  );
};
export default Movies;
