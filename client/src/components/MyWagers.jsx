import React from 'react';
import Sidebar from './Sidebar.jsx';

class MyWagers extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      wagers: ''
    })
  }


  render() {
    return (
      <div className="app">
        My Wagers Page
      </div>
    )
  }
}

export default MyWagers;