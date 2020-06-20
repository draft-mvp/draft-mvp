import React, { useState, Component } from "react";
import "./App.css";
import PlayerDropdown from "./PlayerDropdown";
import PlayerList from "./PlayerList";
import TeamDropdown from "./TeamDropdown";
import NbaTeam from "./NbaTeam";
import SearchBar from "./SearchBar";
import { DragDropContext } from "react-beautiful-dnd";

const NBATEAMS = ["Lakers", "Warriors", "Cavs", "Bucks", "Clippers"];
const COLLEGE = ["UCLA", "USC", "Duke", "SF State", "UC Berkeley"];
const PLAYERS = [
  "Lebron James",
  "Kevin Durant",
  "Kobe Bryant",
  "James Harden",
  "Anthony Davis",
];

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       nbaTeams: NBATEAMS,
//       college: COLLEGE,
//       players: PLAYERS,
//       selectedNbaTeams: [],
//       searchInput: "",
//       filteredColleges: [],
//     };
//     this.handleSelectNbaTeams = this.handleSelectNbaTeams.bind(this);
//   }

//   searchOnChange = (e) => {
//     this.setState({
//       searchInput: e.target.value,
//     });
//     //creates array of filtered colleges based on search input
//     const filteredColleges = this.state.college.filter((school) => {
//       return school
//         .toLowerCase()
//         .includes(this.state.searchInput.toLowerCase());
//     });
//     this.setState({
//       filteredColleges: filteredColleges,
//     });
//     console.log(
//       "App component: this.state.filteredColleges ",
//       this.state.filteredColleges
//     );
//   };

//   //update which nba team to render on page
//   handleSelectNbaTeams = (selectedNbaTeam) => {
//     this.setState({
//       selectedNbaTeams: this.state.selectedNbaTeams.concat([selectedNbaTeam]),
//     });
//   };

//   onDragEnd = (result) => {
//     const { destination, source, draggableId, type } = result;
//     if (!destination) {
//       return;
//     }
//   };

//   render() {
//     const {
//       college,
//       players,
//       nbaTeams,
//       searchInput,
//       selectedNbaTeams,
//     } = this.state;
//     const { searchOnChange, handleSelectNbaTeams } = this;
//     return (
//       <DragDropContext onDragEnd={this.onDragEnd}>
//         <div>
//           <h1>Mock Draft</h1>
//           <div>
//             <SearchBar
//               searchOnChange={searchOnChange}
//               searchInput={searchInput}
//             />
//           </div>

//           <PlayerDropdown
//             nbaTeams={this.state.nbaTeams}
//             college={this.state.college}
//             players={this.state.players}
//           />
//           <PlayerList players={players} />
//           <TeamDropdown
//             nbaTeams={nbaTeams}
//             handleSelectNbaTeams={handleSelectNbaTeams}
//           />
//           <NbaTeam selectedNbaTeams={selectedNbaTeams} />
//         </div>
//       </DragDropContext>
//     );
//   }
// }

const PLAYERS = [
  { id: 0, player: "Lebron James" },
  { id: 1, player: "Kobe Bryant" },
];

const COLLEGES = [
  { id: 0, school: "USC" },
  { id: 1, school: "UCLA" },
];
const NBATEAMS = ["Lakers", "GSW", "Rockers"];


function App() {

  const [colleges, setColleges] = useState(COLLEGES)
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => console.log(result)}
      >
        {Object.entries(colleges).map(([]))}


      </DragDropContext>
    </div>
  );
}

export default App;
