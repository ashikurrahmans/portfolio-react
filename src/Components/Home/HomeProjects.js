import React from "react";
import ProjectFatch from "../Shared/Projects/ProjectFatch";

const HomeProjects = () => {
  return (
    <>
      <section className="bg-[#F8FAFD] mb-12">
        <div className="w-9/12 mx-auto my-12">
          <div className="flex mb-10 font-josefin rounded-md">
            <h1 className="font-josefin text-4xl font-bold">My Projects</h1>
          </div>
          <ProjectFatch></ProjectFatch>
        </div>
      </section>
    </>
  );
};

export default HomeProjects;
