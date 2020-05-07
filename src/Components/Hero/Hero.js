import React from "react";
import hero from "../Images/undraw_work_chat_erdt.svg";
import "./hero.css";
function Hero() {
  return (
    <div className="hero-main-cont">
      <div className="hero-and-text-cont">
        <p className="hello-txt">Hi There</p>
        <p className="hero-txt">
          I'm <span> Saurabh Burade</span>
        </p>
        <p className="subtitle-hero">
          Professional Web Developer | Full-Stack Developer
        </p>
        <div className="hero-btns">
          <button className="resume-btn">Download Resume</button>
          {/* <button className="portfolio-btn">Download Resume</button> */}
        </div>
      </div>
      <div className="hero-image">
        <img src={hero} alt="img" className="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
