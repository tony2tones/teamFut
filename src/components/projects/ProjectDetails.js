import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { format } from "timeago.js";
import hdate from "human-date";
import Join from './Join';

const ProjectDetails = props => {
  const { projects, project, auth, projectId } = props;
  
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card-content card-action grey lighten-4 grey text">
          <div className="card-title">
            <h5>{project.title}</h5>
          </div>
          <p> {project.content}</p>
          <div>
            {" "}
            Posted by {project.authorFirstName} {project.authorLastName}
          </div>
          <div className="grey-text">
            {" "}
            {hdate.prettyPrint(
              new Date(project.createdAt.toDate().toString()) , { showTime: true })}{" "}
          </div>
          {console.log(projectId)}
          <Join  />
        </div>
      </div>
    );
  } else {
    return <div className="center"> Project Loading ...</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(ProjectDetails);
