import React from 'react';
import $ from 'jquery';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: '',
      first_name: '',
      last_name: '',
      date_of_birth: '',
      username: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleDateOfBirthChange = this.handleDateOfBirthChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email_address: e.target.value
    })
  }

  handleFirstNameChange(e) {
    this.setState({
      first_name: e.target.value
    })
  }

  handleLastNameChange(e) {
    this.setState({
      last_name: e.target.value
    })
  }

  handleDateOfBirthChange(e) {
    this.setState({
      date_of_birth: e.target.value
    })
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  saveUser(e) {
    console.log('here', this.state)
    var data = {
      email_address: this.state.email_address,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      date_of_birth: this.state.date_of_birth,
      username: this.state.username}
    console.log(JSON.stringify(data))
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3001/users',
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/json',
      success: (data) => {console.log('POSTED')}
    })
    console.log('now here', this.state)
    e.preventDefault()
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <>
      <Modal isOpen={this.props.show} toggle={this.props.toggle}>
        <ModalHeader>Create an Account</ModalHeader>

        <ModalBody>
          <form>
            <div className="log-in-modal-body">
              <label>E-mail</label>
              <input className="credentials-input" type="text" onChange={this.handleEmailChange}/>

              <label>First Name:</label>
              <input className="credentials-input" type="text" onChange={this.handleFirstNameChange}/>

              <label>Last Name:</label>
              <input className="credentials-input" type="text" onChange={this.handleLastNameChange}/>

              <label>Date of Birth:</label>
              <input className="credentials-input" type="date" onChange={this.handleDateOfBirthChange}/>

              <label>Username:</label>
              <input className="credentials-input" type="text" onChange={this.handleUsernameChange}/>

              <label>Password:</label>
              <input className="credentials-input" type="password"/>

              <label>Re-enter Password:</label>
              <input className="credentials-input" type="password"/>

              <button className="login-button-modal" onClick={this.saveUser}>Register</button>
            </div>
          </form>
        </ModalBody>

        <ModalFooter></ModalFooter>

      </Modal>
      </>
    )
  }
}

export default SignUpModal;