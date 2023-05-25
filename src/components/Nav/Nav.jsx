import React from "react";
import { FaGithub } from "react-icons/fa";
import "./nav.css";

function Nav() {
  return (
    <>
      <header id="nav" className="nav_container">
        <div className="navbar">
          <div className="logo">
            <h1>K3llYnCodE</h1>
          </div>
          <a
            href="https://github.com/kellyncodes"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <div className="navlinks">
            <ul className="links">
              <li>
                <a href="#nav">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <ul className="right_links">
              <a
                href="https://www.upwork.com/freelancers/~01edd830bade39ada0"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
