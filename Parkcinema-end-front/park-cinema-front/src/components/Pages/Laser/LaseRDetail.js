import axios from "axios";
import React from "react";
import laserImage from "../../../images/laser-az.png";

const LaseRDetail = ({ laserInfo }) => {
  const [projectBenefits, setProjectBenefits] = React.useState();
  var removed = projectBenefits?.splice(-1);

  const firstSentence = laserInfo?.description.split(".")[0];
  const restFirst = laserInfo?.description.split(".")[1];
  const secondSentence = laserInfo?.description.split(".")[2];
  const restSecond = laserInfo?.description.split(".")[3];
  const thirdSentence = laserInfo?.description.split(".")[4];
  const restThird = laserInfo?.description.split(".")[5];
  const fourthSentence = laserInfo?.description.split(".")[6];
  const restFourth = laserInfo?.description.split(".")[7];

  const list = laserInfo?.projectBenefits.split(",").pop();

  React.useEffect(() => {
    axios
      .get("https://localhost:44300/api/Laser/GetLaserInfo")
      .then((res) => setProjectBenefits(res.data.projectBenefits.split(",")));
  }, []);

  return (
    <>
      <div className="laser-image">
        <img src={laserImage} alt="laser" />
      </div>
      <div className="laser-description">
        <p>{`${firstSentence}.${restFirst}`}</p>
        <p>{`${secondSentence}.${restSecond}`}</p>
        <p>{`${thirdSentence}.${restThird}`}</p>
        <p>{`${fourthSentence}.${restFourth}`}</p>
        <p>Proyektorun əsas üstünlükləri:</p>
        <ul>
          {projectBenefits?.map((info) => (
            <li>{info}</li>
          ))}
        </ul>
        <p>
          Park Cinema-nın lazer zalında filmi ilk sən izlə, fərqi hiss et və
          təsssüratını sosial şəbəkələrdə paylaş. Sevimli ziyarətçilırimizin
          rəyləri bizim üçün çox önəmlidir.
        </p>
      </div>
    </>
  );
};

export default LaseRDetail;
