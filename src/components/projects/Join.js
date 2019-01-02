import React, { Component } from 'react';
import { connect } from "react-redux";

class Join extends Component {
  state = {

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
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Join);
