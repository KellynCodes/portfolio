import React, { useEffect } from "react";
import { FaDesktop, FaHammer, FaPen } from "react-icons/fa";
import "./home.css";
import Aos from "aos";
import headerImg from "../../assets/form.svg";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div id="home" className="home">
      <div data-aos="flip-right" className="home_left">
        <div className="about">
          <div className="me">
            <h3>Hey! I am</h3>
            <h1>Kelly</h1>
          </div>
          <div className="software_engineer">
            <h1>Software Engineer</h1>
          </div>
          <div className="capacity">
            <h5>
              I help your business succeed! by creating trusted softwares to
              manage your business
            </h5>
            <i>Full stack Engineer =&gt;</i>
            <a href="#TechStack"> Tech Stacks</a>
          </div>

          <div className="my_work">
            <ul>
              <h3>The kind of works I do</h3>
              <div className="icon_container">
                <div className="icons">
                  <FaPen />
                </div>
                <p>Project Planning</p>
              </div>
              <div className="icon_container">
                <div className="icons">
                  <FaDesktop />
                </div>
                <p>Software Development</p>
              </div>

              <div className="icon_container">
                <div className="icons">
                  <FaHammer />
                </div>
                <p>Software Maintenance</p>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div data-aos="flip-right" className="home_right">
        <img src={headerImg} alt="profile_image" />
      </div>
    </div>
  );
}

export default Home;
