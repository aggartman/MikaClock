import React, { useEffect, useRef } from 'react';

import mikaBody from './assets/mikaBody.svg'
import mikaTail from './assets/mikaTail.svg'
import mikaEyes from './assets/mikaEyes.svg'
import minuteHand from './assets/minuteHand.svg'
import hourHand from './assets/hourHand.svg'
import handCover from './assets/handCover.svg'

import './App.css'

function App() {
    const hourHandRef = useRef(null);
    const minuteHandRef = useRef(null);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const hours = now.getHours() % 12;
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const minuteAngle = (minutes * 6) + (seconds * 0.1);
            const hourAngle = (hours * 30) + (minutes * 0.5);

            if (hourHandRef.current) {
                hourHandRef.current.style.transform = `rotate(${hourAngle}deg)`;
            }

            if (minuteHandRef.current) {
                minuteHandRef.current.style.transform = `rotate(${minuteAngle}deg)`;
            }
        };

        // Update immediately
        updateClock();

        // Update every second
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, []);

  return (
    <>
      <div className="appContainer">
          <div className="clock">
              <img className="clockEyes" src={mikaEyes} alt="Eyes of the clock" />
              <img className="clockBody" src={mikaBody}  alt="clock body of Mika Clock emulation of the Kit-Cat Klock"/>
              <img className="clockTail" src={mikaTail} alt="clockTail Tail"/>
              <img className="handCover" src={handCover} alt="clock hand cover"/>
              <img
                  ref={minuteHandRef}
                  className="minuteHand"
                  src={minuteHand}
                  alt="clock minute hand"/>
              <img
                  ref={hourHandRef}
                  className="hourHand"
                  src={hourHand}
                  alt="clock hour hand"/>
          </div>
          <div className="textContainer">
              <p className="mika">
                  To Mika,
              </p>
              <p className="text2">
                  Love Dad
              </p>
          </div>
      </div>
    </>
  )
}

export default App
