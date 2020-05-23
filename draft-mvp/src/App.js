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
      searchInput: "",
      filteredColleges: []
    };
  }
  
  searchOnChange = (e) => {
     this.setState({
       searchInput: e.target.value
     });
     //creates array of filtered colleges based on search input
     const filteredColleges = 
      this.state.college.filter(school => {
        return school.toLowerCase().includes(this.state.searchInput.toLowerCase());
      });
      this.setState({
        filteredColleges: filteredColleges,
      });
      console.log("App component: this.state.filteredColleges ", this.state.filteredColleges);
   };

  render() {
    const { college, players, nbaTeams, searchInput } = this.state;
    const { searchOnChange } = this;
    return (
      <div>
        <h1>Mock Draft</h1>
        <div>
          <SearchBar searchOnChange={searchOnChange} searchInput={searchInput}/>
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
