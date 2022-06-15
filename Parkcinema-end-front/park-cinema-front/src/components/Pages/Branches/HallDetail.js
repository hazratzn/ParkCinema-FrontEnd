import React from "react";
import { Col, Row } from "react-bootstrap";
import firstHall from "../../../images/Hall1.jpg";
import "./index.scss";

const HallDetail = ({ hall }) => {
  console.log(hall);
  return (
    <>
      <div className="hall-image">
        <img src={firstHall} alt="first hall" className="img-fluid " />
      </div>
      <div className="hall-detail">
        <Row>
          <Col md={4}>
            <div className="detailItem">
              <h5>Oturacaqların sayı</h5>
              <p className="item">{hall.seatNumbers}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="detailItem">
              <h5>Akustik sistemi</h5>
              <p className="item">{hall.acusticSystem}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="detailItem">
              <h5>3D</h5>
              <p className="item">{hall.hallFormatD}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="detailItem">
              <h5>Barın çeşidi</h5>
              <p className="item">{hall.barsChoose}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="detailItem">
              <h5>Kinoproyektlər</h5>
              <p className="item">{hall.filmProject}</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HallDetail;
