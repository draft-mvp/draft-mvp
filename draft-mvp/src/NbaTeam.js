import React, { Component } from "react";

export default class NbaTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfPlayers: [],
    };
  }

  render() {
    const { selectedNbaTeams, selected } = this.props;
    if(!selected) {
      return <div>{selectedNbaTeams}</div>;
    } else {
      return <div>
        {selectedNbaTeams}
        
      </div>
    }
  }
}
