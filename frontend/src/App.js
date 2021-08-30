import About from "./components/About";
import Portfolio from "./components/Portfolio";
import "./components/Home.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


