import React, { Component } from "react";
import PlayerDropdown from './PlayerDropdown';
import "./App.css";


const NBATEAMS = ['Lakers', 'Warriors', 'Cavs', 'Bucks', 'Clippers'];
const COLLEGE = ['UCLA', 'USC', 'Duke', 'SF State', 'UC Berkeley']; 
const PLAYERS = ['Lebron James', 'Kevin Durant', 'Kobe Bryant', 'James Harden', 'Anthony Davis'];

class App extends Component {
  constructor() {
    super()
    this.state = {
      nbaTeams: NBATEAMS,
      college: COLLEGE,
      players: PLAYERS
    }
  }

  render() {
    return (
      <div>
        <h1>Mock Draft</h1>
        <PlayerDropdown nbaTeams={this.state.nbaTeams} college={this.state.college} players={this.state.players}/>
      </div>
    );
  }
}

export default App;
