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
    return (
      <div className="entire-dashboard">
        <div>user: {this.state.email}</div>
        <div>
          events:{" "}
          {this.state.events.map(event => (
            <Link to={/events/}>{event.title}</Link>
            //`${this.props.event.id}`
          ))}
        </div>
        <section className="events" />
        <Button
          className="create-new-event"
          color="success"
          size="lg"
          href="/create-event-form"
        >
          Create New Event
        </Button>
      </div>
    );
  }
}

export default Dashboard;
