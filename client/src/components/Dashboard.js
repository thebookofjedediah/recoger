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
        {user && <h4>user: {this.state.email}</h4>}
        {user && (
          <div event-list-container>
            <h2 className="event-list">Events:</h2>{" "}
            {this.state.events.map(event => (
              <Link to={`/event/${event.id}`} className="event-list">
                {event.title}
              </Link>
            ))}
          </div>
        )}
        {user && (
          <Button className="create-new-event" color="success" size="lg">
            <Link to="/create-event-form">Create New Event</Link>
          </Button>
        )}
        {!user && (
          <div className="non-user-dashboard">
            <p className="dashboard-welcome">
              New to Recoger? Sign in to see a dashboard to manage your
              payments!
            </p>
            <Button className="sign-up-button" color="success" size="lg">
              <Link to="/sign-up-form">Sign Up Now!</Link>
            </Button>
            <p className="dashboard-sign-in">Already have an account?</p>
            <Link to="/sign-in-form">Sign In</Link>
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
