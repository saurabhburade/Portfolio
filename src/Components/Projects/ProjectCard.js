import React from 'react'
import "./projectcard.css"
export default function ProjectCard(props) {
    return (
      <div
        className={
          props.swipe =="left"
            ? "project-card swipe-left"
            : props.swipe == "right"
            ? "project-card swipe-right"
            : "project-card"
        }
      >
        <h1>{props.title}</h1>
      </div>
    );
}
