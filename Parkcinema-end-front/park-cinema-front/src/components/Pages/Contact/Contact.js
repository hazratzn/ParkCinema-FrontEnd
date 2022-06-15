import React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import { makeStyles } from "@mui/styles";
import { Col, Container, Row } from "react-bootstrap";
import CinemaSlider from "../Branches/CinemaSlider";
import "./index.scss";
import Order from "../../common/Order";
import Advertisement from "../../layout/Advertisement/Advertisment";
import ParkBulvarContact from "./ParkBulvarContact";
import Offer from "../../common/Offer";
const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: "red",
  },
  style: {
    marginTop: "180px",
  },
}));
const Contact = () => {
  const classes = useStyles();
  const [active, setActive] = React.useState(1);
  return (
    <>
      <CinemaSlider />
      <Container>
        <Row>
          <Col md={9}>
            <h1 className="contact-title">Əlaqə</h1>
            <TabsUnstyled defaultValue={0} className="contact-tabs">
              <TabsListUnstyled>
                <TabUnstyled
                  className={active === 1 && classes.active}
                  onClick={() => {
                    setActive(1);
                  }}
                >
                  Park Bulvar
                </TabUnstyled>
                <TabUnstyled
                  className={active === 2 && classes.active}
                  onClick={() => {
                    setActive(2);
                  }}
                >
                  Metro Park
                </TabUnstyled>
                <TabUnstyled
                  className={active === 3 && classes.active}
                  onClick={() => {
                    setActive(3);
                  }}
                >
                  Alov qüllələri kompleksi
                </TabUnstyled>
                <TabUnstyled
                  className={active === 4 && classes.active}
                  onClick={() => {
                    setActive(4);
                  }}
                >
                  Zaqulba
                </TabUnstyled>
              </TabsListUnstyled>

              <TabPanelUnstyled value={0}>
                <ParkBulvarContact />
              </TabPanelUnstyled>
              <TabPanelUnstyled value={1}></TabPanelUnstyled>
              <TabPanelUnstyled value={2}></TabPanelUnstyled>
            </TabsUnstyled>
          </Col>
          <Col md={3}>
            <Order />
            <Advertisement />
          </Col>
        </Row>
        <Offer />
      </Container>
    </>
  );
};

export default Contact;
