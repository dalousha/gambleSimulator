/* eslint-disable no-useless-constructor */
import React from 'react';

class LeaderboardTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.index + 1}: {this.props.user}
      </div>
    )
  }
}

export default LeaderboardTile;