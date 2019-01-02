import React, { Component } from 'react';
import { connect } from "react-redux";

class Join extends Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    status: true
  };
  render() {
    return (
      <div>
        <button className="mdc-fab">Join now</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    firstName: state.firebase.profile.firstName,
    lastName: state.firebase.profile.lastName
  };
};

export default connect(mapStateToProps)(Join);
