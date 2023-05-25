import React, { useEffect } from "react";
import Resume from "../../assets/KelechiAmos.pdf";
import ProfileImg from "../../assets/kelechi_amos.jpg";

import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div id="about" className="about_container">
      <div className="header_text">
        <h1>About</h1>
      </div>
      <div className="about">
        <div className="resume">
          <div id="container_main">
            <div id="wrapper_hero" className="section-page">
              <img id="profile_pic" src={ProfileImg} alt="profile-pics" />

              <div>
                <h2 id="username">Kelechi Amos</h2>
                <p id="bio">Software Engineer</p>
                <a href="mailto:eng.kelechiamos@gmail.com" id="email">
                  eng.kelechiamos@gmail.com
                </a>
              </div>
            </div>

            <section className="section_page">
              <div id="socials_list">
                <a
                  href="https://github.com/kellyncodes"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
                <a href={Resume} download="" rel="noreferrer" target="_blank">
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/kellyncodes/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Linkedin
                </a>
                <a
                  href="https://twitter.com/kellyncodes"
                  rel="noreferrer"
                  target="_blank"
                >
                  Twitter
                </a>
                <a
                  href="https://facebook.com/kellyncodes"
                  rel="noreferrer"
                  target="_blank"
                >
                  Facebook
                </a>
              </div>
            </section>

            <section className="section_page skills">
              <div>
                <h2>Programming Languages </h2>
                <ul className="qualification_list">
                  <li>C#</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                </ul>
              </div>

              <div>
                <h2>S D Ms </h2>
                <ul className="qualification_list">
                  <li>Agile</li>
                  <li>Scrum</li>
                </ul>
              </div>

              <div className="soft_skill">
                <h2>Soft Skills </h2>
                <div className="skill">
                  <ul>
                    <li>Detail-oriented</li>
                    <li>Communicative</li>
                    <li>Leadership</li>
                    <li>Problem-Solving</li>
                    <li>Quality Assurance</li>
                    <li>Instrumentalist</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="section_page">
              <h2 className="tech_stack">Tech Stack</h2>

              <div id="wrapper_techstack_items">
                <div className="card_techstack">
                  <span>
                    JavaScript | Angular | NextJs | Version control System |
                    Html | Css | Tailwind | Bootstrap.
                  </span>
                </div>

                <div className="card_techstack">
                  <span>C#/.NET | NESTJS | PHP </span>
                </div>

                <div className="card_techstack">
                  <span>SSMS, MYSQL, MONGO DB</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
