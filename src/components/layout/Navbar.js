import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInlinks";
import SignedOutLinks from "./SignedOutlinks";
import { connect } from 'react-redux';
import logo from '../../assets/img/logo1.png';

const NavBar = (props) => {
  const { auth, profile } = props;
  
  const links = auth.uid? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">TeamFut <img src={logo} /></Link>
        { links }
      </div>
    </nav>
  );
};

const mapStateToProps = (state)=> {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile

  }
}

export default connect(mapStateToProps)(NavBar);