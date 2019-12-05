import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        };
    });

    function tick() {
        setTime(time + 1);
    }

    return (
        <div>
            <h3>Timer: {time}</h3>
        </div>
    );
}

