import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem("user"),
      events: []
    };
  }

  componentWillMount(events) {
    axios
      .get("/events", events)
      .then(res => this.setState({ events: res.data.events }))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.events);
    const user = localStorage.getItem("user");
    return (
      <div className="entire-dashboard">
        {user && <div>user: {this.state.email}</div>}
        {user && (
          <div>
            events:{" "}
            {this.state.events.map(event => (
              <Link to={/events/}>{event.title}</Link>
              //`${this.props.event.id}`
            ))}
          </div>
        )}
        {user && (
          <Button
            className="create-new-event"
            color="success"
            size="lg"
            href="/create-event-form"
          >
            Create New Event
          </Button>
        )}
        {!user && (
          <div className="non-user-dashboard">
            <p className="dashboard-welcome">
              New to Recoger? Sign in to see a dashboard to manage your
              payments!
            </p>
            <Button
              className="sign-up-button"
              color="success"
              size="lg"
              href="/sign-up-form"
            >
              Sign Up Now!
            </Button>
            <p className="dashboard-sign-in">Already have an account?</p>
            <a href="/sign-in-form">Sign In</a>
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
