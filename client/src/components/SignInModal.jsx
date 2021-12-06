/* eslint-disable no-useless-constructor */
import React from 'react';
import axios from 'axios';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { refreshTokenSetup } from '../util/refreshToken';

const clientId = '674943299698-dveacesg9g1fsicurdgab7ibnmngvv68.apps.googleusercontent.com'



const SignInModal = (props) => {
  const onSuccess = (res) => {
    console.log('login successfule, current user: ', res.profileObj);
    axios({
      method: 'POST',
      url: 'http://localhost:3001/users/login',
      data: { tokenId: res.tokenId}
    }).then((res) => {
      console.log('token')
    }).catch((err) => {
      console.log(err)
    })
    refreshTokenSetup(res)
  };

  const onFailure = (res) => {
    console.log('login failed, res: ', res);
  };

  const onLogoutSuccess = () => {

    console.log('successful Logout')

  };




  if (!props.show) {
    return null
  }

  return (
    <>
    <Modal isOpen={props.show} toggle={props.toggle}>
      <ModalHeader>Welcome Back!</ModalHeader>

      <ModalBody>
        <GoogleLogin
          clientId={clientId}
          buttonText="login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />

        {/* <form>
          <div className="log-in-modal-body">
            <label>E-mail:</label>
            <input className="credentials-input" type="text"/>

            <label>Password:</label>
            <input className="credentials-input" type="password"/>

            <button className="login-button-modal">SIGN IN</button>
          </div>
        </form> */}

        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onLogoutSuccess}
        />
      </ModalBody>

      <ModalFooter></ModalFooter>

    </Modal>
    </>
  )
}

export default SignInModal;