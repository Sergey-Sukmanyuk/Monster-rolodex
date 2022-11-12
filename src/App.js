import { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';

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

  render() {

    const searchMonster = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchValue);
     });

    return (
      <div className="App">
        <input type='search' onChange={(e) => {
           const searchValue = e.target.value.toLowerCase();

            this.setState(() => {
              return { searchValue }
            })
           
        }}/>
       {
        searchMonster.map( monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })
       }
      </div>
    );
  }

}

export default App;
