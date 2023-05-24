import React from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

import "./Nav.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Nav() {
  const history = useHistory();

  function sendToAbout() {
    history.push("/about");
  }

  function sendToHome() {
    history.push("/home");
  }

  function sendToCloset() {
    history.push("/closet");
  }

  function sendToContact() {
    history.push("/contact");
  }
  return (
    <div className="nav">
      <div className="nav-logo">
        <img
          className="logo"
          src={require("./images/bennys-closet-logo.png")}
          alt="Benny's Closet Logo"
        />
      </div>
      <div className="nav-middle">
        <ul className="nav-links">
          <li onClick={sendToHome}>HOME</li>
          <li onClick={sendToCloset}>CLOSET</li>
          <li onClick={sendToAbout}>ABOUT</li>
          <li onClick={sendToContact}>CONTACT</li>
        </ul>
      </div>
      <div className="nav-cart">
        <BsBag className="nav-cart-icon" />
      </div>
    </div>
  );
}

export default Nav;
