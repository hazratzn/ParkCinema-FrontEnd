import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Movie from "../../../common/Movie";
import "./index.scss";

const Movies = () => {
  return (
    <Container>
      <Col md={9}>
        <div className="main-movies">
          <div className="movie-buttons">
            <button>x</button>
            <button>x</button>
            <button>x</button>
            <button>x</button>
            <button>x</button>
            <button>x</button>
          </div>
          <div>
            <select>
              <option></option>
            </select>
          </div>
          <div>
            <button>okkkkkk</button>
          </div>
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
