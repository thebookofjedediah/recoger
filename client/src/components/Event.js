import React, { Component } from "react";
import { Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
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
    let total = 0;
    let table = {};

    const charges = this.state.charges.map(charge => {
      total += charge.amount;
      table[charge.userId] = true;
      return (
        <tr>
          <td>{charge.userId}</td>
          <td>{charge.title}</td>
          <td>{charge.description}</td>
          <td>{charge.amount}</td>
        </tr>
      );
    });
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
        <Button className="sign-up-button" color="success" size="lg">
          <Link to={`/event/${this.state.event.id}/create-charge`}>
            Add a Charge
          </Link>
        </Button>
        <div>
          <h4>Total cost:</h4>
          <p>{total}</p>
          <h4>Each User Should Pay:</h4>
          <p>{Math.round((total / Object.keys(table).length) * 100) / 100}</p>
          <div>{console.log(table)}</div>
        </div>
      </section>
    );
  }
}

export default Event;
