import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.scss";
import CinemaSlider from "./CinemaSlider";
import Branch from "./Branch";
import Advertisement from "../../layout/Advertisement/Advertisment";
import { branchAPI } from "../../../api/branchAPI";
import Order from "../../common/Order";
import superDay from "../../../images/super-gun.png";
import forStudents from "../../../images/imax-telebeler-ucun.png";

const Branches = () => {
  const [branches, setBranches] = React.useState([]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    (async function fetchMyApi() {
      try {
        let branchesData = await (await branchAPI.getBranches()).data;
        setBranches(branchesData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <CinemaSlider />
      <Container>
        <h1 className="cinemas-title">Kinoteatrlar</h1>
        <Row>
          <Col md={8}>
            <Row>
              {branches.map((branch, idx) => (
                <Col md={6} key={idx}>
                  <Branch key={branch.id} branch={branch} />
                </Col>
              ))}
            </Row>
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

export default Branches;
