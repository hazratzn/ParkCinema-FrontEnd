import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import parkbulvar1 from "../../../images/parkbulvatr_resized1.jpg";
import parkbulvar2 from "../../../images/ParkBulvar_thumb2.jpg";
import parkbulvar3 from "../../../images/1_thumb3.jpg";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

const ImaxDetail = ({ detail }) => {
  return (
    <div className="imax-hall-section">
      <Row>
        <Carousel>
          <div>
            <img src={parkbulvar1} alt="shekil" className="img-fluid" />
          </div>
          <div>
            <img src={parkbulvar2} alt="shekil" className="img-fluid" />
          </div>
          <div>
            <img src={parkbulvar3} alt="shekil" className="img-fluid" />
          </div>
          <div>
            <img src={parkbulvar3} alt="shekil" className="img-fluid" />
          </div>
        </Carousel>
        <div className="branchDetail">
          <Row>
            <Col md={4}>
              <div className="detailItem">
                <h5>Zallarin sayi</h5>
                <p className="item">{detail?.hallCount}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="detailItem">
                <h5>Akustik sistemi</h5>
                <p className="item">{detail?.acusticSystem}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="detailItem">
                <h5>3D</h5>
                <p className="item">{detail?.hallFormatType}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="detailItem">
                <h5>Barın çeşidi</h5>
                <p className="item">{detail?.barsChoose}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="detailItem">
                <h5>Proyektorlar</h5>
                <p className="item">{detail?.hallCount}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default ImaxDetail;
