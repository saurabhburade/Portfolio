import React from 'react'

export default function Experience(props) {
    return (
      <div className="edu-card">
        <div className="edu-hero">
          <span></span>
          <span>{props.title}</span>
        </div>
        <p className="year-of-comp">{props.yoc}</p>
        <p className="edu-board">
          {props.board}
         
        </p>
      </div>
    );
}
