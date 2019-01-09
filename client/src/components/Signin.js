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

  signInUser(user) {
    axios
      .post("users/sign_in", user)
      .then(res => console.log("success", res))
      .catch(err => {
        console.log(err);
      });
  }

  handleSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();
    const user = { email, password };
    this.signInUser(user);
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
            <Button>Sign In</Button>
          </FormGroup>
        </Form>
      </section>
    );
  }
}

export default Signup;
