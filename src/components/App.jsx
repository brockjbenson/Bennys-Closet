import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "./Shared/Nav/Nav";
import Footer from "./Shared/Footer/Footer";

import AboutPage from "./Pages/AboutPage/AboutPage";

import InfoPage from "./Pages/InfoPage/ContactPage";
import LandingPage from "./Pages/LandingPage/LandingPage";

import "./App.css";
import ClothingPage from "./Pages/ClothingPage/ClosetPage";
import ClosetPage from "./Pages/ClothingPage/ClosetPage";
import ContactPage from "./Pages/InfoPage/ContactPage";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          <Route exact path="/home">
            <LandingPage />
          </Route>

          <Route exact path="/closet">
            <ClosetPage />
          </Route>

          <Route exact path="/contact">
            <ContactPage />
          </Route>

          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
