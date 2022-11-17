import { Component } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { render } from "@testing-library/react";
import CardList from "./components/cards-list/card-list-component";
import SearchBar from "./components/search-bar/search-bar-component";

const App = () => {
  const [searchMostaerField, setSearchMostaerField] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(monsters => setMonsters(monsters))
  }, []);

  const onSearchChange = (e) => {
    const searchTyping = e.target.value.toLowerCase();
    setSearchMostaerField(searchTyping);
  
  };

  const searchMonster = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchMostaerField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex </h1>
      <SearchBar
        searchHeandler={onSearchChange}
        className="monster-search-box"
        placeholder="Search monster"
      />
      <CardList monsters={searchMonster} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchValue: ''
//     }
//   };
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(monsters => this.setState( () => {
//       return { monsters };
//     }))
//   }

//    searching = (e) => {
//     const searchValue = e.target.value.toLowerCase();

//      this.setState(() => {
//        return { searchValue }
//      })

//  }

//   render() {

//     const { monsters, searchValue } = this.state;
//     const { searching } = this;

//     const searchMonster = monsters.filter(monster => {
//       return monster.name.toLowerCase().includes(searchValue);
//      });

//     return (
//       <div className="App">
//         <h1 class = 'app-title'>Monsters Rolodex </h1>
//         <SearchBar searchHeandler={searching}
//         className='monster-search-box'
//         placeholder='Search monster' />
//         <CardList monsters={ searchMonster } />
//       </div>
//     );
//   }

// }

export default App;
