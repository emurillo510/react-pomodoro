import React, { Component } from 'react';

class PomodoroTimerClock extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let min = this.props.initialTime / 60;
    let seconds = this.props.initialTime % 60;

    return (

      <div id="pomodoro-timer-clock">
        <p>{min}:{seconds}</p>
      </div>
    
    );

  }

}

export default PomodoroTimerClock;

