import React, { Component } from 'react';
import AddItem from './containers/AddItem';
import './App.css';

class App extends Component {
  render() {
      return (
        <div className="App">
          <AddItem/>
        </div>
      );
    }
  }

export default App;
