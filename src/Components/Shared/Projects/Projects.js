import React from "react";
import Title from "../Title";
import ProjectFatch from "./ProjectFatch";

const Projects = () => {
  return (
    <>
      <Title title="All Frontend & MERN Stack Projects"></Title>
      <div className="my-24 w-9/12 mx-auto">
        <ProjectFatch></ProjectFatch>
      </div>
    </>
  );
};

export default Projects;
