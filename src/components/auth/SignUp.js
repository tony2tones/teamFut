import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { MDCRipple } from "@material/ripple";
import firebase from "firebase/firebase-app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class SignUp extends Component {
  state = {
    isSignedIn: false,
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isSignedIn: !isSignedIn
    });
    this.props.signUp(this.state);
  };

  componentDidMount = () => {
    firebase.initializeApp({
      apiKey: "AIzaSyBjHuA4bjkdCpRioG5lus4ln7LJuc8KpWY",
      authDomain: "team-fut.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user
      });
    });
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid && isSignedIn === true) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="mdc-fab">Submit</button>
          </div>
          <div className="red-text">
            {authError ? <p> {authError} </p> : null}
          </div>
        </form>
        <div>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
