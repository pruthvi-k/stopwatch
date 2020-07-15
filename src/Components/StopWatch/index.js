import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./stopwatch.css";

class StopWatch extends Component {
  state = {
    timerOn: false,
    start: 0,
    time: 0,
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time,
    });
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now() - this.state.start,
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      start: 0,
      time: 0,
    });
  };

  render() {
    const { time } = this.state;
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(time / 3600000)).slice(-2);
    return (
      <>
        {/* <div className="stopwatch-header">Stopwatch</div> */}

        <div className="stopwatch text-center d-flex align-items-center flex-column justify-content-center h-100 w-100 bg-dark">
          <div className="timer rounded-circle">
            <div className="timer-text">
              {hours} : {minutes} : {seconds}
            </div>
          </div>

          {this.state.timerOn === false && this.state.time === 0 && (
            <div>
              <Button
                onClick={this.startTimer}
                id="startButton"
                block
                className="my-1 btn-dark"
              >
                Start
              </Button>
            </div>
          )}

          {this.state.timerOn === true && (
            <div>
              <Button onClick={this.stopTimer} block className="my-1 btn-dark">
                Stop
              </Button>
            </div>
          )}
          {this.state.timerOn === false && this.state.time > 0 && (
            <div>
              <Button onClick={this.startTimer} block className="my-1 btn-dark">
                Resume
              </Button>
            </div>
          )}
          {this.state.timerOn === false && this.state.time > 0 && (
            <div>
              <Button onClick={this.resetTimer} block className="my-1 btn-dark">
                Reset
              </Button>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default StopWatch;
