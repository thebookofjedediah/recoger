import React, { Component } from "react";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  createUser(user) {
    console.log("Made it to sign up user", user);
    axios
      .post("users", user)
      .then(res => {
        localStorage.setItem("user", res.data.email);
        localStorage.setItem("userId", res.data.id);
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("At error signing up", err);
      });
  }

  handleSubmit = e => {
    const { email, password, passwordConfirmation } = this.state;
    e.preventDefault();
    const user = { email, password, passwordConfirmation };
    this.createUser(user);
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
            <Label for="email">Email: </Label>
            <Input
              type="email"
              id="email"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <Label for="password">Password: </Label>
            <Input
              type="password"
              id="password"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <Label for="passwordConfirmation">Confirm Password: </Label>
            <Input
              type="password"
              id="passwordConfirmation"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <Button color="success">Sign Up</Button>
          </FormGroup>
        </Form>
      </section>
    );
  }
}

export default Signup;
