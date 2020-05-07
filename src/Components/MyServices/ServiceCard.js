import React from "react";
import serIcon from "../Images/website.svg";
import "./servicecard.css";
function ServiceCard() {
  return (
    <div className="ser-card">
      <div className="ser-icon">
        <img src={serIcon} alt="service" className="ser-icon-img" />
      </div>
      <p className="ser-title">Graphics Design</p>
      <p className="ser-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non labore fuga
        ipsum dicta quod 
      </p>
    </div>
  );
}

export default ServiceCard;
