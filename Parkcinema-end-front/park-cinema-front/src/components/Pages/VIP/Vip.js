import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Order from "../../common/Order";
import Advertisement from "../../layout/Advertisement/Advertisment";
import VipCover from "./VipCover";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import superDay from "../../../images/super-gun.png";
import forStudents from "../../../images/imax-telebeler-ucun.png";
import { makeStyles } from "@mui/styles";
import VipDetail from "./VipDetail";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: "red",
  },
  style: {
    marginTop: "180px",
  },
}));

const Vip = () => {
  const classes = useStyles();
  const [active, setActive] = React.useState(1);
  return (
    <>
      <VipCover />
      <Container>
        <Row>
          <Col md={12}>
            <Row>
              <Col md={9}>
                <h1 className="vip-title">VIP Lounge</h1>
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
                      VIP Lounge
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
                      {/* {formatMovies?.map((movie) => (
                        <Movie movie={movie} />
                      ))} */}
                    </Col>
                  </TabPanelUnstyled>
                  <TabPanelUnstyled value={1}>
                    <VipDetail />
                  </TabPanelUnstyled>
                </TabsUnstyled>
              </Col>

              <Col md={3}>
                <Order />
                <Advertisement style={classes.style} />
              </Col>
            </Row>
          </Col>
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
        </Row>
      </Container>
    </>
  );
};

export default Vip;
