import axios from "axios";
import React from "react";
import { Row } from "react-bootstrap";
import imax from "../../../images/imax-az.jpg";
import topImageShadow from "../../../images/top-shadow.png";

const ImaxCover = () => {
  const [coverImage, setCoverImage] = React.useState();
  React.useEffect(() => {
    axios
      .get("https://localhost:44300/api/Imax/GetImaxDetailInfo")
      .then((res) => setCoverImage(res.data.coverImage))
      .catch(console.log("error"));
  }, []);
  return (
    <>
      <Row>
        <div className="cinemas-header-slider">
          <img
            src={coverImage}
            alt="Cinema"
            className="slider-image img-fluid"
          />
          <div src={topImageShadow} className="shadow-top"></div>
          <div className="shadow-bottom"></div>
        </div>
      </Row>
    </>
  );
};

export default ImaxCover;
