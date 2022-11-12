import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name:{firstName: 'Serhii', lastName: 'Sukmaniuk'},
      company: 'Elogic'
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, {this.state.name.firstName} {this.state.name.lastName}. I work in {this.state.company}
          </p>
         <button onClick={() => {
          this.setState({name:{firstName: 'John', lastName: 'Doe'} });
         }}>Change name</button>
        </header>
      </div>
    );
  }

}

export default App;