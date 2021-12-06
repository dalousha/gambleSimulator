import React from 'react';
import $ from 'jquery';
// import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import SignInModal from './SignInModal.jsx';
import SignUpModal from './SignUpModal.jsx';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false,
      balance: 0
    }

    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.getUserBalance = this.getUserBalance.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    Promise.all([
      this.getUserBalance()
    ]).then(responses => {
      var balance = responses[0]['0'].balance
      this.setState({
        balance: balance
      })
    })
  }

  getUserBalance() {
    return new Promise ((resolve, reject) => {
      $.ajax({
        method: 'GET',
        url: 'http://localhost:3001/users/login',
        contentType: 'application/json',
        success: (data) => {
          resolve(data);
        }
      })
    })
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
          <NavbarText>
            Balance: {this.state.balance}
          </NavbarText>
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