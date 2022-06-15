import Home from "./components/Pages/Home/Home";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import MovieDetail from "./components/Pages/Home/Movies/MovieDetail";
import { Switch, Route } from "react-router-dom";
import Cinemas from "./components/Pages/Home/Cinemas/Cinemas";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Cinemas" component={Cinemas} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
