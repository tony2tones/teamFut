import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from 'react-router-dom';
import {format} from 'timeago.js';

const ProjectDetails = props => {
  const { project, auth } = props;
  if(!auth.uid) return <Redirect to='/signin' />
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card-content">
          <div className="card-title">{project.title}</div>
          <p> {project.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey text">
          <div>
            {" "}
            Posted by {project.authorFirstName} {project.authorLastName}
          </div>
          <div>{format(new Date(project.createdAt.toDate().toString()))}</div>
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
    auth : state.firebase.auth
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
