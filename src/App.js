import React, { Component } from 'react';
import './App.css';
import PomodoroTimerComponent from './PomodoroTimerComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PomodoroTimerComponent/>
      </div>
    );
  }
}

export default App;
