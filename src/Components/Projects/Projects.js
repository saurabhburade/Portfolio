import React from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";
import todo from "../Images/TODO.JPG";
import blog from "../Images/blog1.JPG";
import shop from "../Images/screencapture-fruits-shop-app-herokuapp-2020-05-05-15_52_11.png";
import dash from "../Images/dash2.JPG";
export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipe: "left",
      ArrList: [
        <ProjectCard title={"Project 1"} />,
        <ProjectCard title={"Project 2"} />,
        <ProjectCard title={"Project 3"} />,
        <ProjectCard title={"Project 4"} />,
      ],
      i: 0,
    };
  }
  leftHandle = () => {
    console.log(this.state.i);

    if (this.state.i !== 0 && this.state.i > 0) {
      this.setState({
        i: this.state.i - 1,
        swipe: "left",
      });
      console.log(this.state);
    }
  };
  rightHandle = () => {
    console.log(this.state.i);
    console.log(this.state.i, this.state.ArrList.length);
    if (this.state.i !== this.state.ArrList.length - 1) {
      this.setState({
        i: this.state.i + 1,
        swipe: "right",
      });
      console.log(this.state);
    }
  };
  render() {
    return (
      <div className="projects-cont" id="projects">
        <div className="proj-head">
          <p className="proj-hero">My Projects</p>
          <p className="proj-subtitle">
            These are some projects built by me from scratch
          </p>
        </div>
        <div className="proj-cards-cont">
          <ProjectCard
            img={shop}
            title="Fruits Shopping App (MERN)"
            details=" It is a full-stack app along with payment integration with Stripe. It
          is developed in MongoDB, ExpressJS, ReactJS, NodeJS, StripeJS, and
          Redux"
            link="https://github.com/saurabhburade/Shoping-App"
            yoc="Mar 2020 - Apr 2020"
          />
          <ProjectCard
            img={dash}
            title="Covid-19 Data Dashboard India
"
            details="This dashboard is developed with ReactJs, Redux and covid19India API.
It has features of Statewise and Districtwise COVID cases data details."
            link="https://github.com/saurabhburade/Covid-19"
            yoc="Apr 2020 - Apr 2020"
          />
          <ProjectCard
            img={blog}
            title="Blogging App (MERN)
"
            details=" It is a full-stack app built with ReactJS, NodeJS, Express, and Mongodb and having the facility to write & publish the blogs.
"
            link="https://github.com/saurabhburade/MERN-STACK-Bloging-App"
            yoc="Dec 2019 - Jan 2020"
          />
          <ProjectCard
            img={todo}
            title="ReactJS Todo App
"
            details=" I had built the basic to-do app by using ReactJS. I have an interest in building the app with ReactJs and it was a self-taught project.
"
            link="https://bit.ly/2ZQc2zo"
            yoc="Jun 2019 - Jun 2019"
          />
        </div>
      </div>
    );
  }
}
