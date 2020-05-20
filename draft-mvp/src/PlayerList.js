import React from "react";
import Player from "./Player.js";

const PlayerList = ({ players }) => (
  <div className="playerList">
    {players.map((player, key) => (
      <Player player={player} key={key}/>
    ))}
  </div>
);

export default PlayerList;
