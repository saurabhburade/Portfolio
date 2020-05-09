import React from "react";
import abtImg from "../Images/undraw_hacker_mindset_gjwq.svg";
import "./aboutMe.css";
function AboutMe() {
  return (
    <div className="abt-me-cont" id="about-me">
      <div className="abt-me-img">
        <img src={abtImg} alt="" className="abt-img" />
      </div>
      <div className="about-me-detail-cont">
        <p className="about-me-head">Read About Me</p>
        <p className="about-me-subtitle">
          As you have gone through my portfolio as mentioned, I have 1 year of
          experience in building web pages. I have a decent knowledge of
          HTML, CSS, JavaScript, jQuery. I had also got knowledge of frontend
          library ReactJs up to intermediate level and also developed many
          projects on MERN stack. I have also good experience in developing
          RESTful APIs using Nodejs. Recently I have developed an e-Commerce
          project with MERN stack along with Redux and payment integration with
          Stripe. It will be a great and awesome experience to work together
        </p>
        <div className="skillbars-cont">
          <div className="skill-bar">
            <div className="skill-bar-internals" style={{ width: "75%" }}>
              <p>HTML, CSS, Vanilla JS</p>
              <p>75%</p>
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-bar-internals" style={{ width: "70%" }}>
              <p>ReactJS</p>
              <p>70%</p>
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-bar-internals" style={{ width: "60%" }}>
              <p>Redux</p>
              <p>60%</p>
            </div>
          </div>

          <div className="skill-bar">
            <div className="skill-bar-internals" style={{ width: "70%" }}>
              <p>NodeJS, Express</p>
              <p>70%</p>
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-bar-internals" style={{ width: "50%" }}>
              <p>MongoDB</p>
              <p>50%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
