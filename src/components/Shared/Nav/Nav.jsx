import React from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
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
          <li>HOME</li>
          <li>CLOSET</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="nav-cart">
        <BsBag className="nav-cart-icon" />
      </div>
    </div>
  );
}

export default Nav;
