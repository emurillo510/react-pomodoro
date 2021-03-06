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
    this.updateTime = this.updateTime.bind(this);
    this.state = {
      time : 1500,
      status: "STOPPED"
    }

  }
  updateTime(){
    console.log("updating time");
    let newTime = this.state.time - 1;
    console.log("newTime : " + newTime);
    this.setState({time: newTime});
  }

  clockControlHandler(e) {
    console.log("clock control changed");
    console.log(e);
    switch(e) {
      case "start":
      console.log("clock running...");
      this.setState({status: "RUNNING"});
      break;
      case "stop":
      console.log("stop clock");
      this.setState({status: "STOPPED"});
      break;
      case "reset":
      console.log("reset timer");
      this.setState({status: "RESET"});
      break;
      default:

    }
    console.log("clock status: " + this.state.status);
  }

  clockInitializerHandler(e) {
    console.log("set clocks initial time here using: " + e);
    switch(e) {
      case "pomodoro":
        this.setState({time: 1500});
        break;
      case "short break":
        this.setState({time: 300});
        break;
      case "long break":
        this.setState({time: 600});
        break;
      default:
    }
    console.log("initial time is: " + this.state.time);

  }

  

  render() {

    return (
      <div id="pomodoro-timer-component">
        <PomodoroTimerInitializer initializeTime={this.clockInitializerHandler}/>
        <PomodoroTimerClock time={this.state.time} status={this.state.status} updateTime={this.updateTime}/>
        <PomodoroTimerControl clockControlSet={this.clockControlHandler}/>
      </div> 
    );

  }

}

export default PomodoroTimerComponent;
