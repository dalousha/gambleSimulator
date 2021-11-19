import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';


function Navigation() {
  return(
    <Navbar>
      <Nav>
        <NavItem>
          <NavLink href="/home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/wagers">My Wagers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">My Account</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/calculator">Odds Calculator</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default Navigation;