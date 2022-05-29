import React from "react";
import ImaxCover from "./ImaxCover";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import { makeStyles } from "@mui/styles";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./index.scss";
import Order from "../../common/Order";
import axios from "axios";
import Movie from "../../common/Movie";
import Advertisement from "../../layout/Advertisement/Advertisment";
import ImaxTechnologie from "./ImaxTechnologie";
import ImaxDetail from "./ImaxDetail";
import Offer from "../../common/Offer";
import { branchAPI } from "../../../api/branchAPI";

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: "red",
  },
  style: {
    marginTop: "180px",
  },
}));
const Imax = () => {
  const classes = useStyles();
  const [active, setActive] = React.useState(1);
  const [formatMovies, setFormatMovies] = React.useState();
  const [hallDetail, setHallDetail] = React.useState();

  React.useEffect(() => {
    axios
      .get("https://localhost:44300/api/Movies/GetMoviesByFormat", {
        params: { format: "imax" },
      })
      .then((res) => setFormatMovies(res.data));
    branchAPI.getBranchDetail(4).then((res) => setHallDetail(res.data));
  }, []);

  return (
    <>
      <ImaxCover />
      <Container>
        <Row>
          <Col md={12}>
            <Row>
              <Col md={9}>
                <h1 className="imax-title">IMAX</h1>
                <TabsUnstyled defaultValue={0}>
                  <TabsListUnstyled>
                    <TabUnstyled
                      className={active === 1 && classes.active}
                      onClick={() => {
                        setActive(1);
                      }}
                    >
                      Cədvəl
                    </TabUnstyled>
                    <TabUnstyled
                      className={active === 2 && classes.active}
                      onClick={() => {
                        setActive(2);
                      }}
                    >
                      Texnologiya
                    </TabUnstyled>
                    <TabUnstyled
                      className={active === 3 && classes.active}
                      onClick={() => {
                        setActive(3);
                      }}
                    >
                      Kinoteatr
                    </TabUnstyled>
                  </TabsListUnstyled>

                  <TabPanelUnstyled value={0}>
                    <div className="movie-sessions imax-session">
                      <div className="movie-session-title">
                        <Form.Select
                          aria-label="Default select example"
                          className="select-cinema-detail imax-select"
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
                    <Col md={4}>
                      {formatMovies?.map((movie) => (
                        <Movie movie={movie} key={movie.id} />
                      ))}
                    </Col>
                  </TabPanelUnstyled>
                  <TabPanelUnstyled value={1}>
                    <ImaxTechnologie />
                  </TabPanelUnstyled>
                  <TabPanelUnstyled value={2}>
                    <ImaxDetail detail={hallDetail} />
                  </TabPanelUnstyled>
                </TabsUnstyled>
              </Col>
              <Col md={3}>
                <Order />
                <Advertisement style={classes.style} />
              </Col>
            </Row>
          </Col>
          <Offer />
        </Row>
      </Container>
    </>
  );
};

export default Imax;
