import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Movie from "../../../common/Movie";
import "./index.scss";
import axios from "axios";
import { Form } from "react-bootstrap";
import Advertisement from "../../../layout/Advertisement/Advertisment";

const Movies = () => {
  const [movies, setMovies] = React.useState([]);
  const [toggleTab, setToggleTab] = React.useState(1);
  const [selectHall, setSelectHall] = React.useState(1);
  const [selectLanguage, setSelectLanguage] = React.useState(0);
  console.log(movies);

  React.useEffect(() => {
    axios
      .get("https://localhost:44300/api/Movies/GetMovies")
      .then((res) => setMovies(res.data));
  }, []);

  console.log(movies);
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
                }}
              >
                2D
              </div>
            </div>
            <div className="movies-options">
              <Form.Select
                aria-label="Default select example"
                className="select-cinema"
              >
                <option className="main-movie-title">Kinoteatrlar</option>
                <option value="Park Bulvar">Park Bulvar</option>
                <option value="Metro Park">Metro Park</option>
                <option value="Flame Towers">Flame Towers</option>
                <option value="Zaqulba">Zaqulba</option>
                <option value="Şahdağ">Şahdağ</option>
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
        </Col>
        <Col md={3}>
          <Advertisement />
        </Col>
      </Row>
    </Container>
  );
};
export default Movies;
