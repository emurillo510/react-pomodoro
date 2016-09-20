import React, { Component } from 'react';

class PomodoroTimerControl extends Component {

  constructor(props) {
    super(props);
    this.startHandler = this.startHandler.bind(this);
    this.stopHandler = this.stopHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.state = {
      status: "STOPPED"
    }
  }

  startHandler() {
    console.log("start");

  }

  stopHandler() {
    console.log("stop");
  }

  resetHandler() {
    console.log("reset");
  }


  render() {

    return (

      <div id="pomodoro-timer-control">
        <button onClick={this.startHandler}>start</button>
        <button onClick={this.stopHandler}>stop</button>
        <button onClick={this.resetHandler}>reset</button>
      </div>
    
    );

  }

}

export default PomodoroTimerControl;
