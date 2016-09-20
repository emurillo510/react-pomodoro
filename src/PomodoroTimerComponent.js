import React, { Component } from 'react';

import PomodoroTimerInitializer from './PomodoroTimerInitializer';
import PomodoroTimerClock from './PomodoroTimerClock';
import PomodoroTimerControl from './PomodoroTimerControl';

class PomodoroTimerComponent extends Component {

  render() {

    return (
      <div id="pomodoro-timer-component">
        <PomodoroTimerInitializer/>
        <PomodoroTimerClock/>
        <PomodoroTimerControl/>
      </div> 
    );

  }

}

export default PomodoroTimerComponent;
