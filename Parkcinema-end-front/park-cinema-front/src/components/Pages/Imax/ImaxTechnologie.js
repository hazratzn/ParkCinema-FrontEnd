import React from "react";
import imaxTecnology from "../../../images/IMAX-texnoligya1.jpg";
import imaxTecnology2 from "../../../images/imax-technologie2.jpg";
import imaxTecnology3 from "../../../images/imax-technologie3.jpg";
import axios from "axios";

const ImaxTechnologie = () => {
  const [tecnologieData, setTechnologieData] = React.useState();

  const firstSentence = tecnologieData?.hallDescription.split(".")[0];
  const secondSentence = tecnologieData?.hallDescription.split(".")[1];
  const restSecondSentence = tecnologieData?.hallDescription.split(".")[2];
  const thirdSentence = tecnologieData?.hallDescription.split(".")[3];

  React.useEffect(() => {
    axios
      .get("https://localhost:44300/api/Imax/GetImaxDetailInfo")
      .then((res) => setTechnologieData(res.data))
      .catch(console.log("error"));
  }, []);
  return (
    <div className="hall-info">
      <div className="imax-tecnologie-info">
        <h1 className="title-imax-technologie">{tecnologieData?.mainTitle}</h1>
        <div className="technologie-image">
          <img src={imaxTecnology} alt="imax texnologiyasi" />
        </div>
        <div className="technologie-description">
          {tecnologieData?.mainDescription}
        </div>
      </div>
      <div className="today-imax-technologie">
        <h2>{tecnologieData?.technologieTodayTitle}</h2>
        <div>
          <img src={imaxTecnology2} alt="imax technologie" />
        </div>
      </div>
      <div className="imagine-unlimited">
        <h3>{tecnologieData?.technologieDescribedTitle}</h3>
        <p>{tecnologieData?.technologieDescribedDescription}</p>
      </div>
      <div className="imagine-unlimited">
        <h3>{tecnologieData?.cleanAustiticSystem}</h3>
        <p>{tecnologieData?.cleanAustiticSystemDescription}</p>
      </div>
      <div className="imagine-unlimited">
        <h3>{tecnologieData?.screenAboutTitle}</h3>
        <p>{tecnologieData?.screenAboutDescription}</p>
      </div>
      <div className="imax-hall-description">
        <h2 className="imax-hall-info">IMAX zalı</h2>
        <div className="imax-hall-image">
          <img src={imaxTecnology3} alt="imax hall" />
        </div>
        <p>{firstSentence}</p>
        <p>{`${secondSentence}${restSecondSentence}`}</p>
        <p>{thirdSentence}</p>
      </div>
    </div>
  );
};

export default ImaxTechnologie;
