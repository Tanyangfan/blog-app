import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppList from './components/appList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppList/>
      </div>
    );
  }
}

export default App;
