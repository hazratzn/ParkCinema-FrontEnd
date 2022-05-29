import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Movie from "../../../common/Movie";
import "./index.scss";
import axios from "axios";
import { Form } from "react-bootstrap";
import Advertisement from "../../../layout/Advertisement/Advertisment";
import superDay from "../../../../images/super-gun.png";
import forStudents from "../../../../images/imax-telebeler-ucun.png";
import { moviesApi } from "../../../../api/moviesAPI";

const Movies = () => {
  const [movies, setMovies] = React.useState([]);
  const [toggleTab, setToggleTab] = React.useState(1);
  const [selectHall, setSelectHall] = React.useState(1);
  const [selectLanguage, setSelectLanguage] = React.useState(0);
  const [filterMovie, setFilterMovie] = React.useState({
    format: "",
    branchId: "",
    language: "",
  });

  React.useEffect(() => {
    moviesApi.getMovies().then((res) => setMovies(res.data));
  }, []);

  React.useEffect(() => {
    axios
      .get("https://localhost:44300/api/Movies/GetFilteredMovies", {
        params: {
          format: filterMovie.format,
          branchId: filterMovie.branchId,
          language: filterMovie.language,
        },
      })
      .then((res) => setMovies(res.data));
  }, [filterMovie]);

  const handleFilm = (e) => {
    setFilterMovie({ ...filterMovie, branchId: e.target.value });
  };

  return (
    <Container>
      <Row>
        <Col md={9}>
          <div className="main-buttons">
            <div
              className={
                toggleTab === 1 ? "filter-button active-tab" : "filter-button"
              }
              onClick={() => {
                setToggleTab(1);
              }}
            >
              Bu gün
            </div>
            <div
              className={
                toggleTab === 2 ? "filter-button active-tab" : "filter-button"
              }
              onClick={() => {
                setToggleTab(2);
              }}
            >
              Tezliklə
            </div>
            <div
              className={
                toggleTab === 3 ? "filter-button active-tab" : "filter-button"
              }
              onClick={() => {
                setToggleTab(3);
              }}
            >
              Cədvəl
            </div>
          </div>

          <div className="main-movies">
            <div className="filtering-content">
              <div
                className={
                  selectHall === 1 ? "filter-hall active-hall" : "filter-hall"
                }
                onClick={() => {
                  setSelectHall(1);
                  setFilterMovie({
                    format: "",
                    branchId: "",
                    language: "",
                  });
                }}
              >
                Hamısı
              </div>
              <div
                className={
                  selectHall === 2
                    ? "filter-hall imax-icon active-hall"
                    : "filter-hall imax-icon"
                }
                onClick={() => {
                  setSelectHall(2);
                  setFilterMovie({ ...filterMovie, format: "imax" });
                }}
              >
                İMAX
              </div>
              <div
                className={
                  selectHall === 3
                    ? "filter-hall laser-icon active-hall"
                    : "filter-hall laser-icon "
                }
                onClick={() => {
                  setSelectHall(3);
                  setFilterMovie({ ...filterMovie, format: "laser" });
                }}
              >
                LaseR
              </div>
              <div
                className={
                  selectHall === 4
                    ? "filter-hall dolby-icon  active-hall"
                    : "filter-hall dolby-icon"
                }
                onClick={() => {
                  setSelectHall(4);
                  setFilterMovie({ ...filterMovie, format: "dolbyatmos" });
                }}
              >
                Dolby
              </div>
              <div
                className={
                  selectHall === 5 ? "filter-hall active-hall" : "filter-hall"
                }
                onClick={() => {
                  setSelectHall(5);
                  setFilterMovie({ ...filterMovie, format: "3D" });
                }}
              >
                3D
              </div>
              <div
                className={
                  selectHall === 6 ? "filter-hall active-hall" : "filter-hall"
                }
                onClick={() => {
                  setSelectHall(6);
                  setFilterMovie({ ...filterMovie, format: "2D" });
                }}
              >
                2D
              </div>
            </div>
            <div className="movies-options">
              <Form.Select
                aria-label="Default select example"
                className="select-cinema"
                onChange={handleFilm}
              >
                <option className="main-movie-title">Kinoteatrlar</option>
                <option value="1">Park Bulvar</option>
                <option value="3">Metro Park</option>
                <option value="4">Flame Towers</option>
                <option value="5">Zaqulba</option>
              </Form.Select>
            </div>
            <div className="filter-language-movies">
              <div
                className={
                  selectLanguage === 1
                    ? "filter-language active-language"
                    : "filter-language "
                }
                onClick={() => {
                  setSelectLanguage(1);
                  setFilterMovie({ ...filterMovie, language: "en" });
                }}
              >
                Ingilis dilində filmlər
              </div>
              <div
                className={
                  selectLanguage === 2
                    ? "filter-language active-language"
                    : "filter-language"
                }
                onClick={() => {
                  setSelectLanguage(2);
                  setFilterMovie({ ...filterMovie, language: "tr" });
                }}
              >
                Türk dilində filmlər
              </div>
            </div>
            <Row>
              {movies.map((movie) => (
                <Col md={4} className="movie" key={movie.id}>
                  <Movie key={movie.id} movie={movie} />
                </Col>
              ))}
            </Row>
          </div>

          <div className="campaign-offer">
            <div className="super-day">
              <img src={superDay} alt="super gun shekil" />
              <p>Super gün</p>
            </div>
            <div className="for-students">
              <img src={forStudents} alt="telebe kampanya shekil" />
              <p>
                IMAX tələbələr
                <br></br>
                üçün
              </p>
            </div>
          </div>
        </Col>
        <Col md={3} className="home-logos">
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
          <Advertisement />
        </Col>
      </Row>
    </Container>
  );
};
export default Movies;
