import React from "react";
import serIcon from "../Images/website.svg";
import "./servicecard.css";
function ServiceCard(props) {
  return (
    <div className="ser-card">
      <div className="ser-icon">
        <img src={serIcon} alt="service" className="ser-icon-img" />
      </div>
  <p className="ser-title">{props.title}</p>
      <p className="ser-subtitle">
       {props.subtitle} 
      </p>
    </div>
  );
}

export default ServiceCard;
