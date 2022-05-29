import React from "react";
import { Row } from "react-bootstrap";
import topImageShadow from "../../../images/top-shadow.png";
import VipImage from "../../../images/vip-lounge2.jpg";

const VipCover = () => {
  return (
    <>
      <Row>
        <div className="cinemas-header-slider vip-slider">
          <img src={VipImage} alt="Cinema" className="slider-image img-fluid" />
          <div src={topImageShadow} className="shadow-top"></div>
          <div className="shadow-bottom"></div>
        </div>
      </Row>
    </>
  );
};

export default VipCover;
