import React, { Component } from 'react';
import './PlayerDropdown.css';

class PlayerDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};

   // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
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
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default PlayerDropdown;