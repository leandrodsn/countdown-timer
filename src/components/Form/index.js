import React from 'react'

import { Container, InputContainer, FormContainer } from './styles'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {eventName: "", eventDate: "", eventTime: ""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetState = this.resetState.bind(this)
    }
    
    handleChange = event  => {
        const {name, value} = event.target
        this.setState(prevState => ({...prevState, [name]: value}))
        console.log(value)
    }
    
    handleSubmit = e => {
        e.preventDefault()
        const dateTime = new Date(this.state.eventDate+"T"+this.state.eventTime)
        const eventObj = {name: this.state.eventName, date: dateTime, time: this.state.eventTime}
        this.props.handleEvent(eventObj)
        this.resetState()
    }

    resetState() {
        this.setState({eventName: "", eventDate: "", eventTime: ""})
    }

    render() {
        return(
          <Container>
              <FormContainer >
                  <InputContainer>
                      <label>
                          Nome:
                      </label>
                      <input 
                        name="eventName" 
                        value={this.state.eventName} 
                        onChange={this.handleChange} 
                        type="text" 
                        className="form-control" 
                      />
                  </InputContainer>
                  <InputContainer>
                      <label>
                          Data:
                      </label>
                      <input 
                          className="form-control"
                          name="eventDate"
                          type="date"
                          value={this.state.eventDate}
                          onChange={this.handleChange}
                      />
                  </InputContainer>
                  <InputContainer>
                      <label>
                          Horário:
                      </label>
                      <input 
                          className="form-control"
                          name="eventTime"
                          type="time"
                          value={this.state.eventTime}
                          onChange={this.handleChange}
                      />
                  </InputContainer>
                  <InputContainer>
                      <button className="btn" type="submit" onClick={this.handleSubmit}>
                              Start
                      </button>
                  </InputContainer>
              </FormContainer>
            </Container>
        )
    }
}


export default Form