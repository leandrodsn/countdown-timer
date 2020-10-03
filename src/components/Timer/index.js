import React from 'react';

import { Container, TimerWrapper, TimeList } from './styles';

class Timer extends React.Component {
  constructor(props) {
      super(props)
      this.state = {displayDate: props.event.date.toLocaleString(), days: null, hours: null, minutes: null, seconds: null, isCounting: false}
      this.getDifferences = this.getDifferences.bind(this)
      this.decrementDate = this.decrementDate.bind(this)
  }
  
  componentDidMount() {
      this.TimerID = setInterval(() => this.decrementDate(), 1000)
  }

  componentWillUnmount() {
      clearInterval(this.TimerId)
  }

  componentDidUpdate(prevProps) {
      if(this.props.event.date !== prevProps.event.date){
          this.currenteDate = new Date()
          this.getDifferences(this.props.event.date, this.currenteDate)
          //this.setState(prev => ({...prev, displayDate: this.props.event.date.toLocaleString(), isCounting: true}))
      }
  }

  getDifferences(event, now) {
      var diff = Math.abs(event - now) / 1000
      var diffDays = Math.floor(diff / (60 * 60 * 24))
      diff -=  diffDays * (60 * 60 * 24)
      var diffHours = Math.floor(diff / (60 * 60 )) % 24
      diff -=  diffHours * (60 * 60 )
      var diffMinutes = Math.floor(diff / 60) % 60
      diff -=  diffMinutes * 60
      var diffSeconds = Math.floor(diff) % 60
      this.setState(prevState => ({...prevState, days: diffDays, hours: diffHours, minutes: diffMinutes, seconds: diffSeconds}))
  }

  decrementDate() {
      this.currenteDate = new Date()
      this.getDifferences(this.props.event.date, this.currenteDate)
  }
  
  render() {
      const isCounting = this.state.isCounting
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
                  </TimeList>
                  <span>{this.state.displayDate}</span>
              </TimerWrapper>
        </Container>
      )
  }
}

export default Timer;
