import React, { Component } from "react";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import axios from "axios";

class CreateCharge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      amount: ""
    };
  }

  createCharge(charge) {
    console.log("Made it to charge creation", charge);
    axios
      .post("/charges/create", charge)
      .then(res => {
        //  this.setState({ user: res.data.email });
        console.log(res.charge, res);
        this.props.history.push(`/event/${this.props.match.params.id}`);
      })
      .catch(err => {
        console.log("At error charge create", err);
      });
  }

  handleSubmit = e => {
    const { title, description, amount } = this.state;
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const eventId = this.props.match.params.id;
    const charge = { title, description, amount, userId, eventId };
    this.createCharge(charge);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <section className="sign-up-form">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Title: </Label>
            <Input
              type="text"
              id="title"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <Label for="description">Description: </Label>
            <Input
              type="textarea"
              id="description"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <Label for="amount">Amount: </Label>
            <Input
              type="integer"
              id="amount"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <Button color="success">Add Charge</Button>
          </FormGroup>
        </Form>
      </section>
    );
  }
}

export default CreateCharge;
