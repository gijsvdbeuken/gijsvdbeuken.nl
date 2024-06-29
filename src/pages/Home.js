import React from "react";
import { Introduction } from "../components/introduction/Introduction";
import { About } from "../components/about/About";
import { Projects } from "../components/projects/Projects";

export const Home = () => {
  return (
    <>
      <Introduction />
      <About />
      <Projects />
    </>
  );
};
