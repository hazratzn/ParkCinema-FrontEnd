import React from "react";
import Home from "./components/Pages/Home/Home";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import Cinemas from "./components/Pages/Branches/Branches";
import CinemaDetail from "./components/Pages/Branches/BranchDetail";
import MovieDetail from "./components/Pages/Home/Movies/MovieDetail";
import Imax from "./components/Pages/Imax/Imax";
import Laser from "./components/Pages/Laser/Laser";
import Vip from "./components/Pages/VIP/Vip";
import Campaigns from "./components/Pages/Campaigns/Campaigns";
import AboutUs from "./components/Pages/AboutUs.js/AboutUs";
import AdvertisingOffer from "./components/Pages/AdvertisingOffer/AdvertisingOffer";
import Contact from "./components/Pages/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cinemas" component={Cinemas} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/branch/:id" component={CinemaDetail} />
        <Route path="/imax" component={Imax} />
        <Route path="/laser" component={Laser} />
        <Route path="/vip" component={Vip} />
        <Route path="/campaigns" component={Campaigns} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/advertisingoffer" component={AdvertisingOffer} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
