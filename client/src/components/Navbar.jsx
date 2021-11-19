import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

function Navigation() {
  return(
    <Navbar>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/wagers">My Wagers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/myAccount">My Account</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/calculator">Odds Calculator</NavLink>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem>
          <NavLink href="/SignIn">Sign In</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default Navigation;