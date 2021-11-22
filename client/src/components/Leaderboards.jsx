import React from 'react';
import $ from 'jquery';
import LeaderboardTile from './LeaderboardTile.jsx'

class Leaderboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topUsers: []
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
      var users = [];
      for (var i = 0; i < responses[0].length; i++) {
        users.push(responses[0][i].username)
      }
      this.setState({
        topUsers: users
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
    console.log('here', this.state.topUsers)
    return (
      <div className="leaderboard-page">
        <h1> {this.state.topUsers[0]} is the on top of the leaderboards</h1>
        <div className="leaderboards-container">
          {this.state.topUsers.map((user, index) =>
            <LeaderboardTile key={index} index={index} user={user}/>
          )}
        </div>
      </div>
    )
  }
}

export default Leaderboards;