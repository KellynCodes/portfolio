import { React, useState, useEffect } from "react";
//Css file
import "./index.css";

//Diffrent pages
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/projects/Project";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [preloader, setPreloader] = useState(false);
  useEffect(() => {
    setPreloader(true);
    setTimeout(() => {
      setPreloader(false);
    }, 2000);
  }, []);

  return (
    <>
      {preloader ? (
        <div
          className={`${preloader ? "preloader_container" : "hide_preloader"}`}
        >
          <div className="preloader_content">
            <div className="preloader">
              <span className="dot"></span>
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Nav />
          <Home />
          <About />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
