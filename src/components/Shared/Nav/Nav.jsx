import React from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <header className="nav-header">Benny's Closet</header>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <li>Home</li>
          <li>Clothes</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="nav-cart">
          <BsCart2 className="nav-cart-icon" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
