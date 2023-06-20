import React, { useEffect } from "react";
import "./project.css";
import Aos from "aos";
import "aos/dist/aos.css";

import OrieOba from "../../assets/portfolio.png";
import Tetherex from "../../assets/tetherex.JPG";
import Fricol from "../../assets/banking-system.png";
import Meals from "../../assets/bezao.JPG";
import emaldaUnizike from "../../assets/emaldaunizik.jpg";
import FetchGitUsers from "../../assets/github-users.JPG";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div id="project" className="project_page">
      <div className="header_text">
        <h1>MY PROJECTS</h1>
      </div>
      <div className="projects">
        <div className="project" data-aos="fade-left">
          <div className="project_img">
            <img src={emaldaUnizike} alt="Project img" />
            <h5>Unizike Hostel Management System</h5>
          </div>

          <div className="button">
            <a
              href="https://elmadaunizikhostels.com/"
              target="_blank"
              rel="noreferrer"
            >
              Private Repo
            </a>
            <a
              href="https://elmadaunizikhostels.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>

        <div className="project" data-aos="fade-left">
          <div className="project_img">
            <img src={Tetherex} alt="Project img" />
            <h5>Investement App</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/KellynCodes?tab=repositories&q=tetherex&type=&language=&sort="
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://tetherex.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>

        <div className="project" data-aos="fade-down">
          <div className="project_img">
            <img src={Meals} alt="Project img" />
            <h5>Meals | React</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/KellynCodes?tab=repositories&q=meals&type=&language=&sort="
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://kelly-meals.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="project" data-aos="flip-right">
          <div className="project_img">
            <img src={OrieOba} alt="Project img" />
            <h5>Ecommerce website | PHP</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/KellynCodes/orie-orba-online"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/KellynCodes/orie-orba-online"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="project" data-aos="fade-left">
          <div className="project_img">
            <img src={Fricol} alt="Project img" />
            <h5>Banking Website With PHP</h5>
          </div>

          <div className="button">
            <a
              href="https://github.com/KellynCodes/bankingSystem"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/KellynCodes/bankingSystem"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>

        <div className="project" data-aos="fade-up">
          <div className="project_img">
            <img src={FetchGitUsers} alt="Project img" />
            <h5>Consuming github API</h5>
          </div>

          <div className="button">
            <a href="https://github.com/KellynCodes/search_git_users">Github</a>
            <a
              href="https://kellygithubusers.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
