import React from 'react'
import "./footer.css"
import fb from "../Images/fb.svg"
import git from "../Images/git.svg";
import linkedin from "../Images/linkedin.svg";
import insta from "../Images/insta.svg";
export default function Footer() {
    return (
      <footer className="footer-cont">
        <div className="logo">Saurabh</div>
        <div className="social-links-cont">
          <div className="social-link">
            <a href="https://github.com/saurabhburade">
              <img src={git} className="social-icon" alt="github" />
            </a>
          </div>
          <div className="social-link">
            <a href="https://www.linkedin.com/in/saurabh-burade-8371ab182/">
              <img src={linkedin} className="social-icon" alt="linkedin" />
            </a>
          </div>{" "}
          <div className="social-link">
            <a href="https://www.instagram.com/saurabh_burade/">
              <img src={insta} className="social-icon" alt="instagram" />
            </a>
          </div>{" "}
          <div className="social-link">
            <a href="https://www.facebook.com/princesaurabh121">
              <img src={fb} className="social-icon" alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>Made With ❤ by Saurabh Burade</p>
          <p>sburade3@gmail.com</p>
          <p>+91 9325107662</p>
        </div>
      </footer>
    );
}
