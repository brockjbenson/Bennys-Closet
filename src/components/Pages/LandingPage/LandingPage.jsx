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
      <Footer />
    </div>
  );
}

export default LandingPage;
