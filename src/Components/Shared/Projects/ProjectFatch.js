import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProjectFatch = () => {
  const [projects, setProjects] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("https://ashikurrahmans.github.io/portfolio-json/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      }, []);
  });
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-4 gap-y-16">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id}></ProjectCard>
        ))}
      </div>
      {location.pathname === "/" && (
        <div className="flex items-center justify-center">
          <Link
            className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-[#96afdd] rounded-lg  focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
            to="/projects"
          >
            See More
          </Link>
        </div>
      )}
    </>
  );
};

export default ProjectFatch;
