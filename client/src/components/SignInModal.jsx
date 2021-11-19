/* eslint-disable no-useless-constructor */
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const SignInModal = (props) => {

  if (!props.show) {
    return null
  }

  return (
    <>
    <Modal isOpen={props.show} toggle={props.toggle}>
      <ModalHeader>Welcome Back!</ModalHeader>

      <ModalBody>
        <form>
          <div className="log-in-modal-body">
            <label>E-mail:</label>
            <input className="credentials-input" type="text"/>

            <label>Password:</label>
            <input className="credentials-input" type="password"/>

            <button className="login-button-modal">SIGN IN</button>
          </div>
        </form>
      </ModalBody>

      <ModalFooter></ModalFooter>

    </Modal>
    </>
  )
}

export default SignInModal;