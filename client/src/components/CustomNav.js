import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

export default class CustomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLanding: false,
      email: localStorage.getItem("user")
    };
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    console.log("made it to sign out");
    axios.get("/users/sign_out").then(res => {
      localStorage.removeItem("user", this.email);
      localStorage.removeItem("userId", this.id);
      this.setState({ toLanding: true });
    });
  }

  render() {
    if (this.state.toLanding) {
      return <Redirect to="/dashboard" />;
    }
    const user = localStorage.getItem("user");
    return (
      <div>
        <Navbar color="success" light expand="md">
          <NavbarBrand href="/">Recoger</NavbarBrand>
          <Nav className="ml-auto" navbar>
            {!user && (
              <NavItem>
                <Link to="/sign-in-form">Sign In</Link>
              </NavItem>
            )}
            {!user && (
              <NavItem>
                <Link to="/sign-up-form">Sign Up</Link>
              </NavItem>
            )}
            {user && (
              <NavItem>
                <NavLink onClick={this.handleSignOut}>Sign Out</NavLink>
              </NavItem>
            )}
            {user && (
              <NavItem>
                <Link to="/dashboard">Dashboard</Link>
              </NavItem>
            )}
          </Nav>
        </Navbar>
      </div>
    );
  }
}
