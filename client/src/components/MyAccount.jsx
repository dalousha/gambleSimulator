/* eslint-disable no-useless-constructor */
import React from 'react';
import Sidebar from './Sidebar.jsx'

class MyAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1>This is your account page!</h1>
        </div>

        <Sidebar/>
      </div>
    )
  }

}

export default MyAccount;