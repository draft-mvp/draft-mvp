import React, { Component } from "react";
import "./App.css";
import PlayerDropdown from "./PlayerDropdown";
import PlayerList from "./PlayerList";
import TeamDropdown from "./TeamDropdown";
import NbaTeam from "./NbaTeam";

const NBATEAMS = ["Lakers", "Warriors", "Cavs", "Bucks", "Clippers"];
const COLLEGE = ["UCLA", "USC", "Duke", "SF State", "UC Berkeley"];
const PLAYERS = [
  "Lebron James",
  "Kevin Durant",
  "Kobe Bryant",
  "James Harden",
  "Anthony Davis"
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      nbaTeams: NBATEAMS,
      college: COLLEGE,
      players: PLAYERS,
      selectedNbaTeams: [],
      selected: false,
      selectedPlayers: ["Lebron James"]
    };
  }

  //update which nba team to render on page
  handleSelectNbaTeams = selectedNbaTeam => {
    this.setState({
      selectedNbaTeams: this.state.selectedNbaTeams.concat([selectedNbaTeam])
    });
  };

  //handle which NBA team to add selected players to
  handleSelectedTeam = () => {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  };

  //populate list of selected players arr with selected player from dropdown
  handleSelectPlayers = selectedPlayer => {
    console.log('selectedPlayer', selectedPlayer)
    this.setState({
      selectedPlayers: this.state.selectedPlayers.concat([selectedPlayer])
    })
  }

  render() {
    const { players, nbaTeams, selectedNbaTeams, selected, selectedPlayers } = this.state;
    const { handleSelectNbaTeams, handleSelectedTeam, handleSelectedPlayers } = this;
    return (
      <div>
        <h1>Mock Draft</h1>
        <PlayerDropdown
          nbaTeams={this.state.nbaTeams}
          college={this.state.college}
          players={this.state.players}
          handleSelectedPlayers={handleSelectedPlayers}
        />
        <PlayerList players={players} />
        <TeamDropdown
          nbaTeams={nbaTeams}
          handleSelectNbaTeams={handleSelectNbaTeams}
          selectedNbaTeams={selectedNbaTeams}
        />
        <NbaTeam selectedNbaTeams={selectedNbaTeams} selected={selected} onClick={handleSelectedTeam} selectedPlayers={selectedPlayers}/>
      </div>
    );
  }
}

export default App;
