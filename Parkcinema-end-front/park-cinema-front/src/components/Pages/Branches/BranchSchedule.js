import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./index.scss";
import Movie from "../../common/Movie";
// import moment from "moment";
import Advertisement from "../../layout/Advertisement/Advertisment";
const BranchSchedule = ({ movies, sessions }) => {
  console.log(sessions?.map((item) => item.times));

  // const todayDate = moment(new Date()).format("MMMM DD");
  // const indexOfTodayDate = timeFilter.indexOf(todayDate);
  // timeFilter.splice(0, indexOfTodayDate);
  return (
    <div>
      <Row>
        {" "}
        <div className="movie-sessions session-branch">
          <div className="movie-session-title">
            <Form.Select
              aria-label="Default select example"
              className="select-cinema-detail"
            >
              {/* {timeFilter?.map((date) => (
                <option value={date}>{date}</option>
              ))} */}
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
                {/* {sessionsToRender.map((time) => (
                  <span
                    className="session-time"
                    style={{ left: `${time.leftPosition}%` }}
                  >
                    {time.label}
                  </span>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <Col md={9}>
          <Row>
            {movies?.map((movie) => (
              <Col md={4} className="movie" key={movie.id}>
                <Movie key={movie.id} movie={movie} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={3}>
          <Advertisement />
        </Col>
      </Row>
    </div>
  );
};

export default BranchSchedule;
