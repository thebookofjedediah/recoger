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
    axios.get(`/event/${this.props.match.params.id}`).then(res =>
      this.setState({
        event: res.data.event,
        charges: res.data.event.charges
      })
    );
  }

  render() {
    return (
      <section className="entire-event-page">
        {this.state.event ? <h2>{this.state.event.title}</h2> : "loading"}
        <table>
          <thead>
            <tr>
              <th>Charge For:</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.state.charges.map(charges => (
                <td>{charges.title}</td>
              ))}

              {this.state.charges.map(charges => (
                <td>{charges.description}</td>
              ))}

              {this.state.charges.map(charges => (
                <td>{charges.amount}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Event;
