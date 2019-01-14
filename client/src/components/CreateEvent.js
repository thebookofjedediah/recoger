import React, { Component } from "react";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import axios from "axios";

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  createEvent(event) {
    console.log("Made it to event creation", event);
    axios
      .post("/events/create", event)
      .then(res => {
        //  this.setState({ user: res.data.email });
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("At error event create", err);
      });
  }

  handleSubmit = e => {
    const { title, description } = this.state;
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    const event = { title, description, userId };
    this.createEvent(event);
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
            <Label for="body">Title: </Label>
            <Input
              type="text"
              id="title"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <Label for="description">Body: </Label>
            <Input
              type="textarea"
              id="description"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <Button color="success">Create Event</Button>
          </FormGroup>
        </Form>
      </section>
    );
  }
}

export default CreateEvent;
