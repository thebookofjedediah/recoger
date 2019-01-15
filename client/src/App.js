import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CreateEvent from "./components/CreateEvent";
import Event from "./components/Event";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/sign-up-form" component={Signup} />
            <Route exact path="/sign-in-form" component={Signin} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/create-event-form" component={CreateEvent} />
            <Route path="/event/:id" component={Event} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
