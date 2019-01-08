import React, { Component } from "react";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    passwordConfirmation: ""
  };

  handleSubmit = e => {
    const { email, password, passwordConfirmation } = this.state;
    e.preventDefault();
    const user = { email, password, passwordConfirmation };
    this.props.createUser(user);
  };
}
