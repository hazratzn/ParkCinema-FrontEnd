import React from "react";
import "./index.scss";
import adverstimentAnkaImage from "../../../images/anka.png";
import adverstimentOfferImage from "../../../images/aside-image.png";

const Advertisement = (props) => {
  const { style } = props;
  return (
    <>
      <div className={style ? `img-holder ${style}` : "img-holder"}>
        <img src={adverstimentOfferImage} alt="teklif shekili" />
        <img src={adverstimentAnkaImage} alt="kino shekili" />
      </div>
    </>
  );
};

export default Advertisement;
