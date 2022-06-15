import React from "react";
import { Col, Row } from "react-bootstrap";
import "./index.scss";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const date = movie.startTime;

  return (
    <>
      <Row>
        <Col md={6}>
          <div className="movie-image" key={movie.id}>
            <Link to={{ pathname: `/movie/${movie.id}` }}>
              <img src={movie.image} alt="movie" className="img-fluid" />
            </Link>
            <button className="movie-ticket-buy">
              <Link
                to={{ pathname: `/movie/${movie.id}` }}
                className="movie-link-detail"
              >
                Bilet al
              </Link>
            </button>
          </div>
        </Col>
        <Col md={6}>
          <div className="movie-description" key={movie.id}>
            <Link
              to={{ pathname: `/movie/${movie.id}` }}
              className="text-decoration-none movie-title"
            >
              {movie.name}
            </Link>
            <div className="movie-date">
              <span>
                <Moment date={date} format="DD MMMM" />
              </span>
            </div>
            <div className="movie-type">
              <span>{movie.formats}</span>
            </div>
            <div className="movie-language">
              <span>{movie.languages}</span>
            </div>
            <div className="movie-claimer-age">{movie.claimerAge}+</div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Movie;
