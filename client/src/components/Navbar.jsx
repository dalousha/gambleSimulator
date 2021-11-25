import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import SignInModal from './SignInModal.jsx';
import SignUpModal from './SignUpModal.jsx';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false
    }

    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
  }

  toggleSignIn() {
    this.setState({
      showSignIn: !this.state.showSignIn
    })
    console.log(this.state.showSignIn)
  }

  toggleSignUp() {
    this.setState({
      showSignUp: !this.state.showSignUp
    })
  }


  render() {
    return(
      <Navbar>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/myWagers">My Wagers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/myAccount">My Account</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/leaderboards">Leaderboards</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/calculator">Odds Calculator</NavLink>
          </NavItem>

        </Nav>
        <Nav>
          <NavItem>
            <button className="login-button" onClick={() => this.toggleSignIn()}>Sign In</button>
            <SignInModal show={this.state.showSignIn} toggle={this.toggleSignIn}/>
          </NavItem>
          <NavItem>
            <button className="login-button" onClick={() => this.toggleSignUp()}>Join</button>
            <SignUpModal show={this.state.showSignUp} toggle={this.toggleSignUp}/>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Navigation;