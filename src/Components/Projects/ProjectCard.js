import React from "react";
import "./projectcard.css";
export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="proj-img">
        <img src={props.img} alt="img" />
      </div>
      <div className="proj-detail">
        <p className="proj-card-hero">{props.title}</p>
        <p className="yoc">{props.yoc}</p>
        <p className="proj-card-subtitle">{props.details}</p>
        <a href={props.link}>Go To Project</a>
      </div>
    </div>
  );
}
