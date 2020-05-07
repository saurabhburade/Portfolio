import React from 'react';

function AchCert(props) {
    return (
      <div className="edu-card">
        <div className="edu-hero">
          <span></span>
          <span>{props.title}</span>
        </div>
        <p className="year-of-comp">{props.yoc}</p>
        <p className="edu-board">{props.board}</p>
        <p className="validate-cert">
            <a href={props.link}>See Credentials</a>
        </p>    
      </div>
    );
}

export default AchCert;
