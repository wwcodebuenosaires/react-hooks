import React from 'react';

export default class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            time: 0,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((prevState) => ({
            time: prevState.time + 1
        }));
    }

    render() {
        return (
            <div>
                <h3>Timer: {this.state.time}</h3>
            </div>
        );
    }
}
