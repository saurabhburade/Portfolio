import React from "react";
import abtImg from "../Images/undraw_hacker_mindset_gjwq.svg";
import "./aboutMe.css";
function AboutMe() {
  return (
    <div className="abt-me-cont">
      <div className="abt-me-img">
        <img src={abtImg} alt="" className="abt-img" />
      </div>
      <div className="about-me-detail-cont">
        <p className="about-me-head">Read About Me</p>
        <p className="about-me-subtitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores hic
          similique, culpa ab at in officia? Cum, assumenda illum? Sequi
          officiis sint quo perferendis rem numquam, pariatur officia vero.
          Reprehenderit!
        </p>
        <div className="skillbars-cont">
          <div className="skill-bar">
            <div className="skill-bar-internals" style={{ width: "25%" }}>
              <p>UI/UX</p>
              <p>25%</p>
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-bar-internals" style={{ width: "50%" }}>
              <p>UI/UX</p>
              <p>50%</p>
            </div>
          </div>
          <div className="skill-bar">
            <div className="skill-bar-internals" style={{ width: "75%" }}>
              <p>UI/UX</p>
              <p>75%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
