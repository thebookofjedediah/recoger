import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "user.email"
    };
  }

  render() {
    return (
      <div className="entire-dashboard">
        <section className="events">Events go here</section>
      </div>
    );
  }
}

export default Dashboard;
