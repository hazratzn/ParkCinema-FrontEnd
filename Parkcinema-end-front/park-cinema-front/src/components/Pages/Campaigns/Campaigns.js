import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Order from "../../common/Order";
import Advertisement from "../../layout/Advertisement/Advertisment";
import CinemaSlider from "../Branches/CinemaSlider";
import superDay from "../../../images/super-gun.png";
import forStudents from "../../../images/imax-telebeler-ucun.png";

const Campaigns = () => {
  return (
    <>
      <CinemaSlider />
      <Container>
        <h1 className="cinemas-title">Kinoteatrlar</h1>
        <Row>
          <Col md={8}>
            <Row></Row>
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
          <Col md={4}>
            <Order />
            <Advertisement />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Campaigns;
