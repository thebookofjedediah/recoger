import React, { Component } from "react";
import { Button, Table } from "reactstrap";
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
    //tally up amounts into a variable - divide it by the number of people
    //subtotal += charges.amount
    //for(let i=0; i<=charges.length; i++){
    //  let subtotal += charges.amount;
    //}
    const charges = this.state.charges.map(charges => (
      <tr>
        <td>{charges.userId}</td>
        <td>{charges.title}</td>
        <td>{charges.description}</td>
        <td>{charges.amount}</td>
      </tr>
    ));
    return (
      <section className="entire-event-page">
        {this.state.event ? <h2>{this.state.event.title}</h2> : "loading"}
        <Table className="charges-table" bordered>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Charge For</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{charges}</tbody>
        </Table>
        <Button
          className="sign-up-button"
          color="success"
          size="lg"
          href={`/event/${this.state.event.id}/create-charge`}
        >
          Add a Charge
        </Button>
      </section>
    );
  }
}

export default Event;
