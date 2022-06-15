import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { branchAPI } from "../../../api/branchAPI";
import CinemaSlider from "./CinemaSlider";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import BranchSchedule from "./BranchSchedule";
import { sessionAPI } from "../../../api/sessionAPI";
import { makeStyles } from "@mui/styles";
import BranchInfo from "./BranchInfo";
import { hallAPI } from "../../../api/hallAPI";
import BranchHalls from "./BranchHalls";
import Order from "../../common/Order";
import Offer from "../../common/Offer";

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: "red",
  },
}));

const BranchDetail = () => {
  const classes = useStyles();
  const [active, setActive] = React.useState(1);
  const [branchMovies, setBranchMovies] = React.useState();
  const [sessionBranch, setSessionBranch] = React.useState();
  const [branchInfo, setbranchInfo] = React.useState();
  const [halls, setHalls] = React.useState();
  console.log(branchMovies);
  const { id } = useParams();
  console.log(id);
  React.useEffect(() => {
    branchAPI.getBranchDetail(id).then((res) => setbranchInfo(res.data));
    branchAPI.getMoviesByBranchId(id).then((res) => setBranchMovies(res.data));
    hallAPI.getHallsById(id).then((res) => setHalls(res.data));
    sessionAPI
      .getSessionByBRanchId(id)
      .then((res) => setSessionBranch(res.data))
      .catch(console.log("error"));
  }, [id]);
  return (
    <>
      <CinemaSlider />
      <Container>
        <Row>
          <Col md={9}>
            <div className="branch-title">
              <h1>
                Park Cinema {sessionBranch ? sessionBranch[0].branchName : null}
              </h1>
              <h4>
                Neftçilər pr-ti 78, Park Bulvar Əyləncə Mərkəzi ,
                <a href="/" className="map-link">
                  Xəritədə bax
                </a>
              </h4>
            </div>
          </Col>
          <Col md={3}>
            <Order />
          </Col>
          <TabsUnstyled defaultValue={0}>
            <TabsListUnstyled>
              <TabUnstyled
                className={active === 1 && classes.active}
                onClick={() => {
                  setActive(1);
                }}
              >
                Cədvəl
              </TabUnstyled>
              <TabUnstyled
                className={active === 2 && classes.active}
                onClick={() => {
                  setActive(2);
                }}
              >
                Kinoteatr
              </TabUnstyled>
              <TabUnstyled
                className={active === 3 && classes.active}
                onClick={() => {
                  setActive(3);
                }}
              >
                Zallar
              </TabUnstyled>
              <TabUnstyled
                className={active === 4 && classes.active}
                onClick={() => {
                  setActive(4);
                }}
              >
                Aksiyalar
              </TabUnstyled>
            </TabsListUnstyled>
            <TabPanelUnstyled value={0}>
              <BranchSchedule movies={branchMovies} sessions={sessionBranch} />
            </TabPanelUnstyled>
            <TabPanelUnstyled value={1}>
              <BranchInfo info={branchInfo} />
            </TabPanelUnstyled>
            <TabPanelUnstyled value={2}>
              <BranchHalls halls={halls} />
            </TabPanelUnstyled>
            <TabPanelUnstyled value={3}></TabPanelUnstyled>
          </TabsUnstyled>
        </Row>
        <Offer />
      </Container>
    </>
  );
};

export default BranchDetail;
