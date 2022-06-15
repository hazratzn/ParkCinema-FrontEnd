import axios from "axios";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CinemaSlider from "../Cinemas/CinemaSlider";
import { useParams } from "react-router-dom";

const MovieDetail = (props) => {
  const [movieDetail, setMovieDetail] = React.useState({});
  const [moreMovies, setMoreMovies] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`https://localhost:44300/api/Movies/GetMovieDetail/${id}`)
      .then((res) => setMovieDetail(res.data));
  }, [id]);

  React.useEffect(() => {
    axios
      .get("https://localhost:44300/api/Movies/GetMovies")
      .then((res) => setMoreMovies(res.data));
  }, []);

  console.log(movieDetail);

  return (
    <>
      <CinemaSlider />
      <Container>
        <div className="movie-title">
          <h2>{movieDetail?.name}</h2>
        </div>
        <div className="movie-sessions">
          <div className="hall-row"></div>
        </div>
        <Row>
          <Col md={9}>
            <p className="movie-description">{movieDetail?.description}</p>
            <div className="video-trailer">
              <iframe
                src={movieDetail?.videoUrl}
                style={{ height: "400px", width: "900px" }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
              ></iframe>
            </div>
            <div className="more-movies">
              {moreMovies.map((movie) => (
                <div className="movie-item">
                  <div className="movie-image">
                    <img
                      src={movie.image}
                      className="img-fluid"
                      alt="movie-item"
                    />
                  </div>
                  <span>{movie.name}</span>
                </div>
              ))}
            </div>
          </Col>
          <Col md={3}>
            <ul className="social-logos">
              <li className="facebook-logo">
                <a
                  href="https://www.facebook.com/ParkCinema"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                </a>
              </li>
              <li className="twitter-logo">
                <a
                  href="https://twitter.com/park_cinema"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                </a>
              </li>
              <li className="youtube-logo">
                <a
                  href="https://www.youtube.com/channel/UC0NJN0gCCx_DbJlkPfD30Ag/feed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                </a>
              </li>
            </ul>
            <div className="order-ticket">
              <h3>Biletlərin sifarişi</h3>
              <h4>
                <span>+994 12</span> 598 74 14
              </h4>
              <h4>
                119 <span>( ödənişli )</span>
              </h4>
            </div>
            <div className="movie-detail-image">
              <img src={movieDetail?.image} alt="movie" className="img-fluid" />
            </div>
            <div className="movie-detail">
              <ul>
                <span className="detail-title">Ölkə:</span>
                <li>{movieDetail?.country}</li>
                <span className="detail-title">İl:</span>
                <li>{movieDetail?.year}</li>
                <span className="detail-title">Rejissor:</span>
                <li>{movieDetail?.director}</li>
                <span className="detail-title">Janr:</span>
                <li>{movieDetail?.genre}</li>
                <span className="detail-title">Rollarda:</span>
                <li>{movieDetail?.actor}</li>
                <span className="detail-title">Sürəklilik:</span>
                <li>{movieDetail?.duration}</li>
                <span className="detail-title">Yaş məhdudiyyəti:</span>
                <li>{movieDetail?.claimerAge} + </li>
                <span className="detail-title">Ölkə:</span>
                <li>{movieDetail?.country}</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetail;
