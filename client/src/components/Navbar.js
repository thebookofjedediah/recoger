import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem("user")
    };
  }

  handleSignOut() {
    console.log("made it to sign out");
    localStorage.removeItem("user", this.email);
    localStorage.removeItem("userId", this.id);
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
                <NavLink onClick={this.handleSignOut}>Sign Out</NavLink>
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
