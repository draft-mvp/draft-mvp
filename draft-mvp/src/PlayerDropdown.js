import React, { Component } from 'react';
import './PlayerDropdown.css';

class PlayerDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    const {handleSelectedPlayers} = this.props;
    return (
      <div>
        Player Dropdown Component!
        <form >
        <label>
          Pick your player: 
          <select>
            {this.props.players ? this.props.players.map((player) => <option key={player} value={player}>{player}</option>) : undefined}
          </select>
        </label>
        <input type="button" value="Submit" onClick={handleSelectedPlayers}/>
      </form>
      </div>
    );
  }
}

export default PlayerDropdown;