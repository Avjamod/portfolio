import React from "react";

const ProjectCard = ({ imageUrl, projectTitle, projectDescription }) => {
  return (
    <div className="m-2">
      <div className="card bg-base-100  shadow-sm hover:shadow-2xl">
        <figure>
          <img className="h-25 " src={imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{projectTitle}</h2>
          <p>{projectDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-soft">Read More...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
