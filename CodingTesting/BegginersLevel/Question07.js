// Create a stopwatch application through which users can start, pause and reset the timer. 
// Use React state, event handlers and the setTimeout or setInterval functions to manage the timer’s state and actions.

import React from 'react';

function Stopwatch() {
    const [time, setTime] = React.useState(0);
    const [timeOut, setTimeOut] = React.useState(null);

    const startTimer = () => {
        setTimeOut(setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000));
    }

    return (
        <div>
            <h1>Stopwatch</h1>
            <h2>{time}</h2>
            <button onClick={startTimer}>Start</button>
        </div>
    )
}