import React, { Component } from "react";
import NbaTeam from "./NbaTeam";

export default class TeamDropdown extends Component {
  constructor(props) {
    super(props);
  }

  //handle change to pass back selected prop back to App to passdown to NBA team
  handleNbaTeamChange = e => {
    const { handleSelectNbaTeams } = this.props;
    let selectedNbaTeam = e.target.value;
    handleSelectNbaTeams(selectedNbaTeam);
    console.log(selectedNbaTeam);
  };

  render() {
    const { nbaTeams } = this.props;
    const { handleNbaTeamChange } = this;
    let options = nbaTeams.map((team, key) => (
      <option key={key} value={team}>
        {team}
      </option>
    ));
    return (
      <div>
        Select an NBA
        <select onClick={handleNbaTeamChange}>
          <option>Select Team</option>
          {options}
        </select>
        {/* <button onClick={handleNbaTeamChange}>Select</button> */}
      </div>
    );
  }
}
