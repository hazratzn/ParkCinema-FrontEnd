import React from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import "./index.scss";

const SimpleSlider = () => {
  const [dot, Setdot] = React.useState("slick-dot");
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
      <div className={dot} onClick={Setdot("slick-dot active")}>
        {" "}
      </div>
    ),
  };

  return (
    <div className="Slider">
      <Slider {...settings}>
        <div className="intro-movie">
          <div className="shadow-top"></div>
          <Container>
            <div className="movie-detail">
              <h2 className="Title">Məhəbbət səsi</h2>
              <div className="SubTitle">23 dekabr</div>
            </div>
            <button className="ticketBtn">Bilet al</button>
          </Container>
          <div className="shadow-bottom"></div>
        </div>
        <div className="intro-movie second">
          <div className="shadow-top"></div>
          <Container>
            <div className="movie-detail">
              <h2 className="Title">King's man:Başlanğıc</h2>
              <div className="SubTitle">27 fevral</div>
            </div>
            <button className="ticketBtn">Bilet al</button>
          </Container>
          <div className="shadow-bottom"></div>
        </div>
        <div className="intro-movie third">
          <div className="shadow-top"></div>
          <Container>
            <div className="movie-detail">
              <h2 className="Title">Məhəbbət səsi</h2>
              <div className="SubTitle">23 dekabr</div>
            </div>
            <button className="ticketBtn">Bilet al</button>
          </Container>
          <div className="shadow-bottom"></div>
        </div>
        <div className="intro-movie fourth">
          <div className="shadow-top"></div>
          <Container>
            <div className="movie-detail">
              <h2 className="Title">Vahimə Xiyabanı</h2>
              <div className="SubTitle">21 Yanvar</div>
            </div>
            <button className="ticketBtn">Bilet al</button>
          </Container>
          <div className="shadow-bottom"></div>
        </div>
        <div className="intro-movie five">
          <div className="shadow-top"></div>
          <Container>
            <div className="movie-detail">
              <h2 className="Title">Məhəbbət səsi</h2>
              <div className="SubTitle">23 dekabr</div>
            </div>
            <button className="ticketBtn">Bilet al</button>
          </Container>
          <div className="shadow-bottom"></div>
        </div>
        <div className="intro-movie six">
          <div className="shadow-top"></div>
          <Container>
            <div className="movie-detail">
              <h2 className="Title">Məhəbbət səsi</h2>
              <div className="SubTitle">23 dekabr</div>
            </div>
            <button className="ticketBtn">Bilet al</button>
          </Container>
          <div className="shadow-bottom"></div>
        </div>
        <div className="intro-movie seven"></div>
        <div className="intro-movie eight">
          <div className="shadow-top"></div>
          <Container>
            <div className="movie-detail">
              <h2 className="Title">Məhəbbət səsi</h2>
              <div className="SubTitle">23 dekabr</div>
            </div>
            <button className="ticketBtn">Bilet al</button>
          </Container>
          <div className="shadow-bottom"></div>
        </div>
        <div className="intro-movie nine">
          <div className="shadow-top"></div>
          <Container>
            <div className="movie-detail">
              <h2 className="Title">Məhəbbət səsi</h2>
              <div className="SubTitle">23 dekabr</div>
            </div>
            <button className="ticketBtn">Bilet al</button>
          </Container>
          <div className="shadow-bottom"></div>
        </div>
        <div className="intro-movie ten">
          <div className="shadow-top"></div>
          <Container>
            <div className="movie-detail">
              <h2 className="Title">Məhəbbət səsi</h2>
              <div className="SubTitle">23 dekabr</div>
            </div>
            <button className="ticketBtn">Bilet al</button>
          </Container>
          <div className="shadow-bottom"></div>
        </div>
        <div className="intro-movie eleven">
          <div className="shadow-top"></div>
          <Container>
            <div className="movie-detail">
              <h2 className="Title">Məhəbbət səsi</h2>
              <div className="SubTitle">23 dekabr</div>
            </div>
            <button className="ticketBtn">Bilet al</button>
          </Container>
          <div className="shadow-bottom"></div>
        </div>
        <div className="intro-movie twelve">
          <div className="shadow-top"></div>
          <Container>
            <div className="movie-detail">
              <h2 className="Title">Məhəbbət səsi</h2>
              <div className="SubTitle">23 dekabr</div>
            </div>
            <button className="ticketBtn">Bilet al</button>
          </Container>
          <div className="shadow-bottom"></div>
        </div>
        <div className="intro-movie thirteen">
          <div className="shadow-top"></div>
          <Container>
            <div className="movie-detail">
              <h2 className="Title">Məhəbbət səsi</h2>
              <div className="SubTitle">23 dekabr</div>
            </div>
            <button className="ticketBtn">Bilet al</button>
          </Container>
          <div className="shadow-bottom"></div>
        </div>
      </Slider>
    </div>
  );
};
export default SimpleSlider;
