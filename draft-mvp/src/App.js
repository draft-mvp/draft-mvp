import React, { Component } from "react";
import "./App.css";
import PlayerDropdown from "./PlayerDropdown";
import PlayerList from "./PlayerList";
import TeamDropdown from "./TeamDropdown";

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
      players: PLAYERS
    };
  }

  render() {
    const { players, nbaTeams } = this.state;
    return (
      <div>
        <h1>Mock Draft</h1>
        <PlayerDropdown
          nbaTeams={this.state.nbaTeams}
          college={this.state.college}
          players={this.state.players}
        />
        <PlayerList players={players} />
        <TeamDropdown nbaTeams={nbaTeams}/>
      </div>
    );
  }
}

export default App;
