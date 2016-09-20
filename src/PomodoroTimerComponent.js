import React, { Component } from 'react';

import PomodoroTimerInitializer from './PomodoroTimerInitializer';
import PomodoroTimerClock from './PomodoroTimerClock';
import PomodoroTimerControl from './PomodoroTimerControl';

import './PomodoroTimerComponent.css';

class PomodoroTimerComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialTime : 60*25,
      timeControlStatus: "STOPPED"
    }

  }

  

  render() {

    return (
      <div id="pomodoro-timer-component">
        {this.state.timeControlStatus} 
        <PomodoroTimerInitializer/>
        <PomodoroTimerClock initialTime={this.state.initialTime}/>
        <PomodoroTimerControl/>
      </div> 
    );

  }

}

export default PomodoroTimerComponent;
