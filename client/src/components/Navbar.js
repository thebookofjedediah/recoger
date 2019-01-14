// import React from "react";
// import { Link } from "react-router-dom";

import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import axios from "axios";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem("user")
    };
  }

  handleSignOut() {
    axios.then(res => {
      console.log("made it to sign out");
      localStorage.removeItem("user", res.data.email);
      localStorage.removeItem("userId", res.data.id);
      this.props.history.push("/");
    });
  }

  render() {
    const user = localStorage.getItem("user");
    return (
      <div>
        <Navbar color="success" light expand="md">
          <NavbarBrand href="/">Recoger</NavbarBrand>
          <Nav className="ml-auto" navbar>
            {!user && (
              <NavItem>
                <NavLink href="/sign-in-form">Sign In</NavLink>
              </NavItem>
            )}
            {!user && (
              <NavItem>
                <NavLink href="/sign-up-form">Sign Up</NavLink>
              </NavItem>
            )}
            {user && (
              <NavItem>
                <NavLink onClick={this.props.handleSignOut}>Sign Out</NavLink>
              </NavItem>
            )}
            {user && (
              <NavItem>
                <NavLink href="/dashboard">Dashboard</NavLink>
              </NavItem>
            )}
          </Nav>
        </Navbar>
      </div>
    );
  }
}
