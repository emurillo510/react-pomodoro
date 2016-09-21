import React, { Component } from 'react';

class PomodoroTimerInitializer extends Component {

  constructor(props) {
    super(props);
    this.pomodoroHandler = this.pomodoroHandler.bind(this);
    this.shortBreakHandler = this.shortBreakHandler.bind(this);
    this.longBreakHandler = this.longBreakHandler.bind(this);


  }

  pomodoroHandler(e) {
    this.props.initializeTime("pomodoro");
  }

  shortBreakHandler(e) {
    this.props.initializeTime("short break");
  }

  longBreakHandler(e) {
    this.props.initializeTime("long break");
  }

  render() {


    return (

      <div id="pomodoro-timer-initializer">

        <button onClick={this.pomodoroHandler}>pomodoro</button>
        <button onClick={this.shortBreakHandler}>short break</button>
        <button onClick={this.longBreakHandler}>long break</button>
      
      </div>
    
    );

  }

}

export default PomodoroTimerInitializer;
