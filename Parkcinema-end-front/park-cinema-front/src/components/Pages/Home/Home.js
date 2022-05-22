import React from "react";

import SimpleSlider from "./Slider/Slider";
import Navbar from "./Navbar/Navbar";
import Movies from "./Movies/Movies";
import axios from "axios";

const Home = () => {
  return (
    <>
      <SimpleSlider />
      <Navbar />
      <Movies />
    </>
  );
};
export default Home;

// destructuring
// rest spread operator
// arro decalration fucntion ferqler
// array methods
