import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import Nav from "../../Shared/Nav/Nav";
import Footer from "../../Shared/Footer/Footer";

function LandingPage() {
  const history = useHistory();

  return (
    <div className="container">
      <Nav />
      <div className="welcome-message">
        <header>
          <h1>Welcome to Benny's Closet</h1>
        </header>
        <div className="article">
          <p>
            Your one stop shop for all available clothing items from my closet,
            all for a reasonable price
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
