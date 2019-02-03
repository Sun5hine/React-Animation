import React, { Component } from 'react';
import './App.css';
import Component1 from './components/Component1'
import Component2 from './components/Component2'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> practicing </h1>
      <h2> me </h2>
        <Component1 />
        <Component2 />
      </div>
    );
  }
}

export default App;
