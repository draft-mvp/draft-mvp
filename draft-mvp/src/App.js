import React, { Component } from "react";
import PlayerDropdown from "./PlayerDropdown";
import "./App.css";
import PlayerList from "./PlayerList";
import SearchBar from "./SearchBar";

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
    };
  }

  render() {
    const { players, nbaTeams, college } = this.state;
    return (
      <div>
        <h1>Mock Draft</h1>
        <div>
          <SearchBar college={college}/>
        </div>
        <div>
          <PlayerDropdown nbaTeams={nbaTeams} college={college} players={players}/>
        </div>
        <div>
          <PlayerList players={players} />
        </div>
      </div>
    );
  }
}

export default App;
