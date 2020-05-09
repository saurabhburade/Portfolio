import React from "react";
import ServiceCard from "./ServiceCard";
import "./myservices.css"
function MyServices() {
  return (
    <div className="myservices-cont" id="my-services">
      <div className="myser-head">
        <p className="my-ser-hero">My Services</p>
        <p className="my-ser-subtitle">
        Following are some services that I can serve you
        </p>
      </div>
      <div className="services-card-cont">
        <ServiceCard
          title="Static Websites"
          subtitle="Technologies : HTML , CSS , JS , Jquery , Boostrap , MatrializeCSS "
        />
        <ServiceCard
          title="Web Apps"
          subtitle="Technologies : MongoDB , Express , React , Redux , Matrial-UI , Ant-Design "
        />{" "}
        <ServiceCard
          title="E-commerce App"
          subtitle="Technologies : Stripe , MongoDB , Express , React , Redux , Matrial-UI , Ant-Design "
        />{" "}
        <ServiceCard
          title="Front-end Apps"
          subtitle="Technologies : React , Redux , Matrial-UI , Ant-Design"
        />{" "}
        <ServiceCard
          title="Back-end And REST APIs"
          subtitle="Technologies : NodeJS , ExpressJS "
        />{" "}
        <ServiceCard
          title="Responsive Web Designs"
          subtitle="Technologies : CSS , CSS-Flexbox"
        />{" "}
      </div>
    </div>
  );
}

export default MyServices;
