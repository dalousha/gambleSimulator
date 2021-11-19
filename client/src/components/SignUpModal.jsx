import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SignUpModal = (props) => {

  if (!props.show) {
    return null
  }

  return (
    <>
    <Modal isOpen={props.show} toggle={props.toggle}>
      <ModalHeader>Create an Account</ModalHeader>

      <ModalBody>
        <form>
          <div className="log-in-modal-body">
            <label>E-mail</label>
            <input className="credentials-input" type="text"/>

            <label>First Name:</label>
            <input className="credentials-input" type="text"/>

            <label>Last Name:</label>
            <input className="credentials-input" type="text"/>

            <label>Date of Birth:</label>
            <input className="credentials-input" type="date"/>

            <label>Username:</label>
            <input className="credentials-input" type="text"/>

            <label>Password:</label>
            <input className="credentials-input" type="password"/>

            <label>Re-enter Password:</label>
            <input className="credentials-input" type="password"/>

            <button className="login-button-modal">REGISTER</button>
          </div>
        </form>
      </ModalBody>

      <ModalFooter></ModalFooter>

    </Modal>
    </>
  )
}

export default SignUpModal;