import React from "react";
import Player from "./Player.js";

const PlayerList = ({ players }) => (
  <div className="playerList">
    {players.map(player => (
      <Player player={player} />
    ))}
  </div>
);

export default PlayerList;
