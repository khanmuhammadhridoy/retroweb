import React, { useContext } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
// import logo from "../../../images/logo.png";
const Navigation = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div className="navigation sticky-top">
      <div className="nav-container">
        <Link to="/" className="brand">
          Retro Web
        </Link>
        <nav className="nav">
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">
            {loggedInUser.displayName === undefined
              ? "Login"
              : loggedInUser.displayName}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
