import React, { Component } from 'react';

class PomodoroTimerClock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialTime : this.props.initialTime
    }

  }

  render() {

    let min = this.state.initialTime / 60;
    let seconds = this.state.initialTime % 60;

    return (

      <div id="pomodoro-timer-clock">
        <p>{min}:{seconds}</p>
      </div>
    
    );

  }

}

export default PomodoroTimerClock;

