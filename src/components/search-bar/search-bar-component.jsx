import { Component } from "react";

class SearchBar extends Component {
  render() {
    const { searching } = this.props;
    return (
      <div>
        <input type="search" onChange={searching} />
      </div>
    );
  }
}

export default SearchBar;
