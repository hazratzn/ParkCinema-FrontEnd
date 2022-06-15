import React from "react";
import { Col, Row,Container } from "react-bootstrap";
import cinemaImg from "../../../../images/parkbulvar.jpg";
import "./index.scss";

const Cinema=()=>{
    return(
        <>
         <div className="cinema-wraper">
            <Container>
            <Row>
            <Col md={8} className="cinema-content">
                <div className="cinema">
                <div className="cinema-item">
                    <div className="cinema-img-holder">
                    <img src={cinemaImg} alt="cinema" className=" cinema-image img-fluid"/>
                    <a className="cinema-title">Park Bulvar</a>
                    </div>
                    <div className="detail">
                        <div>
                            <span>Unvan: </span>
                            Neftçilər pr-ti 78, Park Bulvar Əyləncə Mərkəzi
                        </div>
                        <div>
                            <span>Telefon: </span>
                            "+994 12 598 74 14, 119"
                        </div>
                        <div>
                            <span>Is rejimi: </span>
                            "10:00 - 01:00"
                        </div>
                    </div>
                </div>
                </div>
            </Col>
            <Col md={4} className="cinemas-sidebar">
            </Col>
            </Row>
            </Container>
        </div>
        </>
       
        
    );
};

export default Cinema;
