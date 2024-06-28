import React from "react";
import "../Global.css";
import "./About.css";

export const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h2>
          Some very cool text that describes some very cool things. This text
          has to be a bit longer for me to see what it would look like.
        </h2>
        <button className="btn">Meer over mij</button>
        <div className="about-image"></div>
      </div>
    </div>
  );
};
