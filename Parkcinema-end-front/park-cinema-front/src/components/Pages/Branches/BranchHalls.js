import React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import { makeStyles } from "@mui/styles";
import { Col, Row } from "react-bootstrap";
import Advertisement from "../../layout/Advertisement/Advertisment";
import firstHall from "../../../images/Hall1.jpg";
import HallDetail from "./HallDetail";
const useStyles = makeStyles((theme) => ({
  active: {
    color: "red",
  },
}));
const BranchHalls = ({ halls }) => {
  const [active, setActive] = React.useState();

  const classes = useStyles();
  const selectedHall = halls?.find((item) => item.id === active);

  React.useEffect(() => {
    if (halls && halls.length > 0) {
      setActive(halls[0].id);
    }
  }, [halls]);

  return (
    <div className="hall-tabs">
      <Row>
        <Col md={9}>
          <TabsUnstyled defaultValue={0}>
            <TabsListUnstyled>
              {halls?.map((hall) => (
                <TabUnstyled
                  className={active === hall.id && classes.active}
                  onClick={() => {
                    setActive(hall.id);
                  }}
                >
                  {hall.name}
                </TabUnstyled>
              ))}
            </TabsListUnstyled>
          </TabsUnstyled>
          {selectedHall && <HallDetail hall={selectedHall} />}
        </Col>
        <Col md={3}>
          <Advertisement />
        </Col>
      </Row>
    </div>
  );
};

export default BranchHalls;
