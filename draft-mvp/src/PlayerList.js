import React from "react";
import Player from './Player.js'

const PlayerList = props => <div>{props.players.map(player => (
  <Player player={player}/>
))}</div>;

export default PlayerList;
