import { Component } from "react";

import './search-bar-styles.css'

class SearchBar extends Component {
  render() {
    const { searchHeandler, className, placeholder } = this.props;
    return (
      <div>
        <input 
        className={`search-box ${className}`}
        placeholder={placeholder} 
        type="search" 
        onChange={searchHeandler} />
      </div>
    );
  }
}

export default SearchBar;
