import mikaBody from './assets/mikaBody.svg'
import mikaTail from './assets/mikaTail.svg'
import mikaEyes from './assets/mikaEyes.svg'
import minuteHand from './assets/minuteHand.svg'
import hourHand from './assets/hourHand.svg'
import handCover from './assets/handCover.svg'

import './App.css'

function App() {


  return (
    <>
      <div className="appContainer">
          <div className="clock">
              <img className="clockEyes" src={mikaEyes} alt="Eyes of the clock" />
              <img className="clockBody" src={mikaBody}  alt="clock body of Mika Clock emulation of the Kit-Cat Klock"/>
              <img className="clockTail" src={mikaTail} alt="clockTail Tail"/>
              <img className="handCover" src={handCover} alt="clock hand cover"/>
              <img className="minuteHand" src={minuteHand} alt="clock minute hand"/>
              <img className="hourHand" src={hourHand} alt="clock hour hand"/>
          </div>
      </div>
    </>
  )
}

export default App
