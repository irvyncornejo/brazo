import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Instrucciones from './Instrucciones.js'
import Header from './Header.js'
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Instrucciones/>
      </div>
    );
  }
}

export default App;
