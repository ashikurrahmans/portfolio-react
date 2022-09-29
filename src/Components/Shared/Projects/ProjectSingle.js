import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectSingle = () => {
  const { id } = useParams();

  const [projects, setProjects] = useState([]);

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
              className="w-full rounded-lg my-8"
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
              <div className="my-10">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={singleProject?.projectUrl}
                  className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-black rounded-lg  focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                >
                  Visit Website
                </a>
              </div>
              <div className="my-10">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={singleProject?.gitHubLinkFrontend}
                  className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded-lg  focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                >
                  Frontend Git Repo
                </a>
              </div>

              <div className="my-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={singleProject?.gitHubLinkBackend}
                  className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-red-800 rounded-lg  focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                >
                  Backend Git Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSingle;
