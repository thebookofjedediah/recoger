import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-md bg-success navbar-dark">
          <a class="navbar-brand" href="/">
            Recoger
          </a>
        </nav>
        <main>
          <Route exact path="/" component={Landing} />
        </main>
      </div>
    );
  }
}

export default App;
