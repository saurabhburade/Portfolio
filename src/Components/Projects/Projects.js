import React from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipe: "left",
      ArrList: ["Project 1", "Project 2", "Project 3", "Project 4"],
      i: 0,
    };
  }
  leftHandle = () => {
        console.log(this.state.i  );
      
 if (this.state.i!==0&&this.state.i>0) {
        this.setState({
          i: this.state.i - 1,
          swipe: "left",
        });
        console.log(this.state);
 }
  };
  rightHandle = () => {
        console.log(this.state.i);
      console.log(this.state.i,this.state.ArrList.length);
 if (this.state.i !== this.state.ArrList.length-1) {
   this.setState({
     i: this.state.i + 1,
     swipe: "right",
   });
        console.log(this.state);
   
 }
  };
  render() {
    return (
      <div className="carousel-cont">
        <div className="left-arrow" onClick={this.leftHandle}>
          {"<"}
        </div>
        <div className="carousel-item">
          <ProjectCard title={this.state.ArrList[this.state.i]} swipe={this.state.swipe} />
        </div>
        <div className="right-arrow" onClick={this.rightHandle}>
          {">"}
        </div>
      </div>
    );
  }
}
