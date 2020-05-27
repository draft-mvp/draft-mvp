import React, { Component } from "react";

export default class TeamDropdown extends Component {
  constructor(props) {
    super(props);
  }

  //handle change to pass back selected prop back to App to passdown to NBA team
  handleNbaTeamChange = e => {
    const { handleSelectNbaTeams, selectedNbaTeams, nbaTeams } = this.props;
    let selectedTeam = e.target.value;
    // console.log("selectedNbaTeams", selectedNbaTeams);
    // console.log("nbaTeams", nbaTeams);
    if (
      nbaTeams.includes(selectedTeam) &&
      !selectedNbaTeams.includes(selectedTeam)
    ) {
      handleSelectNbaTeams(selectedTeam);
      console.log(selectedTeam);
    }
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
