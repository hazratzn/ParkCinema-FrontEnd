import Home from "./components/Pages/Home/Home";
import Movie from "./components/common/Movie";
import Navbar from "./components/layout/Navbar/Navbar";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Kino" component={Movie} />
      </Switch>
    </>
  );
};

export default App;
