import React, { Component } from 'react';
import PomodoroTimerControl from './PomodoroTimerControl';

class PomodoroTimerComponent extends Component {

  render() {

    return (
      <div id="pomodoro-timer-component">
        <PomodoroTimerControl/>
      </div> 
    );

  }

}

export default PomodoroTimerComponent;
