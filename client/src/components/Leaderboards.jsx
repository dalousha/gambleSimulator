import React from 'react';
import $ from 'jquery';

class Leaderboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topUsers: ''
    }

    this.getData = this.getData.bind(this);
    this.getTopUsers = this.getTopUsers.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    Promise.all([
      this.getTopUsers()
    ]).then(responses => {
      console.log('response:', responses[0]);
      this.setState({
        topUsers: responses[0][0].username
      })
    })
  }

  getTopUsers() {
    return new Promise ((resolve, reject) => {
      $.ajax({
        method: 'GET',
        url: 'http://localhost:3001/users',
        contentType: 'application/json',
        success: (data) => {
          resolve(data);
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.topUsers} is the on top of the leaderboards</h1>
      </div>
    )
  }
}

export default Leaderboards;