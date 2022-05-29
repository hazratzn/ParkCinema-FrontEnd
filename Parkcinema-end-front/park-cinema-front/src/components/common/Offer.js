import React from "react";
import superDay from "../../images/super-gun.png";
import forStudents from "../../images/imax-telebeler-ucun.png";

const Offer = () => {
  return (
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
  );
};

export default Offer;
