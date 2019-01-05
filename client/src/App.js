import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-md bg-success navbar-dark">
          <a class="navbar-brand" href="/">
            Recoger
          </a>
          <a href="/about">About</a>
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
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav class="navbar navbar-expand-sm bg-success navbar-dark fixed-bottom">
          <p>All rights reserved, Recoger 2019</p>
        </nav>

        <main>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
        </main>
      </div>
    );
  }
}

export default App;
