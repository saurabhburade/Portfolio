import React from "react";
import ServiceCard from "./ServiceCard";
import "./myservices.css"
function MyServices() {
  return (
    <div className="myservices-cont">
      <div className="myser-head">
        <p className="my-ser-hero">My Services</p>
        <p className="my-ser-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
          tenetur fugiat
        </p>
      </div>
      <div className="services-card-cont">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}

export default MyServices;
