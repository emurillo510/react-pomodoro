import React, { Component } from 'react';

import PomodoroTimerInitializer from './PomodoroTimerInitializer';
import PomodoroTimerClock from './PomodoroTimerClock';
import PomodoroTimerControl from './PomodoroTimerControl';

import './PomodoroTimerComponent.css';

class PomodoroTimerComponent extends Component {

  constructor(props) {
    super(props);
    this.clockControlHandler = this.clockControlHandler.bind(this);
    this.clockInitializerHandler = this.clockInitializerHandler.bind(this);
    this.state = {
      initialTime : 60*25,
      timeControlStatus: "STOPPED"
    }

  }

  clockControlHandler(e) {
    console.log("clock control changed");
    console.log(e);
  }

  clockInitializerHandler(e) {
    console.log("set clocks initial time here");
    console.log(e);
  }

  

  render() {

    return (
      <div id="pomodoro-timer-component">
        {this.state.timeControlStatus} 
        <PomodoroTimerInitializer initializeTime={this.clockInitializerHandler}/>
        <PomodoroTimerClock initialTime={this.state.initialTime}/>
        <PomodoroTimerControl clockControlSet={this.clockControlHandler}/>
      </div> 
    );

  }

}

export default PomodoroTimerComponent;
