import React from "react";
import {format} from 'timeago.js';

var cardStyle = {
  boxShadow : 'rgba(0, 0, 0, 0.4)'
};

const ProjectSummary = ({project}) => {

  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3" style={cardStyle}>
          <span className="card-title">{project.title} </span>
          <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
          <p className="grey-text"> {format(project.createdAt.toDate().toString())} </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;