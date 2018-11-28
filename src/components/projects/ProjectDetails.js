import React from "react";

const ProjectDetails = (props) => {
    const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card-content">
        <div className="card-title">Project Title - {id}</div>
        <p> toasty toasty taotste</p>
      </div>
      <div className="card-action grey lighten-4 grey text">
        <div> Posted by Tony</div>
        <div>2nd September 2am</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
