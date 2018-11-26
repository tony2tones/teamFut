import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInlinks";
import SignedOutLinks from "./SignedOutlinks";

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">TeamFut</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>

    </nav>
  );
};

export default NavBar;