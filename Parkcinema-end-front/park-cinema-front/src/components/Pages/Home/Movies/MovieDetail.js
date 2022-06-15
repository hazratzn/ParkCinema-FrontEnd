import axios from "axios";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CinemaSlider from "../../Branches/CinemaSlider";
import moment from "moment";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./index.scss";

const MovieDetail = (props) => {
  const [movieDetail, setMovieDetail] = React.useState({});
  const [moreMovies, setMoreMovies] = React.useState([]);
  const [timeFilter, setTimeFilter] = React.useState([]);
  const [session, setSession] = React.useState([]);
  const sessionTimes = session.map((itemDate) =>
    moment(itemDate.startTime).format("HH:mm ")
  );

  const { id } = useParams();

  const sessionsToRender = sessionTimes.map((session) => {
    const [hour, minutes] = session.split(":");
    const sessionMinutes = Number((hour - 10) * 60) + Number(minutes);
    const leftPosition = ((100 / 960) * sessionMinutes).toFixed(2);

    return {
      leftPosition,
      label: session,
    };
  });

  const todayDate = moment(new Date()).format("MMMM DD");
  const indexOfTodayDate = timeFilter.indexOf(todayDate);
  timeFilter.splice(0, indexOfTodayDate);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchMyAPI() {
      await axios
        .get(`https://localhost:44300/api/Movies/GetMovieDetail/${id}`)
        .then((res) => setMovieDetail(res.data));
      await axios
        .get("https://localhost:44300/api/Movies/GetMovies")
        .then((res) => setMoreMovies(res.data.splice(0, 5)));

      await axios
        .get(`https://localhost:44300/api/Sessions/GetSessionByMovieId/${id}`)
        .then((res) => setSession(res.data));
      await axios
        .get(`https://localhost:44300/api/Sessions/GetSessionByMovieId/${id}`)
        .then((res) => setTimeFilter(res.data[0].times));
      await axios
        .get(`https://localhost:44300/api/Sessions/GetSessionByMovieId/${id}`)
        .then((res) => console.log(res.data));
    }
    fetchMyAPI();
  }, [id]);

  return (
    <>
      <CinemaSlider />
      <Container>
        <div className="movie-title">
          <h2>{movieDetail?.name}</h2>
        </div>
        <div className="movie-sessions">
          <div className="movie-session-title">
            <Form.Select
              aria-label="Default select example"
              className="select-cinema-detail"
            >
              {timeFilter?.map((date) => (
                <option value={date}>{date}</option>
              ))}
            </Form.Select>
            <div className="gradient-session">
              <div className="session-times">
                <span>10:00</span>
                <span>11:00</span>
                <span>12:00</span>
                <span>13:00</span>
                <span>14:00</span>
                <span>15:00</span>
                <span>16:00</span>
                <span>17:00</span>
                <span>18:00</span>
                <span>19:00</span>
                <span>20:00</span>
                <span>21:00</span>
                <span>22:00</span>
                <span>23:00</span>
                <span>00:00</span>
                <span>01:00</span>
                <span>02:00</span>
              </div>
            </div>
          </div>
          <div className="hall-row">
            <div className="hall-title">Park Bulvar</div>
            <div className="hall-session">
              <div className="test">
                <div className="info-session">
                  <span>RUS/Azərbaycanca altyazı ilə</span>
                  <span>Böyuklər:5.50 AZN</span>
                </div>
                {sessionsToRender.map((time) => (
                  <span
                    className="session-time"
                    style={{ left: `${time.leftPosition}%` }}
                  >
                    {time.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Row>
          <Col md={9}>
            <p className="movie-description top-desc">
              {movieDetail?.description}
            </p>

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
            <div className="order-ticket main-order-ticket">
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
