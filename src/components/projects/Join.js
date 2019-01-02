import React, { Component } from 'react';
import { joinGame } from '../../store/actions/playerActions';
import { connect } from "react-redux";

class Join extends Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    status: true
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.joinGame(this.state);
    // this.props.history.push('/');
}

  render() {
    return (
      <div>
        <button className="mdc-fab" onClick={this.handleSubmit}>Join now</button>
      </div>
      // https://stackoverflow.com/questions/52376374/how-to-get-documents-with-array-containing-a-specific-string-in-firestore-with-r
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

const mapDispatchToProps = (dispatch) => {
    return{
        joinGame: (user) => dispatch(joinGame(user))
    }
} 

export default connect(mapStateToProps)(Join);
