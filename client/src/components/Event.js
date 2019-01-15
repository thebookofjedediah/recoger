import React, { Component } from "react";
import axios from "axios";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: "",
      charges: []
    };
  }
  componentWillMount() {
    axios
      .get(`/event/${this.props.match.params.id}`)
      .then(res => this.setState({ event: res.data.event }));
  }

  render() {
    return (
      <div className="entire-event-page">
        {this.state.event ? <h2>{this.state.event.title}</h2> : "loading"}
      </div>
    );
  }
}

export default Event;
