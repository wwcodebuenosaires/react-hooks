import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [time, setTime] = useState(0);
    const [message, setMessage] = useState('Waiting...')

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        };
    });

    useEffect(() => {
       if(time === 10) {
           setMessage('Game over')
       }
    },[time]);

    function tick() {
        setTime(time + 1);
    }

    return (
        <div>
            <h3>{message}</h3>
            <h3>Timer: {time}</h3>
        </div>
    );
}

