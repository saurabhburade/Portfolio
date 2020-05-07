import React from "react";
import "./education.css"
function Education(props) {
  return (
    // <div className="edu-cont">
    <div className="edu-card">
      <div className="edu-hero">
        <span></span>
        <span>{props.title}</span>
      </div>
      <p className="year-of-comp">Year of Completion: {props.yoc}</p>
      <p className="edu-board">
        {props.board}
        <p>({props.college})</p>
      </p>
      <p className="edu-percent">Percentage : {props.percent}</p>
    </div>
    // </div>
  );
}

export default Education;
