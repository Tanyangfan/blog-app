import React, {Component} from 'react';
import './App.css';
import AppList from './components/AppList'

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