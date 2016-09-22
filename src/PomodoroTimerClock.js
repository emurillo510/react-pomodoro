import React, { Component } from 'react';

class PomodoroTimerClock extends Component {

  constructor(props) {
    super(props);
    this.updateTimer = this.updateTimer.bind(this);

  }

  updateTimer() {
    this.props.updateTime();
  }

  render() {

    switch(this.props.status) {
      case "STOPPED":
      break;
      case "RUNNING":
      clearInterval(this.interval);
      this.interval = setInterval(this.updateTimer, 1000);
      break;
      case "RESET":
      break;
      default:

    }

    return (

      <div id="pomodoro-timer-clock">
        <p>{this.props.status}</p>
        <p>{this.props.time}</p>
      </div>
    
    );

  }

}

export default PomodoroTimerClock;

