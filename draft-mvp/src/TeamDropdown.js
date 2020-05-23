import React from "react";

const TeamDropdown = ({ nbaTeams }) => (
  <div className="team-dropdown">
    <form>
      <label>
        Choose an NBA team:
        <select>
          {nbaTeams
            ? nbaTeams.map((team, key) => (
                <option key={key} value={team}>
                  {team}
                </option>
              ))
            : undefined}
          ;
        </select>
      </label>
      <input type="submit" value="Select" />
    </form>
  </div>
);

export default TeamDropdown;
