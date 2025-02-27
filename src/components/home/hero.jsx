import React from "react";
import {home} from "../data/dummydata";
import TypeWriter from "typewriter-effect";
import "./home.css";
const Hero = () => {
  return (
    <>
      <section className="hero">

         {home.map((val,i) =>(
           <div className="hero_container" key={i}>
              <h3>{val.text}</h3>
              <h1>
                 <TypeWriter
                 options={
                  {
                    strings : [val.name, val.post, val.design ],
                    autoStart : true,
                    loop: true,
                  }
                 }
                 
                  />
              </h1>
              <p>{val.desc}</p>
              <button className="primaryButton">Download CV</button>
           </div>

         ))}
      </section>
    </>
  );
};

export default Hero;
