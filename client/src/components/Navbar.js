import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = localStorage.getItem("user");
  return (
    <div className="entire-navbar">
      <nav class="navbar navbar-expand-md bg-success navbar-dark">
        <a class="navbar-brand" href="/">
          Recoger
        </a>
        <Link to="/about/">About</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">
            {!user && (
              <li class="nav-item">
                <a class="nav-link" href="/sign-in-form">
                  Log In
                </a>
              </li>
            )}
            {!user && (
              <li class="nav-item">
                <a class="nav-link" href="/sign-up-form">
                  Sign Up
                </a>
              </li>
            )}
            {user && (
              <li class="nav-item">
                <a class="nav-link">Logout</a>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <nav class="navbar navbar-expand-sm bg-success navbar-dark fixed-bottom">
        <p>All rights reserved, Recoger 2019</p>
      </nav>
    </div>
  );
};

export default Navbar;
