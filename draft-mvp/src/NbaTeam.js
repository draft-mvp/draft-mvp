import React, { Component } from "react";

export default class NbaTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfPlayers: []
    };
  }

  render() {
    const { selectedNbaTeams } = this.props;
    return <div>{selectedNbaTeams}
    </div>;
  }
}
