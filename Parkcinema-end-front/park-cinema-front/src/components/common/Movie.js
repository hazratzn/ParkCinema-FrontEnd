import React from "react";
import { Col, Row } from "react-bootstrap";
import "./index.scss";
import image from "../../images/Bedheybet.jpg";
import axios from "axios";
const Movie = () => {
  const [movies, setMovies] = React.useState();

  let url = "https://61e7b7b5e32cd90017acbcc9.mockapi.io";
  React.useEffect(() => {
    axios.get(`${url}/movies`).then((res) => setMovies(res.data));
  }, []);
  return (
    <div>
      <Row>
        <Col md={6}>
          <div className="movie-image">
            <img src={image} alt="movie" className="img-fluid" />
          </div>
        </Col>
        <Col md={6}>
          {/* {movies?.map((movie) => (
            <div className="movie-description" key={movie.id}>
                    
           

            </div> */}
          <div className="movie-description">
            <a className="movie-title" href="/">
              Biz bədheybətik 2
            </a>
            <div className="movie-date">
              <span>27 Yanvar</span>
            </div>
            <div className="movie-type">
              <span>2D</span>
            </div>

            <div className="movie-language">
              <span>RU</span>
            </div>
            <div className="movie-claimer-age">
              <span>6+</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Movie;
