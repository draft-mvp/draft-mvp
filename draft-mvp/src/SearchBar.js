import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  searchOnChange = (e) => {
   // console.log("Hi from searchOnChange: ", e.target.value);
    this.setState({
      "searchInput": e.target.value
    });
  };

  render() {
    const { college } = this.props;
    const { searchInput } = this.state;
    const { searchOnChange } = this;

    //returns an array of colleges based on search input
    const filteredColleges = 
      college.filter(school => {
        return school.toLowerCase().includes(searchInput.toLowerCase());
      });
      console.log('Filtered Colleges Array: ', filteredColleges)
    return (
      <div>
        <label htmlFor="search">Search by College name</label>
        <input type="text" value={searchInput} onChange={searchOnChange} />
      </div>
    );
  }
}

export default SearchBar;