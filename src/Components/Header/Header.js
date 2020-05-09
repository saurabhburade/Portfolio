import React from "react";
import "./header.css";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: "",
    };
  }
  UNSAFE_componentWillMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        console.log("object");
        this.setState({ addClass: "sticky-header" });
      } else {
        this.setState({ addClass: "" });
      }
    });
  }
  render() {
    return (
      <div className={"header-cont " + this.state.addClass} id="home">
        <div className="logo">Saurabh Burade</div>
        <div className="nav-list-cont">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>  
          <li className="nav-item">
            <a href="#about-me">About Me</a>{" "}
          </li>
          <li className="nav-item">
            <a href="#my-services">Services</a>
          </li>
          <li className="nav-item">
            <a href="#journey">Journey</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </div>
      </div>
    );
  }
}
