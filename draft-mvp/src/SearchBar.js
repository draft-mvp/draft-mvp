import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {
    const { searchOnChange, searchInput } = this.props;
  
    return (
      <div>
        <label htmlFor="search">Search by College name</label>
        <input type="text" value={searchInput} onChange={searchOnChange} />
      </div>
    );
  }
}

export default SearchBar;