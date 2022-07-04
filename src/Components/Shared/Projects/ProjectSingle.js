import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

const ProjectSingle = () => {
  const { id } = useParams();

  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ashikurrahmans/portfolio-json/main/projects.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      }, []);
  });
  const singleProject = projects.find((project) => (project.id = parseInt(id)));

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="">
            <img
              className="w-full rounded-lg"
              src={singleProject?.projectImage}
              alt="office content 1"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              {singleProject?.title}
            </h2>
            <p className="mb-8 text-black">{singleProject?.description}</p>
            <ul className="list-disc ml-0">
              {singleProject?.singleProjectList.map((list) => (
                <li className="my-2" key={list.index}>
                  {list}
                </li>
              ))}
            </ul>
            <p className="mb-4 text-black">{singleProject?.description}</p>

            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href={singleProject?.projectUrl}
                className="btn btn-active"
              >
                Visit Website
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={singleProject?.gitHubLinkFrontend}
                className="btn btn-active ml-4 btn-primary"
              >
                Frontend Github Repo
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={singleProject?.gitHubLinkBackend}
                className="btn btn-active ml-4 btn-secondary m-4"
              >
                Backend Github Repo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSingle;
