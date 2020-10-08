import React, {useState} from 'react';
import Form from './components/Form'
import Timer from './components/Timer'
import './App.css';

function App() {
  const [eventState, setEventState] = useState({name: "Event Name", date: new Date()})
  const [isCounting, setIsCounting] = useState(false)

  function handleEvent(event) {
    setEventState(event)
    handleCounter()
  }

  function handleCounter(){
    setIsCounting(!isCounting)
  }
  
  return (
    <>
      <div className="App">
        <h2 className="Title">Countdown Timer</h2>
        <div className="App-Container">
          <Form handleEvent={handleEvent}/>
          <Timer event={eventState} handleCounter={handleCounter} isCounting={isCounting}/>
        </div>
      </div>
    </>
  );
}

export default App;
