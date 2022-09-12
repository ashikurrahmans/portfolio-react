import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  const { id, title, description, tags } = props.project;
  return (
    <div className="w-90 p-4 bg-base-100 shadow-xl hover:shadow-2xl rounded-md">
      <div className="flex justify-between font-josefin">
        <h2 className="card-title">{title}</h2>

        <Link
          to={`/projects/${id}`}
          className="badge badge-secondary p-3 rounded-lg shadow-md"
        >
          <FiExternalLink />
        </Link>
      </div>
      <p className="font-josefin mt-6 mb-6 text-xl">{description}</p>
      <div className="flex justify-start gap-2">
        <span class="inline-flex items-center justify-center px-6 py-2 text-xs font-bold leading-none text-red-100 bg-green-500 rounded-full">
          {tags[0]}
        </span>
        <span class="inline-flex items-center justify-center px-4 py-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {tags[1]}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
