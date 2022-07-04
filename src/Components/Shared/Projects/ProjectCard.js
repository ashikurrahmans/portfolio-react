import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  const { id, title, description, tags } = props.project;
  return (
    <div>
      <div className="card w-90 bg-base-100 shadow-xl hover:shadow-2xl">
        <div className="card-body pt-4">
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
          <div className="card-actions justify-end">
            <div className="badge">{tags[0]}</div>
            <div className="badge">{tags[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
