import React from "react";
import "./Footer.css";
import { BsPhone } from "react-icons/bs";
import { FiMail, FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-contact">
          <header>
            <h3>Contact</h3>
          </header>
          <div className="contact-items">
            <div className="contact-item">
              <BsPhone className="contact-logo" />
              <p className="contact-item-text">701-526-6964</p>
            </div>
            <div className="contact-item">
              <FiMail className="contact-logo" />
              <p className="contact-item-text">brockjbenson@outlook.com</p>
            </div>
            <div className="contact-item">
              <FiGithub className="contact-logo" />
              <p>
                <a
                  className="contact-item-text"
                  target="_blank"
                  href="https://github.com/brockjbenson"
                >
                  brockjbenson
                </a>
              </p>
            </div>
            <div className="contact-item">
              <AiOutlineLinkedin className="contact-logo" />
              <p>
                <a
                  className="contact-item-text"
                  target="_blank"
                  href="https://www.linkedin.com/in/brock-benson-02389b261/"
                >
                  Brock Benson
                </a>
              </p>
            </div>
          </div>
        </div>
        <img
          className="footer-logo"
          src={require("./images/bennys-closet-logo-white.png")}
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
