import React from "react";
import "../../Global.css";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        <h3>Projects</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div>
          <input
            type="radio"
            name="project-type"
            value="front-end"
            id="front-end"
          />{" "}
          <label className="radio-btn" htmlFor="front-end">
            Front-end
          </label>
          <input type="radio" name="project-type" value="ux-ui" id="ux-ui" />{" "}
          <label className="radio-btn" htmlFor="ux-ui">
            UX & UI
          </label>
        </div>
      </div>
    </div>
  );
};
