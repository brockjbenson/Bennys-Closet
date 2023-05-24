import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import Nav from "../../Shared/Nav/Nav";
import { BsArrowUpRight } from "react-icons/bs";

function LandingPage() {
  const history = useHistory();

  return (
    <div className="container">
      <Nav />
      <div className="welcome-area">
        <div className="welcome-message">
          <h1>Build your new Wardrobe</h1>
          <p>
            Find secondhand clothing to complete your new look, at an affordable
            price. Start shopping now
          </p>

          <button className="welcome-message-btn-1">SHOP NOW</button>
        </div>
        <div className="landing-images">
          <img
            className="landing-img-1"
            src={require("./images/model-1.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
