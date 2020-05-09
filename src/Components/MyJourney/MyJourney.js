import React, { Component, Fragment } from "react";
import Education from "./Education";
import "./myjourny.css";
import Experience from "./Experience";
import AchCert from "./AchCert";
export default class MyJourney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationActive: true,
      expActive: false,
      achActive: false,
      scroll: window.scrollY,
    };
  }
  eduHandle = () => {
    this.setState({
      educationActive: true,
      expActive: false,
      achActive: false,
    });
  };
  expHandle = () => {
    this.setState({
      educationActive: false,
      expActive: true,
      achActive: false,
    });
  };
  achHandle = () => {
    this.setState({
      educationActive: false,
      expActive: false,
      achActive: true,
    });
  };
  
  
  render() {
  console.log(this.state.scroll);
    
    return (
      <div className="my-jo-cont" id="journey">
        <div className="my-jo-head">
          <p className="my-jo-hero">My Awesome Journey</p>
          <p className="my-jo-subtitle">
      Go through my wonderful journey
          </p>
          <div className="my-jo-btns">
            <button
              className={
                this.state.educationActive ? "jo-btn jo-btn-active" : "jo-btn"
              }
              onClick={this.eduHandle}
            >
              My Education
            </button>
            <button
              className={
                this.state.expActive ? "jo-btn jo-btn-active" : "jo-btn"
              }
              onClick={this.expHandle}
            >
              Experience
            </button>
            <button
              className={
                this.state.achActive ? "jo-btn jo-btn-active" : "jo-btn"
              }
              onClick={this.achHandle}
            >
              Archievements & Certifications
            </button>
          </div>
        </div>
        <div className="jo-cont">
          {this.state.educationActive ? (
            <Fragment>
              <Education
                title="Bachelor of Engg. (B.E)"
                yoc="2021"
                board="SGB Amravati University"
                college="SSGMCE Shegaon"
                percent="79.00%"
              />

              <Education
                title="XII (Senior Secondary)"
                yoc="2017"
                board="MAHARASHTRA STATE BOARD"
                college="Nanaji Joshi Jr. College Shahapur"
                percent="75.54%"
              />
              <Education
                title="X (Secondary)"
                yoc="2015"
                board="MAHARASHTRA STATE BOARD"
                college="Subodh Vidyalaya Masal"
                percent="79.00%"
              />
            </Fragment>
          ) : this.state.expActive ? (
            <Fragment>
              <Experience
                title="Programming team member"
                yoc="Oct 2018 - Present"
                board="Virtual Labs SSGMCE and IITB"
              />{" "}
              <Experience
                title="Technical Advisor"
                yoc="Sep 2018 - Present"
                board="ITSA SSGMCE"
              />
            </Fragment>
          ) : this.state.achActive ? (
            <Fragment>
              <AchCert
                title="Responsive Web Design Developer"
                yoc="Issued on Apr 2019"
                board="Issued by FreeCodeCamp"
                link="https://www.freecodecamp.org/certification/fcc5cc52782-e3c3-4d7a-8888-aaec78d9d5da/responsive-web-design"
              />
              <AchCert
                title="Achieved 3rd Prize"
                yoc="2019"
                board="SGBAU Startup Fest"
              />
            </Fragment>
          ) : (
            <Fragment>
              <Education
                title="X (Secondary)"
                yoc="2015"
                board="MAHARASHTRA STATE BOARD"
                college="Subodh Vidyalaya Masal"
                percent="79.00%"
              />
              <Education
                title="XII (Senior Secondary)"
                yoc="2017"
                board="MAHARASHTRA STATE BOARD"
                college="Nanaji Joshi Jr. College Shahapur"
                percent="75.54%"
              />
              <Education
                title="Bachelor of Engg. (B.E)"
                yoc="2021"
                board="SGB Amravati University"
                college="SSGMCE Shegaon"
                percent="79.00%"
              />
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}
