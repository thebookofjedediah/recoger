import React, { Component } from "react";
import { Router } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "user.email",
      events: ""
    };
  }

  componentWillMount(events) {
    axios.get("/events", events).then(res => console.log("success", res));
  }

  render() {
    return (
      <div className="entire-dashboard">
        <section className="events" />
      </div>
    );
  }
}

export default Dashboard;
