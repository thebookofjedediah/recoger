import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
  Container
} from "reactstrap";
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
    axios.post("/users");
  }

  handleSubmit = e => {
    const { email, password, passwordConfirmation } = this.state;
    e.preventDefault();
    const user = { email, password, passwordConfirmation };
    this.props.createUser(user);
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
            <Button>Sign In</Button>
          </FormGroup>
        </Form>
      </section>
    );
  }
}

export default Signup;