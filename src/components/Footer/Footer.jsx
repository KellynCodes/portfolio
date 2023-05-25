import { React, useRef } from "react";
import "./footer.css";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";

function Footer() {
  const windowWidth = useRef(window.innerWidth).current;
  return (
    <>
      <div className="footer_container">
        <div className="footer">
          <div className="about_me">
            <div className="about_me_h4">
              <h4>About Me</h4>
            </div>
            <p>
              Software Engineer with over three years of professional learning
              and working experience. Skilled in C#/.NET, NestJs Angular, NextJs
              and PHP with professional knowledge of OOP, Architectural
              Principles and Design, Resource management and Project Planning.
            </p>
          </div>

          <div className="socials">
            <div className="get_in_touch">
              <h4>Get in touch</h4>
            </div>
            <ul>
              <a
                href="https://github.com/KellynCodes"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/KellynCodes"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/kellyncodes"
                rel="noreferrer"
                target="_blank"
              >
                <FaTwitter />
              </a>

              <a
                href="https://discord.com/@kellyncodes"
                rel="noreferrer"
                target="_blank"
              >
                <FaDiscord />
              </a>
            </ul>
          </div>
        </div>

        <a
          href="#nav"
          className={windowWidth > 700 ? "open_scroll_up" : "close_scroll_up"}
        >
          <FaRegArrowAltCircleUp style={{ fontSize: "1.5rem" }} />
        </a>
      </div>

      <div className="copyright">
        <p>
          CopyRight &copy;
          <b className="footer_year"> {new Date().getFullYear()} </b> All right
          Reserved, Made by <b className="footer_year">KellynCodes</b>
        </p>
      </div>
    </>
  );
}

export default Footer;
