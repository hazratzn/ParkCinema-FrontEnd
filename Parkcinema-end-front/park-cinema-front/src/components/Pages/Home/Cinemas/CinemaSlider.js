import React from "react";
import { Row } from "react-bootstrap";
import "./index.scss";
import image from "../../../../images/cinema-bg.jpg";
import topImageShadow from "../../../../images/top-shadow.png";

const CinemaSlider = () => {
  return (
    <div>
      <Row>
        <div className="cinemas-header-slider">
          <img src={image} alt="Cinema" className=" slider-image img-fluid" />
          <div src={topImageShadow} className="shadow-top"></div>
          <div className="shadow-bottom"></div>
        </div>
      </Row>
    </div>
  );
};
export default CinemaSlider;
