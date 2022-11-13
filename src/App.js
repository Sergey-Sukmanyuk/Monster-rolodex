import { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import CardList from './components/cards-list/card-list-component';
import SearchBar from './components/search-bar/search-bar-component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchValue: ''
    }
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters => this.setState( () => {
      return { monsters };
    }))
  }

   searching = (e) => {
    const searchValue = e.target.value.toLowerCase();

     this.setState(() => {
       return { searchValue }
     })
  
 }

  render() {

    const { monsters, searchValue } = this.state;
    const { searching } = this;

    const searchMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchValue);
     });

    return (
      <div className="App">
        <SearchBar searching={searching} />
        <CardList monsters={ searchMonster } />
      </div>
    );
  }

}

export default App;
