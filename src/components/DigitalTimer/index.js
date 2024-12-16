// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {timerOn: false, minutes: 25, seconds: 0}

  componentWillUnmount() {
    this.clearTimer()
  }

  clearTimer = () => clearInterval(this.intervalId)

  plusClicked = () => {
    const {timerOn} = this.state
    if (!timerOn) {
      this.setState(prev => ({minutes: prev.minutes + 1}))
    }
  }

  minusClicked = () => {
    const {timerOn, minutes} = this.state
    if (!timerOn && minutes > 0) {
      this.setState(prev => ({minutes: prev.minutes - 1}))
    }
  }

  resetClicked = () => {
    this.clearTimer()
    this.setState({timerOn: false, minutes: 25, seconds: 0})
  }

  increasedSeconds = () => {
    const {minutes, seconds} = this.state
    const timerCompleted = seconds === minutes * 60

    if (timerCompleted) {
      this.clearTimer()
      this.setState({timerOn: false, seconds: 0})
    } else {
      this.setState(prev => ({seconds: prev.seconds + 1}))
    }
  }

  startOrPauseClicked = () => {
    const {timerOn, minutes, seconds} = this.state

    const timerCompleted = seconds === minutes * 60

    if (timerCompleted) {
      this.setState({seconds: 0, minutes: 25})
    }
    if (timerOn) {
      this.clearTimer()
    } else {
      this.intervalId = setInterval(this.increasedSeconds, 1000)
    }

    this.setState(prev => ({timerOn: !prev.timerOn}))
  }

  render() {
    const {timerOn, minutes, seconds} = this.state

    const remainSec = minutes * 60 - seconds

    let min = Math.floor(remainSec / 60)

    let sec = Math.floor(remainSec % 60)

    if (min < 0 && sec < 0) {
      min = 0
      sec = 0
    }

    let icon = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    let altText = 'play icon'
    let iconText = 'Start'
    let timerText = 'Paused'

    if (timerOn) {
      icon = 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      altText = 'pause icon'
      iconText = 'Pause'
      timerText = 'Running'
    }

    return (
      <div className="bgcont">
        <h1 className="head">Digital Timer</h1>
        <div className="card">
          <div className="imgCard">
            <div className="timerCard">
              <h1 className="timer">
                {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
              </h1>
              <p className="pause">{timerText}</p>
            </div>
          </div>
          <div className="optionsCard">
            <div className="buttonsCard">
              <button
                onClick={this.startOrPauseClicked}
                className="iconBut"
                type="button"
              >
                <img className="imgicons" alt={altText} src={icon} />
                <p className="btnTxt">{iconText}</p>
              </button>
              <button
                onClick={this.resetClicked}
                className="iconBut"
                type="button"
              >
                <img
                  className="imgicons"
                  alt="reset icon"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                />
                <p className="btnTxt">Reset</p>
              </button>
            </div>
            <p className="fortimer"> Set Timer limit</p>
            <div className="endBtns">
              <button
                onClick={this.minusClicked}
                className="plus"
                type="button"
              >
                -
              </button>
              <p className="timerstat">25</p>
              <button onClick={this.plusClicked} className="plus" type="button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
