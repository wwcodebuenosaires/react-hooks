import React from 'react';

export default class Timer extends React.Component {
    constructor() {
      super();
      this.state = {
        time: 0,
        message: 'Waiting...',
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

    componentDidUpdate() {
      if(this.state.time === 10 && this.state.message !== 'Game over') {
        this.setState({
          message: 'Game over'
        })
      }
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
          <h4>{this.state.message}</h4>
        </div>
      );
    }
  }
  