import React from "react";
import { about } from "../data/dummydata";
import Heading from "../common/Header/Heading";
import AboutImage from "../images/man.png";
import "./About.css";
import "../home/home.css";
const About = () => {
  return (
    <section className="About">
      {about.map((val, i) => (
        <div className="About_container" key={i}>
          <div className="left_container">
            <img src={AboutImage} alt="image" />
          </div>
          <div className="right_container">
            <Heading title="About Me" />
            <p>{val.desc}</p>
            <p>{val.desc1}</p>
            <button className="backButton">Download CV</button>
            <button className="primaryButton">Download CV</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
