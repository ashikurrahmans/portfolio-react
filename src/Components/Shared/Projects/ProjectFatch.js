import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProjectFatch = () => {
  const [projects, setProjects] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ashikurrahmans/portfolio-json/main/projects.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      }, []);
  });
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-4 gap-y-16">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id}></ProjectCard>
      ))}

      {location.pathname === "/" && (
        <div className="flex justify-center items-center">
          <Link className="btn gap-2 text-xl font-josefin" to="/projects">
            See More
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectFatch;
