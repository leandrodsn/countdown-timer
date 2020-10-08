import React from 'react';

import { Container, TimerWrapper, TimeList } from './styles';

export const FormattedDate = props => <small>{props.date.toLocaleString()}</small>

class Timer extends React.Component {
  constructor(props) {
      super(props)
      this.state = {days: 0, hours: 0, minutes: 0, seconds: 0}
      this.getRemainingTime = this.getRemainingTime.bind(this)
      this.decrementTime = this.decrementTime.bind(this)
  }
  
  componentDidUpdate(){
    if(this.TimerID) {
      clearTimeout(this.TimerID)
    }
    if(this.props.isCounting){
      this.TimerID = setTimeout(() => this.decrementTime(), 1000)
    }
  }

  decrementTime() {
    const timeData = this.getRemainingTime(this.props.event.date)
    this.setState({days: timeData.days, hours: timeData.hours, minutes: timeData.minutes, seconds: timeData.seconds})
    if(timeData.total <= 0){
      this.props.handleCounter()
    }
  }

  getRemainingTime(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date())
    const diffS = Math.floor( (total/1000) % 60 )
    const diffM = Math.floor( (total/1000/60) % 60 )
    const diffH = Math.floor( (total/(1000*60*60)) % 24 )
    const diffD = Math.floor( (total/(1000*60*60*24)) )
    return { total: total, seconds: diffS, minutes: diffM, hours: diffH, days: diffD}
  }
    
  render() {
      return (
        <Container>
              <TimerWrapper>
                  <strong className="EventName">{this.props.event.name}</strong>
                  <TimeList>
                        <li>
                          <div className="ItemTime"><b>{this.state.days}</b></div>
                          <small>Dias</small>
                        </li>
                        <li>
                          <div className="ItemTime"><b>{this.state.hours}</b></div>
                          <small>Horas</small>
                        </li>
                        <li>
                          <div className="ItemTime"><b>{this.state.minutes}</b></div>
                          <small>Minutos</small>
                        </li>
                        <li>
                          <div className="ItemTime"><b>{this.state.seconds}</b></div>
                          <small>Segundos</small>
                        </li>
                        {this.state.isCounting}
                  </TimeList>
                  <FormattedDate date={this.props.event.date} />
              </TimerWrapper>
        </Container>
      )
  }
}

export default Timer;
